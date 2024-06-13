'use client';
import { useEffect, useState } from "react";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";

import { ITask, ITasks } from "@/types";

export default function Home() {

  const [tasks, setTasks] = useState<ITasks>([])
  const [taskInput, setTaskInput] = useState<string>('');

  const fetchTasks = async() => {
    try {
      const response = await fetch('/api/task/all');
      const data = await response.json();
      setTasks(data);
    }
    catch(error) {
      console.log("Error fetching tasks:", error);
    }
  }

  const handleAddTask = async() => {
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          text: taskInput
        })
      })
      if (!response.ok) {
        throw new Error(`Error adding task: ${response.statusText}`);
      }
      setTaskInput('');
      await fetchTasks();
    }
    catch(error) {
      console.log('error');
    }
  }

  const handleDeleteTask = async(id: number) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE"
      })
      if (!response.ok) {
        throw new Error(`Error deleting task: ${response.statusText}`);
      }
      await fetchTasks();
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const initialize = async() => {
      fetchTasks();
    }
    initialize();
  }, [])

  return (
    <>
      <AddTask taskInput={taskInput} setTaskInput={setTaskInput} handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </>
  );
}
