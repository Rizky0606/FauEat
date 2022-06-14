import UrlParser from '../../routes/url-parser';
import TheRestDbSource from '../../data/faueatdb-source';
import { createRestDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="rest" class="rest"></div>
      <div id="likeButtonContainer" tabindex="0"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestDbSource.detailRest(url.id);
    const restContainer = document.querySelector('#rest');
    restContainer.innerHTML = createRestDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
