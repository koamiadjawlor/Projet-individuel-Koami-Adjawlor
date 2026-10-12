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

  // Fonction pour réinitialiser la recherche (bouton Accueil / Reset)
  const resetSearch = () => {
    setSearch("");
  };

  return (
    <div className="container mt-5 px-3">
      {/* En-tête avec bouton Accueil */}
      <div className="level mb-5">
        <div className="level-left">
          <h1 className="title is-3">🎬 CineScope — Catalogue de Films</h1>
        </div>
        <div className="level-right">
          <button className="button is-light" onClick={resetSearch}>
            🏠 Accueil / Tout afficher
          </button>
        </div>
      </div>
      
      {/* Barre de recherche avec icône visuelle */}
      <div className="field has-addons mb-5">
        <div className="control has-icons-left is-expanded">
          <input
            type="text"
            className="input"
            placeholder="Rechercher par titre ou par genre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="icon is-small is-left">
            🔍
          </span>
        </div>
        {search && (
          <div className="control">
            <button className="button is-danger is-light" onClick={resetSearch}>
              Effacer
            </button>
          </div>
        )}
      </div>

      {/* Grille de films ou message si aucun résultat */}
      {movies.length === 0 ? (
        <div className="notification is-warning has-text-centered my-5">
          <p className="is-size-5">Aucun film ne correspond à votre recherche "{search}".</p>
          <button className="button is-small is-dark mt-3" onClick={resetSearch}>
            Réinitialiser la recherche
          </button>
        </div>
      ) : (
        <div className="columns is-multiline">
          {movies.map((movie) => {
            const isFav = favorites.some((fav) => fav.id === movie.id);
            return (
              <div className="column is-one-quarter" key={movie.id}>
                <div className="card h-100">
                  <div className="card-content">
                    <p className="title is-4">{movie.title}</p>
                    <p className="subtitle is-6">Genre : {movie.genre} | Année : {movie.releaseYear}</p>
                    <p>⭐ Note : {movie.rating} / 10</p>
                  </div>
                  <footer className="card-footer">
                    <button 
                      className={`card-footer-item button is-fullwidth ${isFav ? 'is-danger is-light' : 'is-success is-light'}`}
                      onClick={() => toggleFavorite(movie)}
                    >
                      {isFav ? '❤ Retirer des favoris' : '🤍 Ajouter aux favoris'}
                    </button>
                  </footer>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Section distincte pour les favoris (sous forme de cartes compactes ou liste propre) */}
      <div className="box mt-6 has-background-light">
        <h2 className="title is-5">⭐ Mes Films Favoris ({favorites.length})</h2>
        {favorites.length === 0 ? (
          <p className="has-text-grey">Aucun film ajouté aux favoris pour l'instant.</p>
        ) : (
          <ul>
            {favorites.map((fav) => (
              <li key={fav.id} className="py-1">
                • <strong>{fav.title}</strong> ({fav.releaseYear}) - <span className="has-text-danger" style={{cursor: 'pointer'}} onClick={() => toggleFavorite(fav)}>Retirer</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieList;