import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";
import GPTReducer from "../utils/GPTSlice";
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            GPT: GPTReducer,
        }
    }
);
export default appStore;