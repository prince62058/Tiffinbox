import React from "react";
import { Button } from "@/components/ui/button";

export const AboutUsSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 lg:right-[970px] w-[870px] h-[896px] bg-[#fcb017] opacity-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <img
              className="w-full max-w-[891px] h-auto mx-auto hover:scale-105 transition-transform duration-700"
              alt="Traditional South Indian Cuisine"
              src="/figmaAssets/image-4.png"
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8 animate-fade-in-right">
            <div className="flex flex-col gap-5">
              <span className="text-[#fcb017] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                ABOUT US
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-[0.15em] lg:tracking-[0.37em] leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica]">
                EXPERIENCE AUTHENTIC SOUTH INDIAN FLAVORS AT THE TIFFIN BOX
              </h2>
            </div>

            <Button
              variant="outline"
              className="inline-flex items-center gap-6 px-[26px] py-[22px] border border-black bg-transparent hover:bg-black/10 text-black font-medium text-lg rounded-none h-auto [font-family:'Montserrat',Helvetica] self-start transition-all duration-300 hover:scale-105"
            >
              Know More
              <img
                className="w-6 h-6"
                alt="Arrow"
                src="/figmaAssets/icon-outline-chevron-right.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
