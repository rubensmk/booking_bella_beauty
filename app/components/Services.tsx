"use client";

import { Service } from "../types/service";
import ServiceCard from "./ServiceCard";

interface ServicesProps {
  services: Service[];
  handleBookService: (service_name: string) => void;
}

export default function Services({
  services,
  handleBookService,
}: ServicesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          name={service.name}
          description={service.description}
          price={service.price}
          duration={service.duration}
          handleBookService={handleBookService}
        />
      ))}
    </div>
  );
}
