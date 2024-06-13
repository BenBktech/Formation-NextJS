import { tasks } from "../data";

export async function GET() {
    return Response.json(tasks);
}