import React from 'react'

const Benefits = ({icon,text,label}) => {
  return (
    <div className="text-sm flex gap-2 items-center">
        <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border border-indigo-600'>{icon|| ''}</div>
        <div>
            <p className='text-xl font-bold '>{text}</p>
            <p className='text-gray-500'>{label}</p>
        </div>
    </div>
  )
}

export default Benefits