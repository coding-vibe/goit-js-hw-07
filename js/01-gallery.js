import { galleryItems } from './gallery-items.js';

const makeGallery = ({ preview, original, description }) => {
    return `
  <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
  `;
};

const galleryList = document.querySelector('.gallery');

const makeGalleryImages = galleryItems
  .map(makeGallery)
  .join('');

galleryList.insertAdjacentHTML('afterbegin', makeGalleryImages);

let openModal;

const onClickGallery = event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    };

    return onOpenModal(event);

};

const onOpenModal = event => {
    openModal = basicLightbox.create(
        `
     <div class="modal">
    <img
      class="gallery__original__image"
      src=${event.target.dataset.source}
      data-source=${event.target.dataset.source}
      alt=${event.target.alt}/>
   </div>
   `, onCloseModal);
    window.addEventListener('keydown', onEscKeyPress); openModal.show();
};

galleryList.addEventListener('click', onClickGallery);

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onCloseModal();
    };
};

const onCloseModal = () => {
    window.removeEventListener('keydown', onEscKeyPress);
    openModal.close();  
};
