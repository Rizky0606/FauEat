const assert = require('assert');

Feature('Unliking Resto');
Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.rest-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.content__heading');
  I.amOnPage('/');
  I.seeElement('.rest-item__content a');

  const firstRestaurant = locate('.rest-item__content a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.rest-item');

  const unlikedRestaurantsTitles = await I.grabTextFrom('.rest-item__content a');
  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);

  I.seeElement('.rest-item__content a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.rest-item');
});
