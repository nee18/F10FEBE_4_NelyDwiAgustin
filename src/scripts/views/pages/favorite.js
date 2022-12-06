import RestaurantDataIDB from '../../data/resIDB';
import cardComponent from '../templates/resItem';

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
    restaurants.forEach((item) => {
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Favorite;
