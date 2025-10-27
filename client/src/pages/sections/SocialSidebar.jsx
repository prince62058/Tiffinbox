import React from "react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: "/figmaAssets/ph-instagram-logo-light.svg",
    alt: "Instagram",
    href: "#",
  },
  {
    icon: "/figmaAssets/ph-facebook-logo-light.svg",
    alt: "Facebook",
    href: "#",
  },
  {
    icon: "/figmaAssets/ph-twitter-logo-light.svg",
    alt: "Twitter",
    href: "#",
  },
];

export const SocialSidebar = () => {
  return (
    <>
      <nav className="hidden lg:inline-flex items-center gap-[13.8px] fixed top-1/2 -translate-y-1/2 right-8 rotate-90 z-50 social-sidebar">
        {socialLinks.map((social, index) => (
          <Button
            key={`social-${index}`}
            variant="ghost"
            className="flex flex-col w-[62.11px] h-[62.11px] items-center justify-center gap-[17.25px] px-[20.7px] py-[10.35px] relative bg-[#d9d9d905] rounded-full backdrop-blur-[22px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22px)_brightness(100%)] hover:bg-[#d9d9d90a] transition-all duration-300 hover:scale-110"
          >
            <img
              className="relative w-[31.06px] h-[31.06px] ml-[-5.18px] mr-[-5.18px] -rotate-90"
              alt={social.alt}
              src={social.icon}
            />
          </Button>
        ))}
      </nav>

      <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-20 w-px h-[522px] bg-[#9a9a9a] opacity-30 z-50" />
      <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-[78px] w-1 h-[66px] bg-[#fcb017] z-50" />
    </>
  );
};
