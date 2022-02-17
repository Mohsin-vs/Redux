import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MovieCard(props) {
    // console.log("THis is the id ", props.data.imdbID)
    return (<>
        <Link to={`/MovieDetial/${props.data.imdbID}`}>
            <Card style={{ width: '17rem' }} className="my-4 bg-dark">
                <Card.Img variant="top" src={props.data.Poster} />
                <Card.Body>
                    <Card.Title className='text-muted'>{props.data.Title}</Card.Title>
                    <Card.Text>
                        <Badge bg="info">{props.data.Type}</Badge> <Badge bg="secondary">{props.data.Year}</Badge>
                    </Card.Text>
                    <Button className='btn-sm btn-warning'>Go To Detail</Button>
                </Card.Body>
            </Card>
        </Link>
    </>
    )
}

export default MovieCard