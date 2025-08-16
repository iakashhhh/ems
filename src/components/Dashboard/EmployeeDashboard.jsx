import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#111] to-[#1e293b] text-white p-6">
      {/* Header */}
      <Header changeUser={changeUser} data={data} />

      {/* Dashboard Content */}
      <div className="mt-6 space-y-6">
        {/* Task Stats Section */}
        <div className="rounded-xl bg-[#1c1c1c] shadow-lg p-6">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">
            Task Overview
          </h2>
          <TaskListNumbers data={data} />
        </div>

        {/* Task List Section */}
        <div className="rounded-xl bg-[#1c1c1c] shadow-lg p-6">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">
            My Tasks
          </h2>
          <div
            className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-2"
            id="tasklist"
          >
            {data?.tasks?.length > 0 ? (
              <TaskList data={data} />
            ) : (
              <p className="text-gray-400 italic">No tasks assigned yet 🎉</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
