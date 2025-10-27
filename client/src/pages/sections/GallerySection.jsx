import React from "react";

const galleryImages = [
  "/figmaAssets/image-1.png",
  "/figmaAssets/image-2.png",
  "/figmaAssets/image-3.png",
  "/figmaAssets/image-5.png",
];

export const GallerySection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 mb-16 animate-fade-in-up">
          <span className="text-[#fcb017] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
            INSTAGRAM
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight text-center [font-family:'Plus_Jakarta_Sans',Helvetica]">
            JOIN OUR COMMUNITY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group animate-fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                className="w-full h-[384px] object-cover group-hover:scale-110 transition-transform duration-700"
                alt={`Gallery image ${index + 1}`}
                src={image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
