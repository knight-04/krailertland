import React from 'react';
import LocationCard from '../properties/locationcard';
import { locations } from '../../../mockdata/mockproperty';

const FeaturedLocation = ({id}) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            สถานที่สำหรับคุณ
          </h2>
          <p className="text-amber-600">
            ค้นหาบ้านในฝันที่ดีที่สุด ด้วยทำเลหลากหลายแห่งที่เราคัดสรรให้คุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((property, index) => (
            <LocationCard key={index} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocation;
