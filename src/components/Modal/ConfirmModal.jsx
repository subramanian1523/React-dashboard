import React from "react";
import { Button } from "../Buttons/Button";

export const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end gap-3">
          <Button onClick={onClose} className="bg-gray-300 hover:bg-gray-400">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-red-500 text-white hover:bg-red-600">
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};
