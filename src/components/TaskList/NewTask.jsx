import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#2a2a2a] rounded-xl shadow-md hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-emerald-600 text-gray-100 text-xs px-3 py-1 rounded-full">
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

      {/* Action */}
      <div className="mt-6">
        <button className="bg-emerald-500 hover:bg-emerald-600 transition rounded font-medium py-2 px-4 text-sm text-white w-full">
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
