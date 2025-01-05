import React from 'react';
import Logo from '../navbar/logo';
import NavLinks from '../navbar/navlinks';
import AuthButtons from '../navbar/authbuttons';

const Navbar = () => {
  return (
    <nav className="relative z-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <NavLinks />
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;