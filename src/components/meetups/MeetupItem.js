import { useContext } from "react";

import styles from "./MeetupItem.module.css";
import Card from '../ui/Card';
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.isFavorite(props.meetup.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.meetup.id);
    }
    else {
      favoritesContext.addFavorite(props.meetup);
    }

  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.meetup.image} alt={props.meetup.title}></img>
        </div>
        <div className={styles.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Unfavorite' : 'To Favorites' }</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
