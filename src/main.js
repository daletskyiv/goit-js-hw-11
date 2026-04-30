import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

export const refs = {
  searchForm: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

function onSearchFormSubmit(event) {
  event.preventDefault();

  const userQuery = event.target.elements.search_text.value.trim();

  if (!userQuery) {
    iziToast.error({
      message: 'The search field must be filled in!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(userQuery)
    .then(response => {
      if (response.totalHits === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(response.hits);
    })
    .catch(err => {
      console.log(err);

      iziToast.error({
        message: `${err}`,
        position: 'topRight',
      });
    })
    .finally(() => hideLoader());

  refs.searchForm.reset();
}

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
