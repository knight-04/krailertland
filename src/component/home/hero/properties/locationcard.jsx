import React from 'react';
import { Home, MapPin, Star } from 'lucide-react';


const LocationCard = ({ property }) => {
  const { image, status, type, location, price } = property;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)] transition-all duration-500 group">
      <div className="relative">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={location}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4">
          <span className={`px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 flex items-center gap-2 
            ${status === 'พร้อมเข้าอยู่'
              ? 'bg-gradient-to-r from-indigo-600/80 to-emerald-500/80 shadow-emerald-500/30'
              : 'bg-gradient-to-r from-orange-500/80 to-yellow-500/80 shadow-amber-500/30'
            } text-white font-medium`}>
            {status === 'พร้อมเข้าอยู่' ? (
              <>
                <Home size={18} className="animate-pulse" />
                <span className="text-sm tracking-wide">พร้อมเข้าอยู่</span>
              </>
            ) : (
              <>
                <Star size={18} className="animate-pulse" />
                <span className="text-sm tracking-wide">โครงการใหม่</span>
              </>
            )}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex justify-between items-end">
            {/* Type & Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Home size={16} />
                </span>
                <span className="text-sm font-medium tracking-wide">{type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                  <MapPin size={16} />
                </span>
                <span className="text-sm font-medium tracking-wide">{location}</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-xs text-gray-300">เริ่มต้น</span>
              <div className="text-xl font-bold">{price}</div>
              <span className="text-xs text-gray-300">ล้านบาท</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LocationCard;