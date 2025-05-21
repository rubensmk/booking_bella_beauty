import React from "react";

interface LogoProps {
  name: string;
  variant?: "light" | "dark";
}
export default function Logo({ name, variant }: LogoProps) {
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[1];

  return (
    <h1
      className={`text-2xl ${variant == "dark" && "text-beauty-dark"} font-semibold`}
    >
      <span className="text-beauty-accent">{firstName}</span>
      {lastName}
    </h1>
  );
}
