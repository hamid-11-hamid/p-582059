
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className="text-white p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black z-50 border-t border-gray-800 py-4 px-5">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-white hover:text-[#EDC211] transition-colors py-2">
              Home
            </a>
            <a href="#" className="text-white hover:text-[#EDC211] transition-colors py-2">
              Tokenomics
            </a>
            <a href="#" className="text-white hover:text-[#EDC211] transition-colors py-2">
              Whitepaper
            </a>
            <a href="#" className="text-white hover:text-[#EDC211] transition-colors py-2">
              Sale Structures
            </a>
            <a href="#" className="text-white hover:text-[#EDC211] transition-colors py-2">
              Roadmap
            </a>
            <Button 
              className="bg-[#FFD700] hover:bg-[#E3B419] text-black font-bold rounded-3xl w-full py-2 mt-2 transition-colors"
            >
              Join the ICO
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
