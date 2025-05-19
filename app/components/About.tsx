import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl  font-semibold mb-6 text-beauty-dark">Our Hair Styling Approach</h2>
              <p className="text-beauty-dark/80 mb-4">
                At Bella Beauty, we believe that great hair can transform your confidence and overall appearance. Our team of skilled stylists are passionate about creating personalized looks that enhance your natural beauty.
              </p>
              <p className="text-beauty-dark/80 mb-4">
                We begin each appointment with a thorough consultation to understand your hair goals, lifestyle, and maintenance preferences. This helps us tailor our approach specifically to you.
              </p>
              <p className="text-beauty-dark/80">
                Using premium products and the latest techniques, we ensure that you leave our salon not just with great hair, but with knowledge on how to maintain your style at home.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-beauty-primary/20 p-2 rounded-full text-beauty-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-beauty-dark">Personalized Consultation</h4>
                    <p className="text-sm text-beauty-dark/70">Every service begins with understanding your unique needs and style goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-beauty-primary/20 p-2 rounded-full text-beauty-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-beauty-dark">Expert Stylists</h4>
                    <p className="text-sm text-beauty-dark/70">Our stylists receive continuous education on the latest trends and techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-beauty-primary/20 p-2 rounded-full text-beauty-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-beauty-dark">Premium Products</h4>
                    <p className="text-sm text-beauty-dark/70">We use only high-quality, professional grade products for optimal results</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-96 overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hair Styling Service"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
