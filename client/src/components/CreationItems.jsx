import React, { useState } from 'react'

const CreationItems = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      onClick={() => setExpanded(!expanded)} 
      className='p-5 max-w-5xl text-sm bg-white border border-gray-200 rounded-xl shadow-sm 
                 hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer'
    >
      {/* Header */}
      <div className='flex justify-between items-center gap-6'>
        <div>
          <h2 className='text-lg font-semibold text-gray-800 mb-1'>
            {item.prompt}
          </h2>
          <p className='text-gray-500 text-sm'>
            {item.type} • {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button
          className={`bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] 
                     px-3 py-1.5 text-xs font-medium rounded-full 
                     hover:bg-[#DBEAFE] hover:text-[#1E3A8A] transition-colors duration-200`}
        >
          {item.type}
        </button>
      </div>

      {/* Expandable Content */}
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${expanded ? 'max-h-[500px] mt-3' : 'max-h-0'}`}
      >
        {expanded && (
          <div>
            {item.type === 'image' ? (
              <div className="flex justify-center">
                <img 
                  src={item.content} 
                  alt="creation" 
                  className='mt-3 w-full max-w-md rounded-lg shadow-md border'
                />
              </div>
            ) : (
              <div className='mt-3 p-3 bg-gray-50 rounded-lg border text-sm text-slate-700 leading-relaxed'>
                {item.content}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CreationItems
