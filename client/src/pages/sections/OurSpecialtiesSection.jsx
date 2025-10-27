import React from "react";

const specialties = [
  {
    title: "AUTHENTIC SOUTH INDIAN CUISINE",
    description:
      "Our dishes are prepared using traditional recipes to bring you the true flavors of South India.",
  },
  {
    title: "EXPERT CHEFS",
    description:
      "Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.",
  },
  {
    title: "FRESH, QUALITY INGREDIENTS",
    description:
      "We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.",
  },
  {
    title: "COMFORTABLE DINING EXPERIENCE",
    description:
      "Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.",
  },
  {
    title: "HEALTH-CONSCIOUS OPTIONS",
    description:
      "From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.",
  },
  {
    title: "SEAMLESS ONLINE ORDERING & DELIVERY",
    description:
      "Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.",
  },
];

export const OurSpecialtiesSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[731px] h-[730px] opacity-20"
          alt="Background decoration"
          src="/figmaAssets/ellipse-4-1.svg"
        />
        <img
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[749px] h-[868px] opacity-10"
          alt="Background decoration"
          src="/figmaAssets/group-31.png"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 mb-16 animate-fade-in-up">
          <span className="text-[#fcb017] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
            WHY TIFFIN BOX
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight text-center [font-family:'Plus_Jakarta_Sans',Helvetica]">
            OUR SPECIALTIES
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 p-6 bg-[#95959505] rounded-lg backdrop-blur-sm hover:bg-[#95959510] transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-[#9a9a9a] text-xl font-medium tracking-[0.1em] leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {specialty.title}
                </h3>

                <p className="text-[#969696] text-base font-light tracking-[0.125em] leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-[#95959505] rounded-full backdrop-blur-[27px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(27px)_brightness(100%)]">
              <img
                className="w-[53px] h-[53px]"
                alt="Icon"
                src="/figmaAssets/group-20.png"
              />
              <span className="text-[#ececec] text-lg tracking-[0.2em] [font-family:'Plus_Jakarta_Sans',Helvetica] font-light">
                OUR SPECIALTIES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
