import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 px-6 py-3 
        bg-gradient-to-r from-yellow-600 to-yellow-500
        hover:from-yellow-500 hover:to-yellow-400
        active:from-yellow-700 active:to-yellow-600
        text-white font-semibold 
        rounded-full
        transition-all duration-300
        transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <ArrowUp size={20} />
          <span className="mr-1">Back to top</span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;