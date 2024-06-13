import { tasks } from "../../data";

export async function DELETE(
    request: Request,
    { params }: { params: { id: string }}
) {
    const index = tasks.findIndex(
        (task) => task.id === parseInt(params.id)
    )
    if(index !== -1) {
        tasks.splice(index, 1);
        return new Response("Task has been deleted.", {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        })
    }
    else {
        return new Response("Task not found.", {
            headers: {
                "Content-Type": "application/json"
            },
            status: 404
        });
    } 
}