import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
      if (!isOpen) return null;

      return ReactDOM.createPortal(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-6 rounded-lg">
                        {children}
                        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                              Close
                        </button>
                  </div>
            </div>,
            document.body
      );
};

const ModalComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      return (
            <div>
                  <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                        Open Modal
                  </button>
                  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <h2 className="text-xl font-bold mb-4">Portal Modal Example</h2>
                        <p>This modal is rendered using React Portals!</p>
                  </Modal>
            </div>
      );
};

export default ModalComponent;
