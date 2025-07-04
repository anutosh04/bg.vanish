import React from 'react';
import { useAppContext } from '../context/AppContext';

const Alert = () => {
  
    const {alert,setAlert} = useAppContext()
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-red-400 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-4 min-w-[300px] max-w-md">
        <span className="text-sm sm:text-base font-semibold">{alert}</span>
        <button
          onClick={()=> setAlert('')}
          className="ml-auto btn btn-sm btn-circle bg-red-600 hover:bg-red-700 border-none text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Alert;