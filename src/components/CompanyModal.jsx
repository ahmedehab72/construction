import {
  X,
  Star,
  MapPin,
  Phone,
  Globe,
  Calendar,
  Users,
  Building,
  ExternalLink,
} from "lucide-react";

export default function CompanyModal({ company, onClose }) {
  if (!company) return null;

  const sampleProjects = [
    {
      id: 1,
      name: "Kuwait International Business Center",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400&q=80",
      year: 2023,
      type: "Commercial",
    },
    {
      id: 2,
      name: "Al-Khairan Residential Complex",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&h=400&q=80",
      year: 2022,
      type: "Residential",
    },
    {
      id: 3,
      name: "Shuwaikh Industrial Park",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=400&q=80",
      year: 2021,
      type: "Industrial",
    },
  ];

  const sampleReviews = [
    {
      id: 1,
      name: "Ahmed Al-Mansouri",
      rating: 5,
      date: "2024-01-15",
      comment:
        "Excellent work quality and professional service. Completed our villa renovation on time and within budget.",
    },
    {
      id: 2,
      name: "Sarah Al-Sabah",
      rating: 4,
      date: "2023-12-20",
      comment:
        "Very satisfied with their commercial building project. Great attention to detail and communication.",
    },
    {
      id: 3,
      name: "Mohammed Al-Rashid",
      rating: 5,
      date: "2023-11-08",
      comment:
        "Outstanding construction company. They delivered exactly what they promised. Highly recommended!",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-4">
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {company.name}
              </h2>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{company.rating}</span>
                  <span className="text-gray-500 ml-1">
                    ({company.reviews} reviews)
                  </span>
                </div>
                <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
                  {company.type}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Company Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Company Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                  <span>Established {company.yearEstablished}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <span>{company.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-orange-600 mr-3" />
                  <a
                    href={`https://${company.website}`}
                    className="text-orange-600 hover:underline"
                  >
                    {company.website}
                  </a>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-orange-600 mr-3" />
                  <span>{company.size}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Services & Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {company.specialties &&
                  company.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600 leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">{project.name}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
            <div className="space-y-4">
              {sampleReviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex items-center ml-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Actions */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
              <button className="flex-1 px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Globe className="w-5 h-5 mr-2" />
                Visit Website
              </button>
              <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
