import { Search, Building2, ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  const handleSearchClick = () => {
    document.getElementById("search-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background with Orange Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(234, 88, 12, 0.6) 0%, transparent 50%),
            linear-gradient(135deg, #f97316 0%, #ea580c 100%)
          `,
        }}
      />

      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Ready to Start Your
            <br />
            <span className="text-yellow-300">Construction</span>
          </h2>

          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who found their perfect
            construction partner through KuwaitBuild. Start your journey today!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={handleSearchClick}
            className="group px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center space-x-3 min-w-[250px]"
          >
            <Search size={24} />
            <span>Find Companies Now</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>

          <button
            onClick={handleContactClick}
            className="group px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center space-x-3 min-w-[250px]"
          >
            <Building2 size={24} />
            <span>List Your Company</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              500+
            </div>
            <div className="text-orange-100 text-sm md:text-base">
              Verified Companies
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              2,000+
            </div>
            <div className="text-orange-100 text-sm md:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              50,000+
            </div>
            <div className="text-orange-100 text-sm md:text-base">
              Happy Clients
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-orange-300/30">
          <p className="text-orange-100 mb-6 text-lg">
            Trusted by Kuwait's leading construction professionals
          </p>

          {/* Logo placeholders */}
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Building2 size={24} className="text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Building2 size={24} className="text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Building2 size={24} className="text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Building2 size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
