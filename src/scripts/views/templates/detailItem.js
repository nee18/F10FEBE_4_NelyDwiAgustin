import API_ENDPOINT from '../../global/api-endpoint';

const detailComponent = (resto) => `
  <article class="description">
    <div class="desc-content">
      <div class="thumbnail">
        <div class="resto-img">
          <img src="${API_ENDPOINT.RESTAURANT_IMAGE}${resto.pictureId}" alt="${resto.name}">
        </div>
      </div>
      <h1>${resto.name}</h1>
      <p>${resto.description}</p>
    </div>
  </article>

  <section class="info">
    <article class="main-info">
      <h2>Informasi</h2>
      <h3>Alamat</h3>
      <p>${resto.address}</p>
      <h3>Kota</h3>
      <p>📍${resto.city}</p>
      <h3>Rating</h3>
      <p> ⭐${resto.rating}</p>
    </article>
    
    <article class="resto-menus">
      <h2>List Menu</h2>
      <div class="menus">
        <div>
          <h3>Makanan</h3>
            <ul>
              ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div>
          <h3>Minuman</h3>
            <ul>
              ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
        </div>
      </div>
    </article>
  </section>
`;

export default detailComponent;
