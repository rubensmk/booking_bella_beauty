import React from "react";
import Logo from "./Logo";

interface NavBarProps {
  name: string;
}

export default function Navbar({ name }: NavBarProps) {
  return (
    <nav className="w-full py-4 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-beauty-primary/30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo name={name} variant="dark" />
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="text-beauty-dark hover:text-beauty-accent transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-beauty-dark hover:text-beauty-accent transition-colors font-medium"
          >
            About us
          </a>
          <a
            href="#services"
            className="text-beauty-dark hover:text-beauty-accent transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#our_work"
            className="text-beauty-dark hover:text-beauty-accent transition-colors font-medium"
          >
            Our work
          </a>
        </div>
      </div>
    </nav>
  );
}
