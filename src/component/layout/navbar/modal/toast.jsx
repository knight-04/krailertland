
const SuccessToast = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white text-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 animate-fade-in"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-center mb-4 text-green-500">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-semibold text-lg text-gray-800">ลงทะเบียนสำเร็จ</span>
          </div>
          <div className="flex justify-center pt-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500
              hover:from-yellow-500 hover:to-yellow-400 text-white rounded-full
              font-medium transition-colors"
            >
              ตกลง
            </button>
          </div>
        </div>
  
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(1rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </div>
    );
  };
  
  export default SuccessToast;