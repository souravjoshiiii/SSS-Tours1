import React from 'react'

function Hovercard() {
  return (
    <div className="relative group w-64 h-80 overflow-hidden rounded-lg shadow-lg">
    {/* Background Image */}
    <img 
      src={image} 
      alt="Card Background" 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm font-light mb-4">{description}</p>
      <button className="btn btn-outline text-white">{buttonText}</button>
    </div>
  </div>
  )
}

export default Hovercard
