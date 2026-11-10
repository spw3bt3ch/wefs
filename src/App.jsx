import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyDatesStrip from './components/KeyDatesStrip';
import AboutSection from './components/AboutSection';
import SupportCategoriesSection from './components/SupportCategoriesSection';
import ApplicationPeriodSection from './components/ApplicationPeriodSection';
import EligibilitySection from './components/EligibilitySection';
import CallToActionSection from './components/CallToActionSection';
import WhatsAppSection from './components/WhatsAppSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* SECTION 1: HERO SECTION */}
        <Hero />

        {/* Highlight Milestone Dates Strip */}
        <KeyDatesStrip />

        {/* SECTION 2: ABOUT THE PROGRAMME */}
        <AboutSection />

        {/* SECTION 3: AVAILABLE SUPPORT */}
        <SupportCategoriesSection />

        {/* SECTION 4: APPLICATION PERIOD */}
        <ApplicationPeriodSection />

        {/* SECTION 5: ELIGIBILITY REQUIREMENTS */}
        <EligibilitySection />

        {/* SECTION 6: APPLICATION CALL TO ACTION */}
        <CallToActionSection />

        {/* SECTION 7: WHATSAPP ENQUIRIES */}
        <WhatsAppSection />

        {/* Interactive FAQ Section */}
        <FAQSection />
      </main>

      {/* SECTION 8: FOOTER */}
      <Footer />

      {/* Floating Action Bar for Mobile Users */}
      <FloatingMobileBar />
    </div>
  );
}

