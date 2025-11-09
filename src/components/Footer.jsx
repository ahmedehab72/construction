import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                }}
              >
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">KuwaitBuild</h3>
                <p className="text-gray-400 text-sm">Construction Directory</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Kuwait's premier platform for connecting clients with verified
              construction companies. We make finding trusted construction
              partners simple and reliable.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Kuwait City, Al-Salmiya, Block 4, Building 25
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+965 2234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@kuwaitbuild.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#companies"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  List Your Company
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Company Verification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Project Matching
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Quality Assurance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Expert Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Construction Insights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  Industry News
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest construction industry
              insights and company listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
              />
              <button
                className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} KuwaitBuild. All rights reserved. |
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-200 ml-1"
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-200 ml-1"
              >
                Terms of Service
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
