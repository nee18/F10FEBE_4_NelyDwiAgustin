import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/resIDB';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
