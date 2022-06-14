import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestIdb from '../../src/scripts/data/favoriterest-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRest: FavoriteRestIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
