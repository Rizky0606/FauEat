import CONFIG from '../../globals/config';

const createRestDetailTemplate = (restaurant) => `
  <h2 class="rest__title" tabindex="0">${restaurant.name}</h2>
  <img class="rest__poster" tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="rest__info">
  <h3>Information</h3>
    <div class="kota" tabindex="0">
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
    </div>
    <div class="alamat" tabindex="0">
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
    </div>
    <div class="rating" tabindex="0">
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
  </div>
  <div class="rest__overview" tabindex="0">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="menu">
  <div class="listItem">
  <h4>Foods</h4>
    <ul class="listMenu">
      ${restaurant.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
    </ul>
  </div>

  <div class="listItem">
  <h4>Drinks</h4>
    <ul class="listMenu">
      ${restaurant.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
    </ul>
  </div>
  </div>

  <div class="review">
  <h4>Reviews</h4>
    <div class="reviewContainer">
      <div class="list__review-header">
        <p class="list__review-item">Nama</p>
        <p class="list__review-item">Review</p>
        <p class="list__review-item">Tanggal</p>
      </div>
      <div class="reviewItem">
        ${restaurant.customerReviews.map((reviews) => `<p class="itemReviwer">${reviews.name}</li>
        <p class="itemReviwer">${reviews.review}</p>
        <p class="itemReviwer">${reviews.date}</p>`).join('')}
      </div>
    </div>
  </div>
  
  
`;

const createRestItemTemplate = (restaurant) => `
  <div class="rest-item" tabindex="0">
    <div class="rest-item__header">
        <img class="lazyload rest-item__header__poster" alt="${restaurant.name}" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="rest-item__header__rating">
            <p>⭐️<span class="rest-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="rest-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this rest" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this rest" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestItemTemplate,
  createRestDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
