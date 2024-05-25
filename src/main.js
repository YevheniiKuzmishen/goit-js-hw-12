import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderImage } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

const form = document.querySelector('.form');
const imagesFetch = document.querySelector('.imagesFetch');
const loader = document.querySelector('.loader');
const btnMore = document.querySelector('.btn');
const formInput = document.querySelector('.form-input');
let page = 1;

const displayError = (message) => {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
};

const handleData = (data, inputValue) => {
  if (data.length === 0) {
    displayError('Sorry, there are no images matching your search query. Please try again!');
    btnMore.style.display = 'none';
    return false;
  }
  renderImage(data.hits);
  btnMore.style.display = data.hits.length < 15 ? 'none' : 'block';
  if (data.hits.length < 15) {
    displayError("We're sorry, there are no more posts to load");
  }
  btnMore.dataset.inputValue = inputValue;
  return true;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputValue = formInput.value.trim();
  imagesFetch.innerHTML = '';
  btnMore.style.display = 'none';

  if (inputValue === '') {
    displayError('Enter search images value');
    return;
  }

  try {
    loader.style.display = 'block';
    page = 1;
    const data = await fetchImg(inputValue, page);
    if (handleData(data, inputValue)) {
      loader.style.display = 'none';
    }
  } catch (error) {
    displayError('Something went wrong. Please try again!');
    loader.style.display = 'none';
  }

  formInput.value = '';
});

btnMore.addEventListener('click', async (e) => {
  e.preventDefault();
  page++;
  loader.style.display = 'block';

  try {
    const inputValue = e.currentTarget.dataset.inputValue;
    const data = await fetchImg(inputValue, page);
    if (handleData(data, inputValue)) {
      loader.style.display = 'none';
      const imgBoxes = document.querySelectorAll('.imagesFetch-item');
      const imgBoxHeight = imgBoxes[0].getBoundingClientRect();
      window.scrollBy({
        top: imgBoxHeight.height * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    displayError('Something went wrong. Please try again!');
    loader.style.display = 'none';
  }
});
