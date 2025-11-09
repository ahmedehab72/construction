import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchFilterSection from "../components/SearchFilterSection";
import FeaturedCompaniesSection from "../components/FeaturedCompaniesSection";
import CompanyListingsSection from "../components/CompanyListingsSection";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import CompanyModal from "../components/CompanyModal";

export default function HomePage() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    search: "",
    constructionType: "",
    location: "",
    companySize: "",
  });

  return (
    <div className="min-h-screen">
      {/* Gradient Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #fff 0%, #fefbf4 100%)
          `,
        }}
      />

      <Header />
      <HeroSection
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
      />
      <FeaturedCompaniesSection setSelectedCompany={setSelectedCompany} />
      <SearchFilterSection
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
      />
      <CompanyListingsSection
        searchFilters={searchFilters}
        setSelectedCompany={setSelectedCompany}
      />
      <AboutSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToActionSection />
      <Footer />

      {/* Company Details Modal */}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}
