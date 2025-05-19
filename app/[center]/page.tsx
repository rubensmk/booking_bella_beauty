import About from "../components/About"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Navbar from "../components/NavBar"

interface CenterPageProps {
  params: {
    center: string
  }
}

export default async function CenterPage({ params }: CenterPageProps) {
  console.log(params)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero/>
      <About/>

      <section id="services" className="py-16 bg-beauty-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl  font-semibold mb-4 text-beauty-dark">Our Hair Styling Services</h2>
            <p className="text-beauty-dark/70 max-w-2xl mx-auto">
              We offer a wide range of hair styling services to meet all your beauty needs. All services include consultation, shampoo, and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h3 className="text-xl  font-semibold mb-2 text-beauty-dark">Haircut & Style</h3>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-beauty-dark/70">45-60 minutes</span>
                  <span className="font-medium text-beauty-accent">$55 - $85</span>
                </div>
                <p className="text-sm text-beauty-dark/70">
                  Precision cut tailored to your face shape and hair texture, finished with a professional style.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h3 className="text-xl  font-semibold mb-2 text-beauty-dark">Blowout & Styling</h3>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-beauty-dark/70">30-45 minutes</span>
                  <span className="font-medium text-beauty-accent">$45 - $65</span>
                </div>
                <p className="text-sm text-beauty-dark/70">
                  Professional blow dry and styling using premium products to create your desired look.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h3 className="text-xl  font-semibold mb-2 text-beauty-dark">Special Occasion</h3>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-beauty-dark/70">60-90 minutes</span>
                  <span className="font-medium text-beauty-accent">$85 - $125</span>
                </div>
                <p className="text-sm text-beauty-dark/70">
                  Elegant updos, intricate braids, or glamorous styles for weddings, proms, or special events.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h3 className="text-xl  font-semibold mb-2 text-beauty-dark">Color Services</h3>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-beauty-dark/70">1.5-3 hours</span>
                  <span className="font-medium text-beauty-accent">$75 - $175+</span>
                </div>
                <p className="text-sm text-beauty-dark/70">
                  Full color, highlights, balayage, or ombre techniques using professional color products.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h3 className="text-xl  font-semibold mb-2 text-beauty-dark">Hair Treatments</h3>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-beauty-dark/70">30-60 minutes</span>
                  <span className="font-medium text-beauty-accent">$45 - $95</span>
                </div>
                <p className="text-sm text-beauty-dark/70">
                  Deep conditioning, protein treatments, or scalp therapies to restore hair health.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h3 className="text-xl  font-semibold mb-2 text-beauty-dark">Hair Extensions</h3>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-beauty-dark/70">2-4 hours</span>
                  <span className="font-medium text-beauty-accent">$250 - $800+</span>
                </div>
                <p className="text-sm text-beauty-dark/70">
                  Professional application of premium quality hair extensions using various methods.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-beauty-dark/80 italic">
              Prices may vary based on hair length, thickness, and service complexity.
              Please consult with your stylist for a personalized quote.
            </p>
          </div>
        </div>
      </section>
      
      <Gallery/>
      <Footer />
    </div>
  )
}

