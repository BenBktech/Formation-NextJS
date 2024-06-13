import { tasks } from "../data";
import { ITask } from "@/types";

export async function POST(request: Request) {
    const task = await request.json();
    const newTask = {
        id: tasks.length + 1,
        text: task.text
    }
    tasks.push(newTask);
    return new Response(JSON.stringify(newTask), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}