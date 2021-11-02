import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryCardClick)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </div>
  `
  })
    .join('');
}

function onGalleryCardClick(evt) {
  evt.preventDefault();

  const isGalleryCardEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryCardEl) {
    return;
  }
  const bigPicture = evt.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${bigPicture}" width="800" height="600">
  `)
  instance.show()
};
