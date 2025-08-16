import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { PlusCircle } from 'lucide-react'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    })

    const data = userData
    data.forEach(function (elem) {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    })
    setUserData(data)
    console.log(data)

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="p-6 bg-[#111]/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800 mt-6">
      <h2 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
        <PlusCircle size={20} /> Create New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        {/* Left side inputs */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#1E1E1E] border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition-all"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#1E1E1E] border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition-all"
              type="date"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Assign To</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#1E1E1E] border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition-all"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#1E1E1E] border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition-all"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>

        {/* Right side description + button */}
        <div className="w-full md:w-2/5 flex flex-col">
          <label className="block text-sm text-gray-300 mb-1">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-3 rounded-lg outline-none bg-[#1E1E1E] border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition-all resize-none"
            placeholder="Write task details..."
          ></textarea>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-5 rounded-lg shadow-md transition-all duration-300"
          >
            <PlusCircle size={18} /> Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
