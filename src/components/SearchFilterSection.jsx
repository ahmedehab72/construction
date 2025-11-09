import { Search, Filter, MapPin, Building, Users } from "lucide-react";

export default function SearchFilterSection({
  searchFilters,
  setSearchFilters,
}) {
  const constructionTypes = [
    "All Types",
    "Residential",
    "Commercial",
    "Industrial",
    "Infrastructure",
  ];

  const locations = [
    "All Areas",
    "Kuwait City",
    "Hawalli",
    "Farwaniya",
    "Mubarak Al-Kabeer",
    "Ahmadi",
    "Jahra",
  ];

  const companySizes = [
    "All Sizes",
    "Small (1-50 employees)",
    "Medium (51-200 employees)",
    "Large (201+ employees)",
  ];

  const handleFilterChange = (key, value) => {
    setSearchFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id="search-section" className="pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-orange-100">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for construction companies, services, or projects..."
              value={searchFilters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Filters */}
        {/* <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
          <div className="flex items-center mb-6">
            <Filter className="text-orange-600 mr-2" size={20} />
            <h3 className="text-lg font-semibold text-gray-800">
              Filter Your Search
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="flex items-center mb-3 text-sm font-medium text-gray-700">
                <Building className="mr-2 text-orange-600" size={16} />
                Construction Type
              </label>
              <select
                value={searchFilters.constructionType}
                onChange={(e) =>
                  handleFilterChange("constructionType", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              >
                {constructionTypes.map((type) => (
                  <option key={type} value={type === "All Types" ? "" : type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center mb-3 text-sm font-medium text-gray-700">
                <MapPin className="mr-2 text-orange-600" size={16} />
                Location
              </label>
              <select
                value={searchFilters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              >
                {locations.map((location) => (
                  <option
                    key={location}
                    value={location === "All Areas" ? "" : location}
                  >
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center mb-3 text-sm font-medium text-gray-700">
                <Users className="mr-2 text-orange-600" size={16} />
                Company Size
              </label>
              <select
                value={searchFilters.companySize}
                onChange={(e) =>
                  handleFilterChange("companySize", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              >
                {companySizes.map((size) => (
                  <option key={size} value={size === "All Sizes" ? "" : size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              }}
            >
              Apply Filters
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
