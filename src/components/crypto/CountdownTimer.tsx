
import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="w-full py-6 mb-12">
      <h2 className="text-center text-[#FFD700] text-3xl font-bold mb-6">
        Token Presale Begins In
      </h2>
      <div className="flex justify-center items-center">
        <div className="bg-[#111] rounded-lg p-4 shadow-lg flex gap-2 items-center max-w-2xl">
          {/* Days */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#111828] text-[#FFD700] text-5xl font-bold p-4 rounded-md min-w-20 flex items-center justify-center">
              {formatNumber(timeLeft.days)}
            </div>
            <span className="text-gray-400 text-sm mt-1">Days</span>
          </div>

          <div className="text-white text-4xl font-bold">:</div>

          {/* Hours */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#111828] text-[#FFD700] text-5xl font-bold p-4 rounded-md min-w-20 flex items-center justify-center">
              {formatNumber(timeLeft.hours)}
            </div>
            <span className="text-gray-400 text-sm mt-1">Hours</span>
          </div>

          <div className="text-white text-4xl font-bold">:</div>

          {/* Minutes */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#111828] text-[#FFD700] text-5xl font-bold p-4 rounded-md min-w-20 flex items-center justify-center">
              {formatNumber(timeLeft.minutes)}
            </div>
            <span className="text-gray-400 text-sm mt-1">Minutes</span>
          </div>

          <div className="text-white text-4xl font-bold">:</div>

          {/* Seconds */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#111828] text-[#FFD700] text-5xl font-bold p-4 rounded-md min-w-20 flex items-center justify-center">
              {formatNumber(timeLeft.seconds)}
            </div>
            <span className="text-gray-400 text-sm mt-1">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
