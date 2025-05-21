import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const center = searchParams.get("center");

  const mockCenterInfo = {
    bella_beauty: {
      id: "1",
      name: "Bella Beauty",
      hero: "Expert Hair Styling Services",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 ",
      hero_description:
        "Transform your look with our premium hair styling services. Our expert stylists combine artistry and technique to create the perfect style that matches your personality and lifestyle.",
      services_description:
        "We offer a wide range of hair styling services to meet all your beauty needs. All services include consultation, shampoo, and style.",
      about:
        "At Bella Beauty, we believe that great hair can transform your confidence and overall appearance. Our team of skilled stylists are passionate about creating personalized looks that enhance your natural beauty.",
      footer_details:
        "Premium beauty services to enhance your natural beauty and boost your confidence.",
      address: "123 Beauty Street, Spa City, SC 12345",
      phone: "(123) 456-7890",
      email: "info@bellabeauty.com",
    },
    glam_zone: {
      id: "2",
      name: "Glam Zone",
      hero: "Where Glamour Begins",
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hero_description:
        "Step into a world of elegance and transformation. At Glam Zone, our professionals craft stunning hairstyles and looks that leave a lasting impression.",
      services_description:
        "Our beauty services are tailored to your unique style. Whether it’s a bold change or a subtle refresh, we ensure a luxurious experience every time.",
      about:
        "Glam Zone is more than a salon — it's a destination. With years of expertise and a flair for modern trends, our team delivers high-end beauty care with personalized attention.",
      footer_details:
        "Premium beauty services to enhance your natural beauty and boost your confidence.",
      address: "456 Style Avenue, Fashion City, FC 98765",
      phone: "(987) 654-3210",
      email: "contact@glamzone.com",
    },
  };

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const services = mockCenterInfo[center as keyof typeof mockCenterInfo] || [];

  return NextResponse.json(services);
}
