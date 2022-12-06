import RestaurantData from '../../data/resData';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import detailComponent from '../templates/detailItem';
import reviewComponent from '../templates/reviewItem';

const Detail = {
  async render() {
    return `
        <div class="resto-details" id="list">
          <section class="resto-info"></section>
          <section class="resto-review"></section>
          <div id="likeButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.detailRestaurantData(url.id);
    const container = document.querySelector('section.resto-info');
    container.innerHTML = detailComponent(restaurant);
    reviewComponent(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
