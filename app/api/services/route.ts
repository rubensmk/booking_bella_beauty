import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const center = searchParams.get("center");

  const mockServices = {
    bella_beauty: [
      {
        id: "1",
        name: "Haircut & Style",
        description:
          "Precision cut tailored to your face shape and hair texture, finished with a professional style.",
        duration: "45-60 minutes",
        price: 75,
      },
      {
        id: "2",
        name: "Blowout & Styling",
        description:
          "Professional blow dry and styling using premium products to create your desired look.",
        duration: "30-45 minutes",
        price: 60,
      },
      {
        id: "3",
        name: "Special Occasion",
        description:
          "Elegant updos, intricate braids, or glamorous styles for weddings, proms, or special events.",
        duration: "60-90 minutes",
        price: 85,
      },
      {
        id: "4",
        name: "Color Services",
        description:
          "Full color, highlights, balayage, or ombre techniques using professional color products.",
        duration: "1.5-3 hours",
        price: 120,
      },
      {
        id: "5",
        name: "Hair Treatments",
        description:
          "Deep conditioning, protein treatments, or scalp therapies to restore hair health.",
        duration: "30-60 minutes",
        price: 90,
      },
      {
        id: "6",
        name: "Hair Extensions",
        description:
          "Professional application of premium quality hair extensions using various methods.",
        duration: "2-4 hours",
        price: 250,
      },
    ],
    glam_zone: [
      {
        id: "1",
        name: "Color Treatment",
        description: "Balayage and full color for a vibrant look.",
        duration: "2 hours",
        price: 150,
      },
    ],
  };

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const services = mockServices[center as keyof typeof mockServices] || [];

  return NextResponse.json(services);
}
