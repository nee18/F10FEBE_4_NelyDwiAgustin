import RestaurantData from '../../data/resData';
import cardComponent from '../templates/resItem';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <section class="content">
      <div class="latest">
          <h1>Explore Restaurant</h1>
          <div class="list" id="item"></div>
      </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantData.getRestaurantData();
    const restaurantList = document.querySelector('.list');
    restaurants.forEach((item) => {
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default Home;
