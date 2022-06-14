const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.rest-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.rest-item');
  I.amOnPage('/');
  I.waitForElement('.rest-item');
  I.seeElement('.rest-item__content a');

  const firstRestaurant = locate('.rest-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.rest-item');
  const likedRestaurantTitle = await I.grabTextFrom('.rest-item__content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
