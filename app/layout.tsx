import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booking Beauty Center",
  description: "Expert Hair Styling Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
