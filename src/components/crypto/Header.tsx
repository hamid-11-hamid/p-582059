
import React from "react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  return (
    <header className="bg-black/80 backdrop-blur-sm w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between sticky top-0 z-50 border-b border-gray-900">
      <div className="text-[#FFD700] text-2xl font-bold font-['Exo']">PIETY</div>
      
      <nav className="hidden md:flex items-center gap-8 lg:gap-10">
        <a href="#" className="text-white hover:text-[#FFD700] transition-colors text-sm">
          Home
        </a>
        <a href="#" className="text-white hover:text-[#FFD700] transition-colors text-sm">
          Tokenomics
        </a>
        <a href="#" className="text-white hover:text-[#FFD700] transition-colors text-sm">
          Whitepaper
        </a>
        <a href="#" className="text-white hover:text-[#FFD700] transition-colors text-sm">
          Sale Structures
        </a>
        <a href="#" className="text-white hover:text-[#FFD700] transition-colors text-sm">
          Roadmap
        </a>
      </nav>
      
      <div className="hidden md:block">
        <Button 
          className="bg-[#FFD700] hover:bg-[#E3B419] text-black font-bold rounded-3xl px-6 py-2 transition-colors"
        >
          Join the ICO
        </Button>
      </div>
      
      <MobileMenu />
    </header>
  );
};

export default Header;
