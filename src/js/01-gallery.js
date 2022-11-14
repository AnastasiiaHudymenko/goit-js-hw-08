import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

function createGalleryCardEl(galleres) {
  return galleres
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"/>
            </a>
           </div> `;
    })
    .join('');
}
const galleryCard = createGalleryCardEl(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryCard);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
