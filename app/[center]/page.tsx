import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import ServiceListSection from "../components/ServiceListSection";
import { getCenterInfo } from "../lib/center_info";
import { getServices } from "../lib/services";

interface CenterPageProps {
  params: {
    center: string;
  };
}

export default async function CenterPage({ params }: CenterPageProps) {
  const services = await getServices(params.center);
  const centerInfo = await getCenterInfo(params.center);

  return (
    <div id="home" className="min-h-screen">
      <Navbar name={centerInfo.name} />

      <Hero
        hero={centerInfo.hero}
        hero_description={centerInfo.hero_description}
      />
      <About about={centerInfo.about} />

      <section id="services" className="py-16 bg-beauty-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-beauty-dark">
              Our Services
            </h2>
            <p className="text-beauty-dark/70 max-w-2xl mx-auto">
              {centerInfo.services_description}
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
      <Footer
        name={centerInfo.name}
        address={centerInfo.address}
        footer_details={centerInfo.footer_details}
        email={centerInfo.email}
        phone={centerInfo.phone}
      />
    </div>
  );
}
