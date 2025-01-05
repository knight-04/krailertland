import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { properties } from '../../../mockdata/mockproperty';

const PropertyCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!properties || properties.length === 0) {
    return null;
  }

  const property = properties[currentIndex];


  useEffect(() => {
    console.log('Current Index:', currentIndex);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === properties.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [properties.length]);


  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Card */}
      <div className="relative bg-white/50 backdrop-blur-sm shadow-lg overflow-hidden rounded-lg">
        <div className="flex md:flex-row flex-col">
          {/* Left side - Image */}
          <div className="relative md:w-3/5 w-full bg-gray-100">
            {/* New Project Tag */}
            {/* <div className="absolute left-4 top-4 z-10">
              <span className="bg-orange-100/90 text-orange-800 px-4 py-1 rounded-md text-sm font-medium">
                โครงการใหม่
              </span>
            </div> */}
            <img
              src={property.image}
              alt={property.title}
              className="w-full md:h-[400px] h-[200px] object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="md:w-2/5 w-full md:p-10 p-3 flex flex-col">

            {/* Property Info */}
            <div className="md:space-y-10 space-y-5">
              <div>
                <h2 className="md:text-2xl text-xl font-bold text-gray-800 ">{property.title}</h2>
                <p className="text-gray-600 text-sm mt-1">เปิดจองโครงการแล้ววันนี้</p>
              </div>

              <h3 className="md:text-xl text-lg font-bold text-gray-800  ">เริ่มต้น {property.price} ล้านบาท</h3>
              <p className="text-gray-700 text-sm">@ {property.address}</p>
              <div className="hidden md:block relative h-0.5 bg-gradient-to-r from-gray-900/50 via-amber-200 to-gray-900/50 rounded-full animate-pulse" />

              <button className="w-full px-6 py-2 hover:animate-none animate-pulse hover:from-yellow-500/50 hover:bg-gradient-to-r hover:text-amber-600 
              rounded-full bg-gray-50  hover:to-yellow-500/50 hover:via-amber-50 text-yellow-600/50
               shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
                ดูรายละเอียดโครงการ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/50 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/50 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors  ${index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
              }`}
            style={{
              
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyCardCarousel;