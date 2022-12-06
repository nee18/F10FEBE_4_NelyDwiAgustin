import API_ENDPOINT from '../../global/api-endpoint';

const postItem = (resItem) => `
  <div class="list_item">
    <img class="list_item_thumb lazyload" data-src="${API_ENDPOINT.RESTAURANT_IMAGE + resItem.pictureId}" alt="${resItem.name}" title="${resItem.name}">
    <div class="city">📍${resItem.city}</div>
    <div class="list_item_content">
      <p class="list_item_rating">
        Rating : ⭐${resItem.rating}
      </p>
      <h1 class="list_item_title"><a href="#/detail/${resItem.id}">${resItem.name}</a></h1>
      <div class="list_item_desc">${resItem.description.slice(0, 500)}...</div>
    </div>
  </div>
`;

export default postItem;
