// Pourcentage de code personnel : 85%
import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    getMovies();
  }, [search]);

  const getMovies = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:5555/movies", {
        params: { search: search.trim() },
      });
      setMovies(response.data);
    } catch (err) {
      console.error("Erreur lors du chargement des films", err);
      setMovies([]);
      setError("Impossible de charger les films. Vérifiez que le serveur est démarré, puis réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const resetSearch = () => setSearch("");

  return (
    <div className="container mt-5 px-3">
      {/* En-tête */}
      <div className="level mb-4">
        <div className="level-left">
          <h1 className="title is-3">🎬 CineScope — Catalogue de Films</h1>
        </div>
        <div className="level-right">
          <button className="button is-light mr-2" onClick={resetSearch}>
            🏠 Accueil
          </button>
          <button
            className="button is-info is-light"
            onClick={() => setShowHelp(!showHelp)}
            aria-expanded={showHelp}
          >
            ℹ️ Aide
          </button>
        </div>
      </div>

      {/* Section À propos / aide */}
      {showHelp && (
        <div className="notification is-info is-light">
          <p><strong>Comment utiliser CineScope</strong></p>
          <ul>
            <li>Tapez un titre ou un genre dans la barre de recherche.</li>
            <li>Cliquez sur « Ajouter aux favoris » pour garder un film.</li>
            <li>Vos favoris apparaissent en bas de la page. Vous pouvez les retirer avec « ✕ Retirer ».</li>
            <li>Le bouton « Accueil » efface la recherche et affiche tous les films.</li>
          </ul>
        </div>
      )}

      {/* Barre de recherche */}
      <div className="field has-addons mb-5">
        <div className="control has-icons-left is-expanded">
          <input
            type="text"
            className="input"
            placeholder="Ex. : Inception ou Action"
            aria-label="Rechercher un film par titre ou par genre"
            maxLength={50}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="icon is-small is-left">🔍</span>
        </div>
        {search && (
          <div className="control">
            <button className="button is-danger is-light" onClick={resetSearch}>
              Effacer
            </button>
          </div>
        )}
      </div>

      {/* Erreur technique, chargement, aucun résultat ou liste */}
      {error ? (
        <div className="notification is-danger is-light has-text-centered my-5" role="alert">
          <p>{error}</p>
          <button className="button is-small is-dark mt-3" onClick={getMovies}>
            Réessayer
          </button>
        </div>
      ) : loading ? (
        <p className="has-text-centered my-5">Chargement des films...</p>
      ) : movies.length === 0 ? (
        <div className="notification is-warning has-text-centered my-5" role="status">
          <p className="is-size-5">Aucun film trouvé pour « {search} ».</p>
          <button className="button is-small is-dark mt-3" onClick={resetSearch}>
            Afficher tous les films
          </button>
        </div>
      ) : (
        <div className="columns is-multiline">
          {movies.map((movie) => {
            const isFav = favorites.some((fav) => fav.id === movie.id);
            return (
              <div className="column is-one-quarter" key={movie.id}>
                <div className="card">
                  <div className="card-content">
                    <p className="title is-4">{movie.title}</p>
                    <p className="subtitle is-6">
                      Genre : {movie.genre} | Année : {movie.releaseYear}
                    </p>
                    <p>⭐ Note : {movie.rating} / 10</p>
                  </div>
                  <footer className="card-footer">
                    <button
                      className={`card-footer-item button is-fullwidth ${isFav ? "is-danger is-light" : "is-success is-light"}`}
                      onClick={() => toggleFavorite(movie)}
                    >
                      {isFav ? "✕ Retirer des favoris" : "🤍 Ajouter aux favoris"}
                    </button>
                  </footer>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Section favoris */}
      <div className="box mt-6 has-background-light">
        <h2 className="title is-5">⭐ Mes Films Favoris ({favorites.length})</h2>
        {favorites.length === 0 ? (
          <p className="has-text-grey">Aucun film dans vos favoris pour l'instant.</p>
        ) : (
          <ul>
            {favorites.map((fav) => (
              <li key={fav.id} className="py-1">
                <strong>{fav.title}</strong> ({fav.releaseYear}){" "}
                <button
                  className="button is-small is-danger is-light ml-2"
                  onClick={() => toggleFavorite(fav)}
                  aria-label={`Retirer ${fav.title} des favoris`}
                >
                  ✕ Retirer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieList;