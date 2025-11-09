import { useState } from "react";
import {
  Star,
  MapPin,
  Phone,
  Globe,
  Grid3X3,
  List,
  Building,
} from "lucide-react";

export default function CompanyListingsSection({
  searchFilters,
  setSelectedCompany,
}) {
  const [viewMode, setViewMode] = useState("grid");

  const allCompanies = [
    {
      id: 5,
      name: "Al-Tijara Construction",
      logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&h=300&q=80",
      type: "Commercial",
      location: "Kuwait City",
      rating: 4.5,
      reviews: 75,
      phone: "+965 2244 5566",
      website: "www.altijara.com.kw",
      description:
        "Specialized in commercial building construction and renovation.",
      yearEstablished: 1995,
      specialties: ["Office Buildings", "Shopping Centers", "Hotels"],
      size: "Medium (51-200 employees)",
    },
    {
      id: 6,
      name: "Desert Eagle Contracting",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&h=300&q=80",
      type: "Residential",
      location: "Jahra",
      rating: 4.3,
      reviews: 62,
      phone: "+965 2255 7788",
      website: "www.deserteagle.com.kw",
      description:
        "Quality residential construction serving families across Kuwait.",
      yearEstablished: 2008,
      specialties: ["Family Homes", "Villas", "Townhouses"],
      size: "Small (1-50 employees)",
    },
    {
      id: 7,
      name: "Kuwait Steel Works",
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&h=300&q=80",
      type: "Industrial",
      location: "Ahmadi",
      rating: 4.4,
      reviews: 88,
      phone: "+965 2266 8899",
      website: "www.kuwaitsteelworks.com",
      description: "Heavy industrial construction and steel fabrication.",
      yearEstablished: 1982,
      specialties: ["Steel Structures", "Warehouses", "Factories"],
      size: "Large (201+ employees)",
    },
    {
      id: 8,
      name: "Green Building Solutions",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&h=300&q=80",
      type: "Sustainable",
      location: "Hawalli",
      rating: 4.7,
      reviews: 54,
      phone: "+965 2277 9900",
      website: "www.greenbuild.kw",
      description:
        "Eco-friendly construction with sustainable building practices.",
      yearEstablished: 2012,
      specialties: ["Green Buildings", "Solar Integration", "LEED Certified"],
      size: "Medium (51-200 employees)",
    },
  ];

  // Filter companies based on search filters
  const filteredCompanies = allCompanies.filter((company) => {
    const matchesSearch =
      !searchFilters.search ||
      company.name.toLowerCase().includes(searchFilters.search.toLowerCase()) ||
      company.description
        .toLowerCase()
        .includes(searchFilters.search.toLowerCase());

    const matchesType =
      !searchFilters.constructionType ||
      company.type.includes(searchFilters.constructionType);

    const matchesLocation =
      !searchFilters.location || company.location === searchFilters.location;

    const matchesSize =
      !searchFilters.companySize || company.size === searchFilters.companySize;

    return matchesSearch && matchesType && matchesLocation && matchesSize;
  });

  const CompanyCard = ({ company, isGridView }) => (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-orange-100 group ${
        isGridView ? "p-6" : "p-4 flex items-center space-x-6"
      }`}
      onClick={() => setSelectedCompany(company)}
    >
      {/* Logo */}
      <div
        className={`${isGridView ? "w-16 h-16 mb-4 mx-auto" : "w-20 h-20 flex-shrink-0"} overflow-hidden rounded-lg`}
      >
        <img
          src={company.logo}
          alt={company.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Company Info */}
      <div className={`${isGridView ? "text-center" : "flex-1"}`}>
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-200">
          {company.name}
        </h3>

        <div
          className={`${isGridView ? "mb-3" : "flex items-center space-x-4 mb-2"}`}
        >
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-2">
            {company.type}
          </span>

          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-1" />
            {company.location}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {company.description}
        </p>

        <div
          className={`${isGridView ? "space-y-2" : "flex items-center space-x-6"}`}
        >
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{company.rating}</span>
            <span className="text-sm text-gray-500 ml-1">
              ({company.reviews})
            </span>
          </div>

          {!isGridView && (
            <div className="flex items-center text-sm text-gray-600">
              <Phone size={16} className="mr-1" />
              {company.phone}
            </div>
          )}

          {!isGridView && (
            <div className="flex items-center text-sm text-gray-600">
              <Globe size={16} className="mr-1" />
              {company.website}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="companies" className="pb-16 pt-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              All
              <span
                className="text-transparent bg-clip-text ml-3"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                }}
              >
                Companies
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              {filteredCompanies.length} companies found
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-orange-600 text-white shadow-md"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              <Grid3X3 size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-orange-600 text-white shadow-md"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Companies Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              isGridView={viewMode === "grid"}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Building size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No companies found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search filters to find more results.
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredCompanies.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 text-orange-600 font-semibold border-2 border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
              Load More Companies
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
