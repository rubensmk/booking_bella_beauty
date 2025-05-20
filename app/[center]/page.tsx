import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import ServiceListSection from "../components/ServiceListSection";
import { Service } from "../types/service";

interface CenterPageProps {
  params: {
    center: string;
  };
}

async function getServices(center: string): Promise<Service[]> {
  const baseUrl = process.env.API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/services?center=${center}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export default async function CenterPage({ params }: CenterPageProps) {
  const services = await getServices(params.center);

  return (
    <div id="home" className="min-h-screen">
      <Navbar />
      <Hero />
      <About />

      <section id="services" className="py-16 bg-beauty-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-beauty-dark">
              Our Hair Styling Services
            </h2>
            <p className="text-beauty-dark/70 max-w-2xl mx-auto">
              We offer a wide range of hair styling services to meet all your
              beauty needs. All services include consultation, shampoo, and
              style.
            </p>
          </div>

          <ServiceListSection services={services} />

          <div className="mt-12 text-center">
            <p className="text-beauty-dark/80 italic">
              Prices may vary based on hair length, thickness, and service
              complexity. Please consult with your stylist for a personalized
              quote.
            </p>
          </div>
        </div>
      </section>

      <Gallery />
      <Footer />
    </div>
  );
}
