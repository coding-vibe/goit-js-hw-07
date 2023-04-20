import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const makeGallery = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href=${original}>
  <img class="gallery__image"
  src=${preview} alt="${description}" />
  </a>
  </li>
  `
};
const makeGalleryImages = galleryItems
  .map(makeGallery)
  .join('');

galleryList.insertAdjacentHTML('afterbegin', makeGalleryImages);

new SimpleLightbox('.gallery a', {
  'captionsData': 'alt',
  'captionDelay': '250ms'
});