import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavLinks = ({ openRegisterModal }) => {  // รับ prop openRegisterModal
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinks = [
    { name: 'หน้าแรก', section: 'home' },
    { name: 'โครงการ', section: 'properties' },
    { name: 'สถานที่', section: 'location' },
    { name: 'ผลงาน', section: 'timeline' },
    { name: 'จุดเด่น', section: 'blog' }
  ];

  const mobileLinks = [
    { name: 'หน้าแรก', section: 'home' },
    { name: 'โครงการ', section: 'properties' },
    { name: 'สถานที่', section: 'location' },
    { name: 'ผลงาน', section: 'timeline' },
    { name: 'จุดเด่น', section: 'blog' },
    { name: 'ลงทะเบียน', section: '' },
    { name: 'ติดต่อเรา', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      const sections = desktopLinks.map(link => document.getElementById(link.section));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === '') {  // ปุ่มลงทะเบียนในเมนูมือถือ
      openRegisterModal();  // ใช้ function ที่รับมาจาก prop
      setIsOpen(false);
      return;
    }

    if (sectionId === 'contact') {
      const footer = document.querySelector('footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = isSticky ? 80 : 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block transition-all duration-500 ${isSticky
          ? 'fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm shadow-lg z-50 py-4'
          : 'py-6'
        }`}>
        <div className="container mx-auto px-4">
          <div className="hidden md:flex justify-center items-center space-x-12">
            {desktopLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section)}
                className={`relative px-2 py-1 text-sm tracking-wider uppercase transition-all duration-300
                 ${activeSection === link.section
                    ? 'text-amber-500 font-semibold'
                    : 'text-gray-500 hover:text-amber-500'
                  }
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5
                 before:bg-amber-500 before:transform before:scale-x-0 before:transition-transform before:duration-300
                 hover:before:scale-x-100
                 ${activeSection === link.section ? 'before:scale-x-100' : ''}
               `}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`block md:hidden transition-all duration-500 ${isSticky
          ? 'fixed top-0 left-0 right-0 bg-gray-900/80 shadow-lg z-50'
          : ''
        }`}>
        <div className="container mx-auto flex items-center justify-end p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Full Screen Menu Container */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-900 backdrop-blur-sm z-[100]">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="w-32">
                {/* Logo */}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
              >
                <X size={24} color='white' />
              </button>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm shadow-lg">
              {mobileLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.section)}
                  className="w-full flex justify-between items-center px-6 py-3 text-left border-b"
                >
                  <span className="text-white">{link.name}</span>
                  <span className="text-gray-400">›</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavLinks;