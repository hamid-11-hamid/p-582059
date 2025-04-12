
import React from "react";

const BackgroundEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Yellow line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M-100,350 C150,250 350,450 600,350 C850,250 1050,400 1300,300 C1550,200 1750,350 2000,300" 
            stroke="#FFD700" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Network dots effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-30 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g>
            {/* Generate random dots to create network effect */}
            {Array.from({ length: 40 }).map((_, i) => (
              <circle 
                key={i}
                cx={Math.random() * 1440}
                cy={Math.random() * 400}
                r={Math.random() * 2 + 1}
                fill="#FFD700"
              />
            ))}
          </g>
          <g>
            {/* Lines connecting some of the dots */}
            {Array.from({ length: 20 }).map((_, i) => (
              <line 
                key={i}
                x1={Math.random() * 1440}
                y1={Math.random() * 400}
                x2={Math.random() * 1440}
                y2={Math.random() * 400}
                stroke="#FFD700"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundEffect;
