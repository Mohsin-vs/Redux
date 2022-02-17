import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { getAllmovies, getAllShow } from '../../features/movies/movieSlice'
import MovieCard from "../MovieCard/index"
function MovieList() {
    const movies = useSelector(getAllmovies);
    const shows = useSelector(getAllShow);

    console.log("Listing page movies", movies)
    let movieRendering = ""
    let showRendering = ""

    showRendering = shows.Response === 'True' && (
        shows.Search.map((x, index) =>
        (
            <MovieCard key={index} data={x} />
        )))
    movieRendering = movies.Response === 'True' && (
        movies.Search.map((x, index) =>
        (
            <MovieCard key={index} data={x} />
        )))


    return (
        <div className='container'>
            <Row>{movieRendering.length > 0 ? movieRendering && movieRendering.map(element => {
                return <Col>{element}</Col>
            }) : <div className='fs-1 text-primary'>No Data Found</div>}

            </Row >
            <h1 className='text-white bg-warning text-start px-5 py-2'>Series<span className='fs-6 px-2 text-danger'>“In my experience, evil is not a cultural phenomenon—it’s a human one.”</span></h1>
            <Row>
                {showRendering && showRendering.map(element => {
                    return <Col>{element}</Col>
                })}
            </Row>
        </div >
    )
}

export default MovieList