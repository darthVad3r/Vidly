import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies: getMovies()
     } 

     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies })
     }

    render() { 
        return (
            <div>
                <div className="row">
                    {this.state.movies.length > 0 ? <p>There are {this.state.movies.length} movies available</p> : <h2>There are no movies available at this time</h2>}
                </div>
                <div className="row">
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Daily Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(movie => (<tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button className="btn btn-danger btn-sm shadow" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                            </tr>))}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );
    }
}
 
export default Movies;