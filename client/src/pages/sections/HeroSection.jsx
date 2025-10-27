import React from "react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { label: "MENU", href: "#menu" },
  { label: "ORDER ONLINE", href: "#order" },
  { label: "BOOK A TABLE", href: "#book" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[926px] h-[926px] opacity-30 animate-pulse-slow"
          alt="Background circle"
          src="/figmaAssets/ellipse-3.svg"
        />
        <img
          className="absolute top-12 right-0 w-[519px] h-[538px] opacity-20"
          alt="Decorative vector"
          src="/figmaAssets/vector-6.svg"
        />
        <img
          className="hidden lg:block absolute top-12 left-[283px] w-[85px] h-[106px] animate-float"
          alt="Decorative element"
          src="/figmaAssets/group-7.png"
        />
        <img
          className="hidden lg:block absolute top-[52px] left-20 w-[82px] h-[82px] animate-float-delayed"
          alt="Decorative element"
          src="/figmaAssets/group-8.png"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 max-w-xl lg:max-w-none animate-fade-in-up">
            <div className="lg:hidden mb-8 flex justify-center">
              <img
                className="w-[250px] sm:w-[350px] h-auto"
                alt="Tiffin Box Dish"
                src="/figmaAssets/2147894625-1.png"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight mb-8 lg:mb-12 [font-family:'Plus_Jakarta_Sans',Helvetica] animate-fade-in-up-delayed">
              AUTHENTIC <br />
              SOUTH INDIAN <br />
              CUISINE
            </h1>

            <Button className="inline-flex items-center gap-6 px-[26px] py-[22px] bg-[#fcb017] hover:bg-[#fcb017]/90 text-neutral-950 font-semibold text-lg rounded-none h-auto [font-family:'Montserrat',Helvetica] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View Menu
              <img
                className="w-6 h-6"
                alt="Arrow"
                src="/figmaAssets/icon-outline-chevron-right.svg"
              />
            </Button>
          </div>

          <div className="hidden lg:block flex-1 relative animate-fade-in-right">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0.56)] to-[rgba(68,68,68,0.56)] animate-pulse-slow" />
            <div className="relative z-10">
              <img
                className="w-full max-w-[682px] h-auto mx-auto hover:scale-105 transition-transform duration-700"
                alt="Delicious South Indian Food"
                src="/figmaAssets/2147894625-1.png"
              />
            </div>
          </div>
        </div>
      </div>

      <nav className="absolute bottom-0 left-0 right-0 border-t border-[#9a9a9a]/20 py-8 lg:py-12 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-4 lg:gap-12">
            {navigationLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-4 lg:gap-12">
                {index > 0 && (
                  <span className="hidden sm:block w-px h-5 bg-[#9a9a9a]" />
                )}
                <a
                  href={link.href}
                  className="text-[#9a9a9a] hover:text-white text-xs sm:text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica] transition-colors duration-300 hover:scale-105 inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};
