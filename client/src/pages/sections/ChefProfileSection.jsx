import React from "react";
import { Button } from "@/components/ui/button";

export const ChefProfileSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[870px] h-[900px] opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Background decoration"
            src="/figmaAssets/4454cz-1.png"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8 animate-fade-in-left">
            <div className="flex flex-col gap-5">
              <span className="text-[#fcb017] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                BOOK TABLE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica]">
                PLANNING A MEAL AT THE TIFFIN BOX?
              </h2>
            </div>

            <p className="text-[#c9c9c9] text-base tracking-[0.125em] leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] font-light max-w-xl">
              Craving your favorite South Indian dishes? Enjoy the rich, authentic
              flavors of The Tiffin Box from the comfort of your home. Order online
              for a quick and easy delivery straight to your doorstep. Our dishes are
              prepared fresh and delivered fast, ensuring a delicious
            </p>

            <Button
              variant="outline"
              className="inline-flex items-center gap-6 px-[26px] py-[22px] border border-white bg-transparent hover:bg-white/10 text-[#9a9a9a] hover:text-white font-medium text-lg rounded-none h-auto [font-family:'Montserrat',Helvetica] self-start transition-all duration-300 hover:scale-105"
            >
              Book Table
              <img
                className="w-6 h-6"
                alt="Arrow"
                src="/figmaAssets/icon-outline-chevron-right.svg"
              />
            </Button>
          </div>

          <div className="relative animate-fade-in-right">
            <img
              className="w-full max-w-[870px] h-auto mx-auto hover:scale-105 transition-transform duration-700"
              alt="Chef's special dish"
              src="/figmaAssets/4454cz-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
