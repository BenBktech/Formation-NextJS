import { foods } from "@/data";

export async function GET() {
    return Response.json(foods);
}