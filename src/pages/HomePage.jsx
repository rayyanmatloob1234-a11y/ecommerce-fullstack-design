import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DealsSection from '../components/DealsSection';
import CategorySection from '../components/CategorySection';
import SupplierBanner from '../components/SupplierBanner';
import RecommendedItems from '../components/RecommendedItems';
import ExtraServices from '../components/ExtraServices';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <DealsSection />
      <CategorySection />
      <SupplierBanner />
      <RecommendedItems />
      <ExtraServices />
      <Footer />
    </div>
  );
}

export default HomePage;