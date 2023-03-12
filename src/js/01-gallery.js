import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryWrap = document.querySelector('.gallery');

const galleryItemMarkup = galleryItems.map(({preview, original, description}) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');

galleryWrap.innerHTML = galleryItemMarkup;

galleryWrap.addEventListener('click', hendleGalleryClick);

function hendleGalleryClick (e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);

instance.show();

galleryWrap.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    instance.close();
  }
});
};