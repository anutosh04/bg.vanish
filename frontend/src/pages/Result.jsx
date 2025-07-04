import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const { image, resultImage } = useAppContext();
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'background_removed.png';
    link.click();
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-7xl flex flex-col gap-10">
        
        
        <div className="flex flex-col md:flex-row gap-10">
          
         
          <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 w-full text-center">Original Image</h2>
            <div className="w-full h-[400px] bg-gray-50 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Original"
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
          </div>

          {/* Result Image */}
          <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 w-full text-center">Background Removed</h2>
            <div className="w-full h-[400px] bg-gray-50 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
              {resultImage && (
                <img
                  src={resultImage}
                  alt="Processed"
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>

      
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md text-lg"
          >
            ⬇️ Download Image
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition-all duration-200 shadow-md text-lg"
          >
            🏠 Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default Result;