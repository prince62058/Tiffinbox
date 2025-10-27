import React from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    id: 1,
    name: "CHICKEN CHETTINAD",
    price: "£9.99",
    image: "/figmaAssets/image-6.png",
  },
  {
    id: 2,
    name: "MASALA DOSA",
    price: "£7.99",
    image: "/figmaAssets/image-7.png",
  },
  {
    id: 3,
    name: "IDLI SAMBAR",
    price: "£6.99",
    image: "/figmaAssets/image-7-1.png",
  },
];

export const MenuSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[769px] opacity-20"
          alt="Background decoration"
          src="/figmaAssets/union.svg"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 mb-16 animate-fade-in-up">
          <span className="text-[#fcb017] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
            FEATURED MENU
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight text-center [font-family:'Plus_Jakarta_Sans',Helvetica] max-w-4xl">
            DISCOVER OUR MOST POPULAR DISHES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-8 p-6 bg-[#95959505] rounded-[230px] backdrop-blur-[27px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(27px)_brightness(100%)] hover:bg-[#95959510] transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-full aspect-square overflow-hidden rounded-full">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt={item.name}
                  src={item.image}
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[#9a9a9a] text-lg tracking-[0.2em] [font-family:'Plus_Jakarta_Sans',Helvetica] font-light text-center">
                  {item.name}
                </h3>
                <p className="text-[#9a9a9a] text-lg tracking-[0.2em] [font-family:'Plus_Jakarta_Sans',Helvetica] font-light">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center animate-fade-in-up">
          <Button
            variant="outline"
            className="inline-flex items-center gap-6 px-[26px] py-[22px] border border-[#9a9a9a] bg-transparent hover:bg-white/10 text-[#9a9a9a] hover:text-white font-medium text-lg rounded-none h-auto [font-family:'Montserrat',Helvetica] transition-all duration-300 hover:scale-105"
          >
            Explore Full Menu
            <img
              className="w-6 h-6"
              alt="Arrow"
              src="/figmaAssets/icon-outline-chevron-right.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
