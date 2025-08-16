import React from "react";

const TaskListNumbers = ({ data }) => {
  if (!data?.taskCounts) return null; // safety check

  const stats = [
    {
      label: "New Task",
      value: data.taskCounts.newTask,
      color: "bg-blue-500",
      text: "text-white",
    },
    {
      label: "Completed Task",
      value: data.taskCounts.completed,
      color: "bg-green-500",
      text: "text-white",
    },
    {
      label: "Accepted Task",
      value: data.taskCounts.active,
      color: "bg-yellow-400",
      text: "text-black",
    },
    {
      label: "Failed Task",
      value: data.taskCounts.failed,
      color: "bg-red-500",
      text: "text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`rounded-xl py-6 px-9 shadow-md ${stat.color} transition transform hover:scale-105`}
        >
          <h2 className={`text-3xl font-bold ${stat.text}`}>
            {stat.value ?? 0}
          </h2>
          <h3 className={`text-xl mt-0.5 font-medium ${stat.text}`}>
            {stat.label}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
