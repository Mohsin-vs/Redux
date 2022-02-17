import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../constants/baseUrl'
import MovieList from '../MoviesListing'
import { fetchAsyncMovies, fetchAsyncShow } from '../../features/movies/movieSlice'
import { useDispatch } from 'react-redux'

function Home() {
    const dispatch = useDispatch()
    // const [movies, setMovies] = useState([])
    // const movieText = "Harry"
    // const apiCall = () => {
    //     axios.get(`${baseUrl}&s=${movieText}`)
    //         .then((response) => { setMovies(response.data) })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    // dispatch(addMovies(movies))
    // useEffect(() => {
    //     dispatch(fetchAsyncMovies())
    // }, [dispatch])
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShow())
    return (
        <div><MovieList /></div>
    )
}

export default Home