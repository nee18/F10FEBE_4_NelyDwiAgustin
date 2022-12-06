import RestaurantDataIDB from '../../data/resIDB';
import cardComponent from '../templates/resItem';

const unFavorite = () => `
<h2 class="unFavorite">No results found</h2>
`;

const Favorite = {
  async render() {
    return `
      <hero-element></hero-element>
        <section class="content">
          <div class="latest">
            <a href="#/favorite">
              <h1>Wishlist</h1>
            </a>
            <section class="list"></section>        
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataIDB.getAllRestaurants();
    const restaurantList = document.querySelector('section.list');
    if (restaurants.length) {
      restaurants.forEach((item) => {
        restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
      });
    } else {
      restaurantList.insertAdjacentHTML('beforeend', unFavorite());
      console.log('No results found');
    }
  },
};

export default Favorite;
