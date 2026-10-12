import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CorporateProSection } from './components/CorporateProSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CustomizationSection } from './components/CustomizationSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { JacketGallerySection } from './components/JacketGallerySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { OrderFormModal } from './components/OrderFormModal';
import { CatalogueModal } from './components/CatalogueModal';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [catalogueModalOpen, setCatalogueModalOpen] = useState<boolean>(false);
  const [preselectedJacketId, setPreselectedJacketId] = useState<string | undefined>(undefined);
  const [preselectedIndustryId, setPreselectedIndustryId] = useState<string | undefined>(undefined);
  const [galleryIndustryFilter, setGalleryIndustryFilter] = useState<string | null>(null);

  const handleOpenOrderModal = (jacketId?: string, industryId?: string) => {
    setPreselectedJacketId(jacketId);
    setPreselectedIndustryId(industryId);
    setOrderModalOpen(true);
  };

  const handleExploreIndustryJackets = (industryName: string) => {
    setGalleryIndustryFilter(industryName);
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Sticky Top Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      <main className="flex-1">
        {/* 1. Hero Section + 360 rotatable jacket showcase */}
        <HeroSection onOpenOrderModal={() => handleOpenOrderModal('executive-puffer')} />

        {/* 2. JD Corporate Pro™ Brand Section */}
        <CorporateProSection onOpenOrderModal={(id) => handleOpenOrderModal(id)} />

        {/* 3. Industries Section (8 industries) */}
        <IndustriesSection
          onSelectIndustry={(indId) => handleOpenOrderModal(undefined, indId)}
          onExploreJackets={handleExploreIndustryJackets}
        />

        {/* 4. Why Businesses Choose Custom Jackets (4 benefit cards) */}
        <WhyChooseSection />

        {/* 5. Customization Options (with the 2 required links) */}
        <CustomizationSection
          onOpenCatalogue={() => setCatalogueModalOpen(true)}
          onOpenOrderBrief={() => handleOpenOrderModal()}
        />

        {/* 6. How It Works (5 steps) */}
        <HowItWorksSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 7. Who We Serve */}
        <WhoWeServeSection />

        {/* 8. Jacket Gallery (20 front-and-back jacket styles + 360 inspect) */}
        <JacketGallerySection
          onOpenOrderModal={(id) => handleOpenOrderModal(id)}
          selectedIndustryFilter={galleryIndustryFilter}
          onClearIndustryFilter={() => setGalleryIndustryFilter(null)}
        />

        {/* 9. FAQ Section (9 collapsible items) */}
        <FaqSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 10. Final CTA + WhatsApp Button */}
        <FinalCtaSection onOpenOrderModal={() => handleOpenOrderModal()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenCatalogue={() => setCatalogueModalOpen(true)}
      />

      {/* Multi-Step WhatsApp Order Brief Modal */}
      <OrderFormModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        preselectedJacketId={preselectedJacketId}
        preselectedIndustryId={preselectedIndustryId}
      />

      {/* Customization System Catalogue Modal */}
      <CatalogueModal
        isOpen={catalogueModalOpen}
        onClose={() => setCatalogueModalOpen(false)}
        onOpenOrderBrief={() => handleOpenOrderModal()}
      />
    </div>
  );
}
