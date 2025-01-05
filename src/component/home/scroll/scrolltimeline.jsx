import React, { useState, useRef, useEffect } from 'react';
import { timelineData } from '../../mockdata/mockproperty';


const TimelineItem = ({ period, index, isHovered }) => (
  <div className="flex-none w-96">
    {/* Timeline Node */}
    <div className="relative">
      <div className={`relative z-10 w-6 h-6 mx-auto mb-8 rounded-full border-[3px] transition-all duration-500 
        ${isHovered || period.highlighted
          ? 'bg-gradient-to-r from-amber-400 to-yellow-600 border-amber-100 scale-110 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
          : 'bg-white border-gray-200'
        }`}
      />
    </div>

    {/* Content Card */}
    <div className={`transition-all duration-500 rounded-xl
      ${isHovered
        ? 'bg-white/95 p-8 -translate-y-2 '
        : 'p-6 hover:bg-white/50'
      }`}
    >
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-semibold transition-all duration-300
          ${isHovered
            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-transparent bg-clip-text scale-105'
            : 'text-gray-800'
          }`}>
          {period.year}
        </h3>
      </div>

      {period.highlight ? (
        <div className="text-center space-y-5">
          <div className="text-amber-500 text-xl font-bold tracking-wide">
            {period.highlight}
          </div>
          <div className="text-xl font-bold text-gray-800">
            {period.title}
          </div>
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 py-3 px-5 rounded-lg inline-block">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-transparent bg-clip-text font-medium">
              มูลค่า {period.value} ลบ.
            </span>
          </div>
        </div>
      ) : (
        <ul className="space-y-5">
          {period.projects.map((project, idx) => (
            <li key={idx} className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 ml-16"></div>
                <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                  {project.name}
                </span>
              </div>
              <div className="ml-16 text-sm bg-gradient-to-r from-amber-600 to-yellow-600 text-transparent bg-clip-text font-medium">
                มูลค่า {project.value} ลบ.
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Timeline = ({ id }) => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return; 

    const scroll = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id={id} className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-5 mb-20">
          <h3 className='text-amber-500 font-medium tracking-wide uppercase letter-spacing-2'>ผลงานที่ผ่านมา</h3>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">
            ความสำเร็จของเรา
          </h2>
        </div>

        <div className="overflow-hidden w-full">
          <div className="relative">
            <div className="relative top-3 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-amber-200 to-gray-200" />
          </div>

          <div className="flex animate-scroll hover:animation-play-state-paused w-max">
            {[...timelineData, ...timelineData].map((period, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <TimelineItem
                  period={period}
                  index={index}
                  isHovered={hoveredIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Timeline;