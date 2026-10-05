// Pourcentage de code personnel : 85%
import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getMovies();
  }, [search]);

  const getMovies = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/movies?search=${search}`);
      setMovies(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des films", error);
    }
  };

  const toggleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">🎬 CineScope — Catalogue de Films</h1>
      
      {/* Barre de recherche */}
      <div className="field has-addons mb-5">
        <div className="control is-expanded">
          <input
            type="text"
            className="input"
            placeholder="Rechercher par titre ou par genre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grille de films */}
      <div className="columns is-multiline">
        {movies.map((movie) => {
          const isFav = favorites.some((fav) => fav.id === movie.id);
          return (
            <div className="column is-one-quarter" key={movie.id}>
              <div className="card">
                <div className="card-content">
                  <p className="title is-4">{movie.title}</p>
                  <p className="subtitle is-6">Genre : {movie.genre} | Année : {movie.releaseYear}</p>
                  <p>⭐ Note : {movie.rating} / 10</p>
                </div>
                <footer className="card-footer">
                  <button 
                    className={`card-footer-item button ${isFav ? 'is-danger' : 'is-success'}`}
                    onClick={() => toggleFavorite(movie)}
                  >
                    {isFav ? '❤️️ Retirer des favoris' : '🤍 Ajouter aux favoris'}
                  </button>
                </footer>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section Favoris */}
      <div className="box mt-6">
        <h2 className="title is-5">Mes Films Favoris ({favorites.length})</h2>
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>• {fav.title} ({fav.releaseYear})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;