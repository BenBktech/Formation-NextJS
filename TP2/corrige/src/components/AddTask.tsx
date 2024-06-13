import { IAddTaskProps } from "@/types"

const AddTask = ({ taskInput, setTaskInput, handleAddTask }: IAddTaskProps) => {
  return (
    <>
      <input type="text" className="border border-indigo-600" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
    </>
  )
}

export default AddTask