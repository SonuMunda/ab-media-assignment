import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import PopularDestinations from "../components/PopularDestinations";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../features/destinations/destinationsSlice";
import AdvantagesSection from "../components/AdvantagesSection";
import TopSellersPackages from "../components/TopSellersPackages";
import { fetchTopSellerPackages } from "../features/packages/topSellingsSlice";

const Home = () => {
  const { destinations, destError, destLoading } = useSelector(
    (state) => state?.destinations
  );

  const { topPackages, topPackError, topPackLoading } = useSelector(
    (state) => state.topSellerPackages
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
    dispatch(fetchTopSellerPackages());
  }, []);

  console.log(topPackages);

  return (
    <main>
      <HeroSection />
      <PopularDestinations
        data={destinations}
        loading={destLoading}
        error={destError}
      />
      <AdvantagesSection />
      <TopSellersPackages
        data={topPackages}
        loading={topPackLoading}
        error={topPackError}
      />
    </main>
  );
};

export default Home;
