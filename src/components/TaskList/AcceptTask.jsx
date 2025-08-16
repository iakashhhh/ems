import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#2a2a2a] rounded-xl shadow-md hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-700 text-gray-100 text-xs px-3 py-1 rounded-full">
          {data.category || "General"}
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

      {/* Actions */}
      <div className="flex justify-between mt-6 gap-2">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium py-2 text-xs transition">
          ✅ Mark Completed
        </button>
        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium py-2 text-xs transition">
          ❌ Mark Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
