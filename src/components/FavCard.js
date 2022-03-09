import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MovieCard({ movie , getFavMovies }) {
    function handelDelete(id) {
        const url = `${REACT_APP_SERVER}/delete/${id}`;
        const response = fetch(url, {
          method: "DELETE",
        }).then(() => {
          getFavMovies();
        });
    }
    return (
        <Card key={movie.id} style={{ width: '18rem', height: "500px", backgroundColor: "#eee", margin: "30px" }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.comment}
                </Card.Text>
                <Card.Text>
                    <img style={{ width: "200px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="pic"></img>
                </Card.Text>

                <Button onClick={() => handelDelete(movie.id)} variant="danger" type="submit">
                    Delete
                </Button>
            </Card.Body>
        </Card>
    )
}