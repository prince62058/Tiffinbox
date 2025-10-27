import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { MenuSection } from "./sections/MenuSection";
import { OurSpecialtiesSection } from "./sections/OurSpecialtiesSection";
import { ChefProfileSection } from "./sections/ChefProfileSection";
import { GallerySection } from "./sections/GallerySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { LocationSection } from "./sections/LocationSection";
import { ContactSection } from "./sections/ContactSection";
import { SocialSidebar } from "./sections/SocialSidebar";

export const TiffinBox = () => {
  return (
    <div className="bg-[#080808] w-full overflow-x-hidden relative">
      <SocialSidebar />
      
      <HeroSection />
      
      <AboutUsSection />
      
      <MenuSection />
      
      <ChefProfileSection />
      
      <OurSpecialtiesSection />
      
      <GallerySection />
      
      <TestimonialsSection />
      
      <LocationSection />
      
      <ContactSection />
    </div>
  );
};
