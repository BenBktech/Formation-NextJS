export interface IFood {
    name: string;
    calories: number;
    carbohydrates: number; // in grams
    protein: number; // in grams
    fat: number; // in grams
    fiber?: number; // in grams, optional
    sugar?: number; // in grams, optional
    vitamins?: string[]; // array of vitamins, optional
    minerals?: string[]; // array of minerals, optional
}

export interface IFoodReduced {
    value: string;
    label: string;
}

export interface IMacronutrientData {
    name: 'carbohydrates' | 'protein' | 'fat';
    value: number;
}