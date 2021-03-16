import { BASE_URL, API_KEY } from './settings/apiVariables';

function fetchPhotos(query, page) {
	return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`)
		.then(response => response.json());
}

export default fetchPhotos;