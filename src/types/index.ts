// Define the structure of a FoodItem object
export interface FoodItem {
    id: string;          // Unique identifier for the food item
    title: string;       // Title or name of the food item
    difficulty: string;  // Difficulty level of preparing the food item
    image: string;       // URL or path to the image of the food item
}



// Define the structure of the FoodState object, which represents the state of food items in the application
export interface FoodState {
    items: FoodItem[];  // Array of food items
    status: 'idle' | 'loading' | 'succeeded' | 'failed';  // Current status of the data fetching process
    error: string | null;  // Error message if the data fetching fails, otherwise null
}
