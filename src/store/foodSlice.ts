import { FoodItem, FoodState } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFoodItems } from "../../utils";

// Thunk for fetching food items asynchronously
export const fetchItems = createAsyncThunk<FoodItem[]>('food/fetchItems', async () => {
    const response = await fetchFoodItems();
    return response;
});

// Initial state of the food slice
const initialState: FoodState = {
    items: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

// Create a slice for managing food items state
const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        // Reducer for adding a new food item
        addItem: (state, action: PayloadAction<FoodItem>) => {
            state.items.push(action.payload);
        },
        // Reducer for editing an existing food item
        editItem: (state, action: PayloadAction<FoodItem>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        // Reducer for deleting a food item
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: builder => {
        builder
        // Handle fetchItems pending state
        .addCase(fetchItems.pending, (state) => {
            state.status = 'loading';
        })
        // Handle fetchItems fulfilled state
        .addCase(fetchItems.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;  // Populate the items array with the fetched data
        })
        // Handle fetchItems rejected state
        .addCase(fetchItems.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || null;
        });
    }
});

// Export actions for adding, editing, and deleting food items
export const { addItem, editItem, deleteItem } = foodSlice.actions;

// Export the reducer to be used in the store configuration
export default foodSlice.reducer;
