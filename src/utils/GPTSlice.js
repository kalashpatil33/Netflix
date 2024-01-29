import { createSlice } from "@reduxjs/toolkit";
const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        gptmovies: null,
        movieNames: null
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMoviesResult: (state, action) => {
            const { movieName, movieResults } = action.payload;
            state.gptmovies = movieResults;
            state.movieNames = movieName;
        }
    }
})
export const { toggleGPTSearchView, addGPTMoviesResult } = GPTSlice.actions;
export default GPTSlice.reducer;