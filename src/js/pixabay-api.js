const API_KEY = '47923486-1dfdb5b4845d820a441892c9b';
const BASE_URL = 'https://pixabay.com/api/';

// Функція для запиту з Pixabay
export async function fetchImages(query, page = 1, perPage = 12) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  return response.json();
}