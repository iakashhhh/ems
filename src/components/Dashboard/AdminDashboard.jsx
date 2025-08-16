import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#111] to-[#1e293b] text-white p-6">
      {/* Header */}
      <Header changeUser={changeUser} />

      {/* Dashboard Content */}
      <div className="mt-6 space-y-6">
        {/* Create Task Section */}
        <div className="rounded-xl bg-[#1c1c1c] shadow-lg p-6">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">
            Create New Task
          </h2>
          <CreateTask />
        </div>

        {/* All Tasks Section */}
        <div className="rounded-xl bg-[#1c1c1c] shadow-lg p-6">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">
            All Tasks
          </h2>
          <div
            className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-2"
            id="tasklist"
          >
            <AllTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
