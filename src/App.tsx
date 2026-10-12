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
import { ConfigureStyleModal } from './components/ConfigureStyleModal';
import { JACKET_STYLES, JacketStyle } from './data/jacketsData';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [catalogueModalOpen, setCatalogueModalOpen] = useState<boolean>(false);
  const [configuratorJacket, setConfiguratorJacket] = useState<JacketStyle | null>(null);
  const [preselectedJacketId, setPreselectedJacketId] = useState<string | undefined>(undefined);
  const [preselectedIndustryId, setPreselectedIndustryId] = useState<string | undefined>(undefined);
  const [galleryIndustryFilter, setGalleryIndustryFilter] = useState<string | null>(null);

  const handleOpenOrderModal = (jacketId?: string, industryId?: string) => {
    setPreselectedJacketId(jacketId);
    setPreselectedIndustryId(industryId);
    setOrderModalOpen(true);
  };

  const handleConfigureStyle = (jacket: JacketStyle) => {
    setConfiguratorJacket(jacket);
  };

  const handleExploreIndustryJackets = (industryName: string) => {
    setGalleryIndustryFilter(industryName);
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f5f0] text-[#20231f] flex flex-col font-sans selection:bg-[#e85a2a] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      <main className="flex-1">
        {/* 1. Hero Section + 360 rotatable jacket showcase */}
        <HeroSection
          onOpenOrderModal={() => handleOpenOrderModal('corporate-puffer')}
          onConfigureStyle={handleConfigureStyle}
        />

        {/* 2. JD Corporate Pro™ Brand Section */}
        <CorporateProSection
          onOpenOrderModal={(id) => {
            const found = JACKET_STYLES.find((j) => j.id === id);
            if (found) {
              handleConfigureStyle(found);
            } else {
              handleOpenOrderModal(id);
            }
          }}
        />

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
          onConfigureStyle={handleConfigureStyle}
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

      {/* 4K Interactive Style Configurator Modal */}
      <ConfigureStyleModal
        jacket={configuratorJacket}
        isOpen={!!configuratorJacket}
        onClose={() => setConfiguratorJacket(null)}
        onProceedToOrderBrief={(jacketId) => {
          handleOpenOrderModal(jacketId);
        }}
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
