
import React from "react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  return (
    <header className="bg-black w-full py-4 px-24 flex items-center justify-between max-md:px-10 max-sm:px-5 sticky top-0 z-50 border-b border-gray-900">
      <div className="text-white text-2xl font-bold">LOGO</div>
      
      <nav className="hidden md:flex items-center gap-10">
        <a href="#" className="text-white hover:text-[#EDC211] transition-colors">
          Home
        </a>
        <a href="#" className="text-white hover:text-[#EDC211] transition-colors">
          Tokenomics
        </a>
        <a href="#" className="text-white hover:text-[#EDC211] transition-colors">
          Whitepaper
        </a>
        <a href="#" className="text-white hover:text-[#EDC211] transition-colors">
          Sale Structures
        </a>
        <a href="#" className="text-white hover:text-[#EDC211] transition-colors">
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
