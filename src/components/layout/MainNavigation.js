import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import FavoritesContext from "../../store/favorites-context";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
 const favoritesContext =  useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={styles.badge}>{favoritesContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default MainNavigation;
