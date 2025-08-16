import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#2a2a2a] rounded-xl shadow-md hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-gray-100 text-xs px-3 py-1 rounded-full">
          {data.category || "Uncategorized"}
        </h3>
        <h4 className="text-xs text-gray-400">{data.taskDate}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-lg font-semibold text-white truncate">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm mt-2 text-gray-300 line-clamp-3">
        {data.taskDescription}
      </p>

      {/* Status */}
      <div className="mt-6">
        <span className="w-full block text-center bg-red-600 text-white font-semibold py-2 rounded-lg">
          Failed ❌
        </span>
      </div>
    </div>
  )
}

export default FailedTask
