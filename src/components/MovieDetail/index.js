import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieDetail, getMovieDetial } from '../../features/movies/movieSlice';
import { FaLanguage } from "react-icons/fa"
function MovieDetial() {
    let x = useParams();
    const dispatch = useDispatch();
    const s = useSelector(getMovieDetial);
    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(x.id))
        console.log("this is the single movie data", s)

    }, [])

    return (
        <div style={{ background: "linear-gradient(45deg, black, transparent)" }}>
            {Object.keys(s) === 0 ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <Container>
                    <Row className='p-5 text-start' >
                        <Col sm={8}>
                            <h3 className='fs-1'><span className='text-black'>{s.Title}</span></h3>
                            <p className='text-dark fw-bolder text-white'>Actors : <span className='text-black'>{s.Actors}</span></p>
                            <p className='fw-bolder text-white'>Awards : <span className='text-black'>{s.Awards}</span></p>
                            <p className='fw-bolder text-white'>Language :<span className='text-black'>{s.Language}</span></p>
                            <p className='fw-bolder text-white'>Category : <span className='text-warning'>{s.Type}</span></p></Col>
                        <Col sm={4}> <img src={s.Poster} alt="media" /></Col>
                    </Row>
                </Container>
            }


        </div>

    )
}

export default MovieDetial