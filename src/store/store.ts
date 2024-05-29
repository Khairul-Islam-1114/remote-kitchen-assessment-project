import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./foodSlice";

// Configure the Redux store
export const store = configureStore({
    reducer: {
        // Register the food slice reducer
        food: foodReducer
    }
});

// Define the RootState type which represents the entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type which represents the dispatch function type from the Redux store
export type AppDispatch = typeof store.dispatch;
