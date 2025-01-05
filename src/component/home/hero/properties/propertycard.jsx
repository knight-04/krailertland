import React, { useState } from 'react';
import { BathIcon, BedDoubleIcon, MapPin, ScalingIcon } from 'lucide-react';

const PropertyCard = ({ property }) => {
  const { status, address, title, beds, baths, sqft, price, image } = property;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)] transition-all duration-500 group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 ${status === 'Available'
              ? 'bg-emerald-500/80 shadow-emerald-500/30'
              : status === 'Sold Out'
                ? 'bg-gray-900/80 shadow-gray-900/30'
                : 'bg-amber-500/80 shadow-amber-500/30'
            } text-white text-sm font-medium tracking-wide`}>
            {status}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <span className="p-1.5 bg-gray-100 rounded-lg mr-2">
            <MapPin size={16} />
          </span>
          <span className="text-sm tracking-wide">{address}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-6 group-hover:text-amber-600 transition-colors">{title}</h3>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <BedDoubleIcon className="text-amber-600 mb-1" />
            <span className="text-sm text-gray-600">ห้องนอน {beds}</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <BathIcon className="text-amber-600 mb-1" />
            <span className="text-sm text-gray-600">ห้องน้ำ {baths}</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <ScalingIcon className="text-amber-600 mb-1" />
            <span className="text-sm text-gray-600">{sqft} ตร.ม.</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500">เริ่มต้น</span>
            <div className="text-2xl font-bold text-amber-600">{price.toLocaleString()} ล้าน</div>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-600 hover:to-amber-500 text-white font-medium rounded-full shadow-lg shadow-gray-900/20 hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
            ดูรายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
