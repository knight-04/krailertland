import React from 'react';
import LogoKL from '../../../../../public/image/Screenshot 2567-12-25 at 21.37.16.png'

const Logo = () => {
  return (
    <div className="items-center space-x-2 ">

      <img
        src={LogoKL}
        alt="KL Logo"
        className="w-auto h-10 object-contain md:h-16"
      />

    </div>
  );
};

export default Logo;