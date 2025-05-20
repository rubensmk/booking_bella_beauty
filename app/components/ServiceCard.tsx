"use client";

interface ServiceCardProps {
  name: string;
  description: string;
  duration: string;
  price: number;
  handleBookService: (service_name: string) => void;
}

export default function ServiceCard({
  name,
  description,
  duration,
  price,
  handleBookService,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2 text-beauty-dark">
          {name}
        </h3>
        <div className="flex justify-between text-sm mb-3">
          <span className="text-beauty-dark/70">{duration}</span>
          <span className="font-medium text-beauty-accent">${price}</span>
        </div>
        <p className="text-sm text-beauty-dark/70 mb-4">{description}</p>
        <button
          onClick={() => handleBookService(name)}
          className="w-full bg-beauty-accent hover:bg-beauty-accent/90 text-white py-2 rounded transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
