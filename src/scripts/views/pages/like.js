import FavoriteRestIdb from '../../data/favoriterest-idb';
import { createRestItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="restaurants" class="rests">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestIdb.getAllRests();
    const restsContainer = document.querySelector('#restaurants');
    restaurant.forEach((rest) => {
      restsContainer.innerHTML += createRestItemTemplate(rest);
    });
  },
};

export default Like;
