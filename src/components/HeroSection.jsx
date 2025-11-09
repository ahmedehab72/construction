import { useEffect, useRef } from "react";
import {
  Search,
  ArrowRight,
  Building,
  Hammer,
  HardHat,
  Truck,
  Settings,
  Wrench,
} from "lucide-react";

export default function HeroSection({ searchFilters, setSearchFilters }) {
  const sliderRef = useRef(null);

  // Auto-scrolling icons animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= slider.scrollWidth / 2) {
        scrollPosition = 0;
      }
      slider.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, []);

  const constructionIcons = [
    { icon: Building, name: "Residential" },
    { icon: Hammer, name: "Construction" },
    { icon: HardHat, name: "Safety" },
    { icon: Truck, name: "Transport" },
    { icon: Settings, name: "Heavy Machinery" },
    { icon: Wrench, name: "Tools" },
    { icon: Building, name: "Commercial" },
    { icon: Hammer, name: "Renovation" },
  ];

  const handleSearch = () => {
    document.getElementById("search-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="relative pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80)",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center pt-16 pb-20">
          {/* Main Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Find Best
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              }}
            >
              Construction Companies
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your complete guide to construction companies in Kuwait. Connect
            with trusted builders, contractors, and construction professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center space-x-2 min-w-[200px]"
            >
              <Search size={20} />
              <span>Search Now</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 min-w-[200px]">
              <span>Discover Companies</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Auto-scrolling Icons Slider */}
        <div className="relative">
          <div
            className="absolute inset-y-0 left-0 w-20 z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(249, 115, 22, 0.8) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-20 z-10"
            style={{
              background:
                "linear-gradient(270deg, rgba(249, 115, 22, 0.8) 0%, transparent 100%)",
            }}
          />

          <div
            ref={sliderRef}
            className="flex space-x-8 overflow-hidden py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Double the icons for seamless loop */}
            {[...constructionIcons, ...constructionIcons].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                    <IconComponent size={32} />
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
