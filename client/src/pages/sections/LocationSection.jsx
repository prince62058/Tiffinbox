import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LocationSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-8 animate-fade-in-left">
            <div className="flex flex-col gap-5">
              <span className="text-[#fcb017] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                OUR LOCATIONS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight [font-family:'Plus_Jakarta_Sans',Helvetica]">
                FIND US <br />
                AT THESE CONVENIENT LOCATIONS
              </h2>
            </div>

            <Button
              variant="outline"
              className="inline-flex items-center gap-6 px-[26px] py-[22px] border border-white bg-transparent hover:bg-white/10 text-[#9a9a9a] hover:text-white font-medium text-lg rounded-none h-auto [font-family:'Montserrat',Helvetica] self-start transition-all duration-300 hover:scale-105"
            >
              Our Store
              <img
                className="w-6 h-6"
                alt="Arrow"
                src="/figmaAssets/icon-outline-chevron-right.svg"
              />
            </Button>
          </div>

          <div className="relative animate-fade-in-right">
            <img
              className="w-full max-w-[683px] h-auto mx-auto rounded-lg"
              alt="Restaurant location"
              src="/figmaAssets/group-37.png"
            />

            <Card className="absolute top-1/2 right-0 w-full max-w-[297px] bg-[#ffffff05] border-none rounded-lg backdrop-blur-[22px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22px)_brightness(100%)] hover:bg-[#ffffff0a] transition-all duration-500">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <p className="text-[#9a9a9a] text-sm tracking-[0.3em] leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  TIFFIN BOX
                  <br />
                  ALLERTON RD, LIVERPOOL L25 7RE
                </p>

                <button className="inline-flex items-center justify-center gap-2 px-0 py-2 border-b border-solid border-[#fcb017] bg-transparent cursor-pointer hover:border-[#fcb017]/80 transition-all duration-300">
                  <span className="text-[#9a9a9a] hover:text-white text-sm tracking-[0.15em] [font-family:'Plus_Jakarta_Sans',Helvetica] transition-colors duration-300">
                    GET DIRECTION
                  </span>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
