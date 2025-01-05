import { Phone } from 'lucide-react';
import React from 'react';

const AuthButtons = ({ openRegisterModal }) => {  // เปลี่ยนชื่อ prop
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="items-center md:space-x-4 space-x-0 hidden md:flex">
      <button
        onClick={openRegisterModal}  // ใช้ function ที่รับมา
        className="px-4 py-2 hover:text-amber-500 text-xs md:text-base"
      >
        ลงทะเบียน
      </button>
      <button
        onClick={scrollToFooter}
        className="px-6 py-2 
        bg-gradient-to-r from-yellow-600 to-yellow-500
        hover:from-yellow-500 hover:to-yellow-400
        active:from-yellow-700 active:to-yellow-600
        text-white font-semibold 
        rounded-full
        shadow-lg shadow-yellow-500/50
        transition-all duration-300
        transform hover:-translate-y-0.5 flex items-center gap-2"
      >
        <Phone className='md:size-5 size-3' />
        <span className="mr-1 text-xs md:text-base">ติดต่อเรา</span>
      </button>
    </div>
  );
};

export default AuthButtons;