import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  if (!data?.tasks || data.tasks.length === 0) {
    return (
      <div className="h-[50%] flex items-center justify-center text-gray-400 text-sm mt-16">
        No tasks assigned yet 🚀
      </div>
    )
  }

  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) return <AcceptTask key={task.id || idx} data={task} />
        if (task.newTask) return <NewTask key={task.id || idx} data={task} />
        if (task.completed) return <CompleteTask key={task.id || idx} data={task} />
        if (task.failed) return <FailedTask key={task.id || idx} data={task} />

        return null // fallback
      })}
    </div>
  )
}

export default TaskList
