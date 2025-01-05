import React, { useState } from 'react';
import Logo from './header/logo';
import NavLinks from './header/navlinks';
import AuthButtons from './header/authbuttons';
import RegisterModal from './modal/register'
import SuccessToast from './modal/toast'

const Navbar = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    plan: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowRegisterModal(false);
    setShowToast(true);
  };

  const closeToast = () => {
    setShowToast(false);
    setFormData({ name: '', age: '', plan: '' });
  };

  const openRegisterModal = () => {
    setFormData({ name: '', age: '', plan: '' });
    setShowRegisterModal(true);
  };

  return (
    <>
      <nav className="relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-2">
            <Logo />
            {/* ใช้ ml-auto เพื่อดัน items ที่เหลือไปทางขวา */}
            <div className="ml-auto flex items-center">
              <div className="order-3 sm:order-2">
                <NavLinks openRegisterModal={openRegisterModal} />
              </div>
              <div className="order-2 sm:order-3">
                <AuthButtons openRegisterModal={openRegisterModal} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      <SuccessToast
        isOpen={showToast}
        onClose={closeToast}
      />
    </>
  );
};

export default Navbar;