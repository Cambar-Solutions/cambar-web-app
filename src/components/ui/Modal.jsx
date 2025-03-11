export function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          {children}
          <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✖</button>
        </div>
      </div>
    );
  }
  