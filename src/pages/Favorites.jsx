import "../css/Favorite.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
        <div className = "favorites">
    <h2>Your Favorite Movies</h2>
        <div className="movies-grid">
        {favorites.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
    </div>
   );
 }


  return (
    <div className="favorites-empty">
      <h2>Your favorites list is empty</h2>
      <p>Start adding movies to your favorites list to see them here.</p>
    </div>
  );
}

export default Favorites;
