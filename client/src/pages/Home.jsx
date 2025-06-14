import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import PopularDestinations from "../components/PopularDestinations";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../features/destinations/destinationsSlice";
import AdvantagesSection from "../components/AdvantagesSection";
import TopSellersPackages from "../components/TopSellersPackages";
import { fetchTopSellerPackages } from "../features/packages/topSellingsSlice";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  const { destinations, destError, destLoading } = useSelector(
    (state) => state?.destinations
  );

  const { topPackages, topPackError, topPackLoading } = useSelector(
    (state) => state.topSellerPackages
  );

  // For fetching destinations
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
    dispatch(fetchTopSellerPackages());
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Destinations */}
      <PopularDestinations
        data={destinations}
        loading={destLoading}
        error={destError}
      />

      {/* Advantages Section */}
      <AdvantagesSection />

      {/* Top Sellers Serction */}
      <TopSellersPackages
        data={topPackages}
        loading={topPackLoading}
        error={topPackError}
      />

      {/* Testimonials Section */}
      <TestimonialSection />
    </main>
  );
};

export default Home;
