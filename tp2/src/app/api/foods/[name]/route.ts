import { foods } from "@/data";

export async function GET(
    request: Request,
    { params }: { params: { name: string }}
) {
    console.log('ok');
    console.log(params.name);
    const index = foods.findIndex(
        (food) => food.name.toLowerCase().replace(/ /g, '-') === params.name
    )
    console.log(foods[index]);
    if(index !== -1) {
        return new Response(JSON.stringify(foods[index]), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        })
    }
    else {
        return new Response("Food not found.", {
            headers: {
                "Content-Type": "application/json"
            },
            status: 404
        });
    } 
}