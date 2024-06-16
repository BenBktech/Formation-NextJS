'use client';
import { useState, useEffect } from "react";
import { IFood } from "@/types";

const FoodPage = ({ params }: { params: { name: string }}) => {

  const [food, setFood] = useState<IFood | null>(null);

  const fetchFood = async() => {
    try {
      const APIQueryURL = `/api/foods/${params.name}`;
      console.log(APIQueryURL)
      const response = await fetch(APIQueryURL);
      const data = await response.json();
      console.log(data);
    }
    catch(error) {
      console.log("Error fetching Food:", error);
    }
  }

  useEffect(() => {
    const initialize = async() => {
      await fetchFood();
    }
    initialize();
  }, [])

  return (
    <div>{params.name}</div>
  )
}

export default FoodPage