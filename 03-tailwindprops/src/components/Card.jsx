import React from 'react'

const Card = ({ imagee, feature, para }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      
      <div className="max-w-sm w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 group">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={imagee}
            alt="card"
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
        </div>

        {/* Content */}
        <div className="p-5">
          
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-white text-black rounded-full mb-3">
            Featured
          </span>

          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
            {feature}
          </h2>

          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            {para}
          </p>

          {/* Button */}
          <button className="w-full py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition duration-200">
            Learn More
          </button>

        </div>
      </div>

    </div>
  )
}

export default Card