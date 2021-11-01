import { useContext } from "react/cjs/react.development";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";


function FavoritePage() {
    const favoritesContext = useContext(FavoritesContext);
    let content;
    if (favoritesContext.totalFavorites == 0) {
        content = <p>You have no favorites yet. Start ading some !</p>
    } else {
        content = <MeetupList meetups={favoritesContext.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritePage;