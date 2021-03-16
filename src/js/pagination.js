import fetchPhotos from './apiService';
import galleryItemTpl from '../templates/gallery-item.hbs';

class SearchQuery {
	constructor() {
		this.searchQuery = '',
		this.page = 1,
		this.galleryRef = document.querySelector('.gallery')
	}

	showPhotos() {
		fetchPhotos(this.searchQuery, this.page)
			.then(({ hits }) => {
				this.items = hits;
				this.incrementPage();
				this.renderSearchResults();
			})
	}

	renderSearchResults() {
	  const markup = galleryItemTpl(this.items);
		this.galleryRef.insertAdjacentHTML('beforeend', markup);
	}
	
	incrementPage() {
		this.page += 1;
	}

	resetPage() {
		this.page = 1;
	}

	clearGallery() {
		this.galleryRef.innerHTML = '';
	}

	get query() {
		return this.searchQuery;
	}

	set query(newQuery) {
		this.searchQuery = newQuery;
		this.resetPage();
		this.clearGallery();
	}
}

export default SearchQuery; 