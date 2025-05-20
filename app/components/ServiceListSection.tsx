"use client";

import { useState } from "react";
import Services from "./Services";
import BookingModal from "./BookingServiceModal";
import { Service } from "../types/service";

interface ClientServiceSectionProps {
  services: Service[];
}

export default function ClientServiceSection({
  services,
}: ClientServiceSectionProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <>
      <Services services={services} handleBookService={handleBookService} />
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        serviceName={selectedService}
      />
    </>
  );
}
