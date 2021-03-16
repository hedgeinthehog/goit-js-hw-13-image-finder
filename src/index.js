import SearchQuery from './js/pagination';
import './styles.css';

const sentinelRef = document.querySelector('#infinite-scroll-sentinel');
const searchFormRef = document.querySelector('#search-form');
const searchQuery = new SearchQuery;

searchFormRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
	const newQuery = e.currentTarget.elements.query.value;
	if (newQuery === '') return;
	searchQuery.query = newQuery;
	searchQuery.showPhotos();
}

// INFINITE SCROLL

function onEntry(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting && searchQuery.query !== '' && searchQuery.page !== 1) {
			searchQuery.showPhotos();
		}
	})
};

const options = {
	rootMargin: '250px'
};

const observer = new IntersectionObserver(onEntry, options);

observer.observe(sentinelRef);