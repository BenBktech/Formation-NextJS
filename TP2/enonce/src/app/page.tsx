'use client';
import { useState } from "react";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";

export default function Home() {

  const [tasks, setTasks] = useState([])

  return (
    <>
      <AddTask />
      <TaskList />
    </>
  );
}
