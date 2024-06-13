import { ITaskListProps } from "@/types"

const TaskList = ({ tasks, handleDeleteTask }: ITaskListProps) => {
  return (
    <>
      {tasks?.length > 0 ? (
        tasks.map((task) => {
          return (
            <div className="flex" key={task.id}>
              <div>{task.text}</div> - 
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          )
        }
      )
      ) : (
        <p>No tasks.</p>
      )}
    </>
  )
}

export default TaskList