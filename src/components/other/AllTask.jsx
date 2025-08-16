import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 overflow-x-auto">
      {/* Header Row */}
      <div className="grid grid-cols-5 bg-red-500/80 py-2 px-4 rounded font-semibold text-lg sticky top-0 z-10">
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>

      {/* Data Rows */}
      <div className="mt-2 space-y-2">
        {userData?.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 py-2 px-4 rounded border border-emerald-500 
                       bg-[#222] hover:bg-[#2a2a2a] transition transform hover:scale-[1.01]"
          >
            <h2 className="text-lg font-medium truncate">{elem.firstName}</h2>
            <h3 className="text-lg font-medium text-blue-400">
              {elem.taskCounts?.newTask ?? 0}
            </h3>
            <h5 className="text-lg font-medium text-yellow-400">
              {elem.taskCounts?.active ?? 0}
            </h5>
            <h5 className="text-lg font-medium text-green-400">
              {elem.taskCounts?.completed ?? 0}
            </h5>
            <h5 className="text-lg font-medium text-red-500">
              {elem.taskCounts?.failed ?? 0}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
