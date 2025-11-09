import { Star, MapPin, Building, ArrowRight } from "lucide-react";

export default function FeaturedCompaniesSection({ setSelectedCompany }) {
  const featuredCompanies = [
    {
      id: 1,
      name: "Al-Kharafi Construction",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&h=400&q=80",
      type: "Commercial & Residential",
      location: "Kuwait City",
      rating: 4.9,
      reviews: 150,
      description:
        "Leading construction company with 30+ years of experience in Kuwait.",
      yearEstablished: 1985,
      specialties: [
        "Commercial Buildings",
        "Residential Projects",
        "Infrastructure",
      ],
      projects: 200,
    },
    {
      id: 2,
      name: "Kuwait Building Company",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=400&q=80",
      type: "Industrial",
      location: "Ahmadi",
      rating: 4.8,
      reviews: 120,
      description:
        "Specialized in industrial construction and oil & gas facilities.",
      yearEstablished: 1978,
      specialties: [
        "Industrial Facilities",
        "Oil & Gas",
        "Manufacturing Plants",
      ],
      projects: 150,
    },
    {
      id: 3,
      name: "Gulf Construction Group",
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=400&q=80",
      type: "Infrastructure",
      location: "Farwaniya",
      rating: 4.7,
      reviews: 89,
      description:
        "Expert in large-scale infrastructure and government projects.",
      yearEstablished: 1990,
      specialties: ["Roads & Bridges", "Government Buildings", "Public Works"],
      projects: 85,
    },
    {
      id: 4,
      name: "Modern Builders Kuwait",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&h=400&q=80",
      type: "Residential",
      location: "Hawalli",
      rating: 4.6,
      reviews: 95,
      description: "Innovative residential construction with modern designs.",
      yearEstablished: 2005,
      specialties: ["Modern Homes", "Apartment Buildings", "Smart Buildings"],
      projects: 65,
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Featured
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Kuwait's most trusted and experienced construction
            companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-orange-100 group"
              onClick={() => setSelectedCompany(company)}
            >
              {/* Company Logo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium bg-orange-600 px-3 py-1 rounded-full">
                      {company.type}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">
                        {company.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  {company.name}
                </h3>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{company.location}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {company.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {company.reviews} reviews
                  </div>
                  <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:text-orange-700">
                    <span className="mr-1">View Details</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            View All Companies
          </button>
        </div>
      </div>
    </section>
  );
}
