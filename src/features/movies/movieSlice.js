import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from '../../constants/baseUrl'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (name) => {
    let movieText = (name ? name : "Harry")
    const response = await axios.get(`${baseUrl}&s=${movieText}`)
    return response.data
})
// it takes two argument the first is simple string identifier and second in payload creater callback funcation

export const fetchAsyncShow = createAsyncThunk('shows/fetchAsyncShow', async () => {
    const seriesText = "Friends"
    const response = await axios.get(`${baseUrl}&s=${seriesText}&type=series`)
    return response.data
})
export const fetchAsyncMovieDetail = createAsyncThunk('movieDetail/fetchAsyncMovieDetail', async (id) => {
    const response = await axios.get(`${baseUrl}&i=${id}&Plot=full`);
    return response.data
})

const initialState = {
    movies: {},
    shows: {},
    movieDetail: {}
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
            // {...state, payload} old method
            console.log("Alllll oviessssssssss", state.movies);
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fulfilled")
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Error")
        },
        [fetchAsyncShow.fulfilled]: (state, { payload }) => {
            console.log("fulfilled")
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
            console.log("this is movie detial")
            return { ...state, movieDetail: payload }
        }
    }
})
export const { addMovies } = movieSlice.actions
export const getAllmovies = (state) => state.movies.movies
export const getAllShow = (state) => state.movies.shows
export const getMovieDetial = (state) => state.movies.movieDetail
export default movieSlice.reducer;