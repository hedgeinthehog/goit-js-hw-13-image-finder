import SearchQuery from './js/pagination';
import './styles.css';

const searchFormRef = document.querySelector('#search-form');
const searchQuery = new SearchQuery;

searchFormRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	searchQuery.query = e.currentTarget.elements.query.value;
	if (searchQuery === '') return;

	searchQuery.showPhotos();
}