import React from 'react'

const Skeleton = () => {
  return (
    // <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
    <div className="flex items-center space-x-4">
      {/* Circle Skeleton */}
      <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full"></div>

      {/* Rectangle Skeleton */}
      <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  )
}

export default Skeleton