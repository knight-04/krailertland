import React from 'react';
import { Search, MapPin } from 'lucide-react';


const SearchFields = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full gap-4">
      <div className="flex flex-col md:flex-row items-center w-full gap-2">
        {/* Type Select */}
        <div className="flex w-full md:w-auto">
          <select className="w-full border md:w-48 p-3.5 md:rounded-l-full rounded-lg bg-white/80 backdrop-blur-sm border-gray-200 hover:border-amber-500 transition-colors focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-gray-700">
            <option>ทั้งหมด</option>
            <option>บ้านเดี่ยว</option>
            <option>อาคารพาณิชย์</option>
            <option>วิลล่า</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="flex-1 relative w-full">
          <input
            type="text"
            placeholder="ค้นหาสิ่งที่คุณต้องการ"
            className="w-full p-3.5 border md:rounded-r-full rounded-lg bg-white/80 backdrop-blur-sm border-gray-200 hover:border-amber-500 transition-colors focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
        </div>
      </div>

      {/* Search Button */}
      <div className="flex gap-2 mt-2 md:mt-0 w-full md:w-auto">
        <button className="w-full md:w-auto px-8 py-2 text-white rounded-full hover:bg-slate-700 bg-gradient-to-r from-slate-900 to-slate-600 
         hover:from-gray-600 hover:to-gray-900 shadow-lg shadow-gray-900/50
        transition-all duration-300 transform hover:-translate-y-0.5">
          ค้นหา
        </button>
      </div>

     
    </div>

  );
};
export default SearchFields;