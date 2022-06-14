import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRest, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRest = favoriteRest;
    this._rest = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._rest;

    if (await this._isRestExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestExist(id) {
    const restaurant = await this._favoriteRest.getRest(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRest.putRest(this._rest);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRest.deleteRest(this._rest.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
