import React, { useState } from 'react';
import PropertyCard from '../properties/propertycard'
import { properties } from '../../../mockdata/mockproperty'


const FeaturedProperties = ({id}) => {
  const [activeFilter, setActiveFilter] = useState('all');



  const filters = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'apartment', label: 'อาคารพาณิชย์' },
    { id: 'villa', label: 'วิลล่า' },
    { id: 'house', label: 'บ้านเดี่ยว' },

  ];

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <span className="text-amber-600 rounded-full font-semibold mb-4 block p-1">
            โครงการทั้งหมด
          </span>
          <h2 className="text-3xl font-bold mb-8 text-slate-800">
            แนะนำสำหรับคุณ
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === filter.id
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-yellow-600/50 hover:text-white'
                  }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties
            .filter(property => activeFilter === 'all' || property.type === activeFilter)
            .map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;