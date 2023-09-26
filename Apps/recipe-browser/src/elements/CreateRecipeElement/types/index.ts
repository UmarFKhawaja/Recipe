export interface CreateRecipeForm {
  recipe: Recipe;
}

export interface Recipe {
  title: string;
  description: string;
  steps: Step[];
}

export interface Step {
  order: number;
  description: string;
  tasks: Task[];
}

export interface Task {
  description: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  description: string;
  quantity: number;
  unit: Unit;
}

export interface Unit {
  id: string;
}
