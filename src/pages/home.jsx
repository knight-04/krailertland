import React from 'react';
import Navbar from '../component/layout/navbar';
import Hero from '../component/home/hero';
import FeaturedProperties from '../component/home/hero/properties/featureproperty';
import FeatueredLocations from '../component/home/hero/properties/featurelocation';
import Footer from '../component/layout/footer/contact';
import ScrollToTop from '../component/home/scroll/scrolltotop';
import Timeline from '../component/home/scroll/scrolltimeline';
import Blog from '../component/home/content/blog';
import { SearchProvider } from '../component/contexts/searchcontext';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bg-blue-100" />
      <SearchProvider>
        <Navbar />
        <Hero id="home" />
        <FeaturedProperties id="properties" />
        <FeatueredLocations id="location" />
        <Timeline id="timeline"/>
        <Blog id="blog" />
        <ScrollToTop />
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default HomePage;