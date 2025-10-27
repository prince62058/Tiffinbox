import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    id: 1,
    text: "The Tiffin Box delivers an unforgettable South Indian experience! The food, service, and ambiance are second to none.",
    name: "Anna Mathew",
    time: "one day ago",
    avatar: "/figmaAssets/ellipse-8-2.svg",
  },
  {
    id: 2,
    text: "Absolutely delicious! The authentic flavors remind me of home. The staff is friendly and the atmosphere is perfect.",
    name: "Gerrin Tom",
    time: "one day ago",
    avatar: "/figmaAssets/ellipse-8-3.svg",
  },
  {
    id: 3,
    text: "Best South Indian food in town! Fresh ingredients, expert preparation, and wonderful presentation. Highly recommended!",
    name: "Mery Elza",
    time: "one day ago",
    avatar: "/figmaAssets/ellipse-8.svg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 mb-16 animate-fade-in-up">
          <span className="text-[#fcb017] text-sm tracking-[0.3em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
            TESTIMONIAL
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#9a9a9a] tracking-[0.15em] lg:tracking-[0.37em] leading-tight text-center [font-family:'Plus_Jakarta_Sans',Helvetica]">
            WHAT OUR <br />
            CUSTOMERS SAYS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-none shadow-none bg-transparent animate-fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="flex flex-col gap-8 p-6 bg-[#95959505] rounded-lg backdrop-blur-sm hover:bg-[#95959510] transition-colors duration-500">
                <div className="flex flex-col gap-6">
                  <img
                    className="w-[120px]"
                    alt="5 stars rating"
                    src="/figmaAssets/frame-53.svg"
                  />

                  <p className="text-[#c9c9c9] text-base font-light tracking-[0.125em] leading-relaxed [font-family:'Plus_Jakarta_Sans',Helvetica] min-h-[120px]">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <Separator className="bg-[#9a9a9a] opacity-50" />

                  <div className="flex items-center gap-4">
                    <Avatar className="w-[38px] h-[38px]">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                    </Avatar>

                    <div className="flex flex-col gap-1">
                      <div className="text-[#9a9a9a] font-medium text-lg tracking-[0.045em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {testimonial.name}
                      </div>

                      <div className="text-[#9c9995] text-sm tracking-[0.035em] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {testimonial.time}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
