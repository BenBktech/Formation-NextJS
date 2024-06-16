'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { IFood, IMacronutrientData } from "@/types";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useRouter } from "next/navigation";
import { Undo2 } from 'lucide-react';

const FoodPage = ({ params }: { params: { name: string }}) => {

  const router = useRouter();

  const [food, setFood] = useState<IFood | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [macronutriments, setMacronutriments] = useState<IMacronutrientData[]>([]);

  const COLORS = ['#F28907', '#5079F2', '#F2220F'];

  const fetchFood = async() => {
    try {
      const APIQueryURL = `/api/foods/${params.name}`;
      const response = await fetch(APIQueryURL);
      const data = await response.json();

      // Macronutriments
      const macronutrimentsDatas: IMacronutrientData[] = [
        { name: 'carbohydrates', value: data.carbohydrates },
        { name: 'protein', value: data.protein },
        { name: 'fat', value: data.fat },
      ];

      setMacronutriments(macronutrimentsDatas);

      // Food General Informations
      setFood(data);
      console.log(data);
    }
    catch(error) {
      console.log("Error fetching Food:", error);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const initialize = async() => {
      await fetchFood();
    }
    initialize();
  }, [params.name]);

  return (
    <>
      {(!isLoading && food && macronutriments) ? (
        <div className="p-8 text-white">
          <Undo2 className="cursor-pointer mb-5 text-white" onClick={() => router.back()} />
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            {food.name}
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={macronutriments}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {macronutriments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <span className="inline-block w-3 h-3 bg-[#F28907] mr-2"></span> Carbohydrates
                <span className="inline-block w-3 h-3 bg-[#5079F2] ml-4 mr-2"></span> Protein
                <span className="inline-block w-3 h-3 bg-[#F2220F] ml-4 mr-2"></span> Fat
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3">
              <div className="text-lg font-semibold mb-4">Nutritional Information per 100 grams:</div>
              <div className="mb-4 p-4 bg-gray-900 text-white rounded-lg shadow-inner">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 bg-[#F28907] border border-gray-700 mr-3"></div>
                  <div>Carbohydrates: <span className="font-medium">{food.carbohydrates}g</span></div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 bg-[#5079F2] border border-gray-700 mr-3"></div>
                  <div>Protein: <span className="font-medium">{food.protein}g</span></div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 bg-[#F2220F] border border-gray-700 mr-3"></div>
                  <div>Fat: <span className="font-medium">{food.fat}g</span></div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <Image src="/vitamins.png" width={30} height={30} alt="Vitamins" />
                  <div className="ml-3">
                    <span className="font-semibold">Vitamins:</span> {food.vitamins?.join(', ')}
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src="/minerals.png" width={30} height={30} alt="Minerals" />
                  <div className="ml-3">
                    <span className="font-semibold">Minerals:</span> {food.minerals?.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl text-white">Loading...</p>
        </div>
      )}
    </>
  );
}

export default FoodPage;
