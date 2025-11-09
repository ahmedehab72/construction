import { Shield, Award, Users, Building2 } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Verified Companies",
      description:
        "All listed companies are thoroughly vetted and verified for quality and reliability.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We ensure only the highest quality construction companies make it to our platform.",
    },
    {
      icon: Users,
      title: "Expert Reviews",
      description:
        "Real reviews from actual clients help you make informed decisions.",
    },
    {
      icon: Building2,
      title: "Comprehensive Listings",
      description:
        "Complete information including projects, services, and contact details.",
    },
  ];

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Why Choose
            <span
              className="text-transparent bg-clip-text ml-3"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              }}
            >
              KuwaitBuild?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are Kuwait's most trusted platform for connecting clients with
            verified construction companies. Our mission is to simplify the
            process of finding reliable construction partners.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "#f97316",
                }}
              >
                500+
              </div>
              <p className="text-gray-600">Verified Companies</p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "#f97316",
                }}
              >
                2,000+
              </div>
              <p className="text-gray-600">Completed Projects</p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "#f97316",
                }}
              >
                50,000+
              </div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "#f97316",
                }}
              >
                15
              </div>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
