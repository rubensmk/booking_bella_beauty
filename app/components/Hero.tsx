import React from "react";

interface HeroProps {
  hero: string;
  hero_description: string;
}

export default function Hero({ hero, hero_description }: HeroProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-beauty-primary/10 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl  font-bold text-beauty-dark mb-6">
            {hero}
          </h1>

          <p className="text-lg text-beauty-dark/80 mb-8 max-w-2xl">
            {hero_description}
          </p>

          <a
            href="#services"
            className="bg-beauty-accent hover:bg-beauty-accent/90 text-white px-8 py-3 rounded-full transition-colors font-medium"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
