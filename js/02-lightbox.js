import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionPosition: 'top'});

function createGalleryCardMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `
  })
    .join('');
}

