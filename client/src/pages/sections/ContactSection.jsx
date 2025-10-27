import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const navigationLinks = [
  { label: "MENU", href: "#menu" },
  { label: "ORDER ONLINE", href: "#order" },
  { label: "BOOK A TABLE", href: "#book" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export const ContactSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 animate-fade-in-up">
          <img
            className="w-[85.49px] h-[106px]"
            alt="Tiffin Box Logo"
            src="/figmaAssets/group-33.png"
          />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight text-center [font-family:'Plus_Jakarta_Sans',Helvetica]">
            SUBSCRIBE TO
            <br />
            OUR NEWSLETTER
          </h2>

          <div className="flex flex-col sm:flex-row items-end gap-6 w-full max-w-[533px]">
            <div className="flex-1 w-full relative">
              <Input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-0 border-b border-white rounded-none px-0 pb-4 text-[#757575] placeholder:text-[#757575] [font-family:'Plus_Jakarta_Sans',Helvetica] font-light text-sm tracking-[0.3em] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
              />
            </div>

            <Button
              variant="outline"
              className="flex items-center gap-6 px-[22px] py-[22px] border border-white bg-transparent hover:bg-white/10 text-[#9a9a9a] hover:text-white [font-family:'Montserrat',Helvetica] font-medium text-lg tracking-[0] leading-[15.8px] h-auto rounded-none transition-all duration-300 hover:scale-105"
            >
              Subscribe
              <img
                className="w-6 h-6"
                alt="Arrow"
                src="/figmaAssets/icon-outline-chevron-right.svg"
              />
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2 max-w-[444px] mt-12">
            <div className="text-[#9a9a9a] font-semibold text-base tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica] text-center">
              CONTACT U
            </div>

            <div className="text-[#9a9a9a] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica] text-center">
              0151 245 1500
            </div>

            <div className="text-[#9a9a9a] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica] text-center">
              INFO@TIFFINBOX.CO.UK
            </div>

            <div className="text-[#9a9a9a] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica] text-center">
              ALLERTON RD, LIVERPOOL L25 7RE
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 lg:gap-12 mt-12">
            {navigationLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-4 lg:gap-12">
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="hidden sm:block h-5 w-px bg-[#9a9a9a]"
                  />
                )}
                <a
                  href={link.href}
                  className="text-[#9a9a9a] hover:text-white text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </nav>

          <div className="text-center mt-8 text-black font-normal text-base tracking-[0.14em] [font-family:'Manrope',Helvetica]">
            © 2024 tiffinbox
          </div>
        </div>
      </div>
    </section>
  );
};
