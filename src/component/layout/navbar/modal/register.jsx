
const RegisterModal = ({ isOpen, onClose, formData, onChange, onSubmit }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg w-full max-w-md mx-4 p-6"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">ลงทะเบียน</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
  
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">ชื่อ</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
  
            <div className="space-y-2">
              <label className="text-sm font-medium">อายุ</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
                min="1"
              />
            </div>
  
            <div className="space-y-2">
              <label className="text-sm font-medium">แผนการซื้อบ้าน</label>
              <select
                name="plan"
                value={formData.plan}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              >
                <option value="" disabled>เลือกแผนการซื้อบ้าน</option>
                <option value="1">1-2 เดือน</option>
                <option value="2">3-6 เดือน</option>
                <option value="3">1 ปีขึ้นไป</option>
              </select>
            </div>
  
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500
                hover:from-yellow-500 hover:to-yellow-400 text-white rounded-full
                font-medium transition-colors"
              >
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default RegisterModal;