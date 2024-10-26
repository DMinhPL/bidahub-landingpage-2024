import React from 'react';

const Loading: React.FC = () => (
  <div className='m-loading fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-[10000]'>
    {/* Enhanced Central White Ball */}
    <div className='relative w-20 h-20 bg-gradient-to-t from-gray-300 to-white rounded-full flex justify-center items-center shadow-xl'>
      <div className='absolute top-2 left-2 w-8 h-8 bg-white opacity-50 rounded-full' />
      <div className='absolute flex items-center justify-center'>
        {/* Rotating Balls */}
        <div className='absolute w-8 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full text-white flex justify-center items-center text-sm font-bold animate-rotate-ball1 shadow-md'>
          3
        </div>
        <div className='absolute w-8 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full text-white flex justify-center items-center text-sm font-bold animate-rotate-ball2 shadow-md'>
          9
        </div>
        <div className='absolute w-8 h-8 bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full text-white flex justify-center items-center text-sm font-bold animate-rotate-ball3 shadow-md'>
          1
        </div>
        <div className='absolute w-8 h-8 bg-gradient-to-b from-green-500 to-green-700 rounded-full text-white flex justify-center items-center text-sm font-bold animate-rotate-ball4 shadow-md'>
          6
        </div>
        <div className='absolute w-8 h-8 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full text-white flex justify-center items-center text-sm font-bold animate-rotate-ball5 shadow-md'>
          4
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
