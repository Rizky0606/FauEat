import TheRestDbSource from '../../data/faueatdb-source';
import { createRestItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran yang Tersedia</h2>
        <div id="restaurants" class="rests">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const rests = await TheRestDbSource.listRest();
    const restContainer = document.querySelector('#restaurants');
    rests.forEach((restaurant) => {
      restContainer.innerHTML += createRestItemTemplate(restaurant);
    });
  },
};

export default Home;
