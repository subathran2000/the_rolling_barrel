import { Box } from "@mui/material";
import { useScroll, useTransform } from "framer-motion";
import { SEO } from "@/components/common";
import { useInView } from "@/hooks";
import {
  HeroSection,
  FeaturesSection,
  WhatWeOfferSection,
  SpecialsCTASection,
  MenusSection,
  DeliverySection,
  LocationSection,
} from "@/components/sections";

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const { ref: featuresRef, isInView: featuresInView } = useInView();
  const { ref: specialsRef, isInView: specialsInView } = useInView();
  const { ref: deliveryRef, isInView: deliveryInView } = useInView();

  return (
    <>
      <SEO />
      <Box sx={{ overflowX: "hidden" }}>
        <HeroSection heroY={heroY} heroOpacity={heroOpacity} />
        <FeaturesSection
          featuresRef={featuresRef}
          featuresInView={featuresInView}
        />
        <WhatWeOfferSection />
        <SpecialsCTASection
          specialsRef={specialsRef}
          specialsInView={specialsInView}
        />
        <MenusSection />
        <DeliverySection
          deliveryRef={deliveryRef}
          deliveryInView={deliveryInView}
        />
        <LocationSection />
      </Box>
    </>
  );
};

export default Home;
