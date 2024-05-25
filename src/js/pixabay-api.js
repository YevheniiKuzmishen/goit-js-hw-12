import axios from 'axios';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// let page = 1;
export async function fetchImg(inputValue, page) {
  const APIKEY = '43947691-9c404bec92b20484d2e4a6bea';
  const searchParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    per_page: 15,
    page: page,
  });

  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${APIKEY}&q=${inputValue}&${searchParams}`
  );

  return data;
}
