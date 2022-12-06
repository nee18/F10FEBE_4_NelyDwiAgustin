const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.amOnPage('/#/favorite');
});

Scenario('1 showing empty liked restaurant', async ({ I }) => {
  I.see('No results found', '.unFavorite');
});

Scenario('2 liking one restaurant', async ({ I }) => {
  I.see('No results found', '.unFavorite');

  I.amOnPage('/');

  I.seeElement('.list_item');

  const firstRestaurant = locate('.list_item .list_item_title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('.list_item .list_item_title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');

  const likedRestaurantName = await I.grabTextFrom('.list_item .list_item_title a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('3 unliking one restaurant', async ({ I }) => {
  I.see('No results found', '.unFavorite');

  I.amOnPage('/');

  I.seeElement('.list_item');

  const firstRestaurant = locate('.list_item .list_item_title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('.list_item .list_item_title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');

  const likedRestaurantName = await I.grabTextFrom('.list_item .list_item_title a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(locate('.list_item .list_item_title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('No results found', '.unFavorite');
});
