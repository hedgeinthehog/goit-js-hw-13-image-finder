import fetchPhotos from './apiService';
import galleryItemTpl from '../templates/gallery-item.hbs';
import createNotification from './notification';

class SearchQuery {
	constructor() {
		this.searchQuery = '',
		this.page = 1,
		this.items = [],
		this.galleryRef = document.querySelector('.gallery')
	}

	showPhotos() {
		fetchPhotos(this.searchQuery, this.page)
			.then(({ hits }) => {
				this.items = hits;
				if (this.page === 1 && this.items.length === 0) {
					createNotification('No results found');
				} else {
					this.renderSearchResults();
					this.incrementPage();
					if (this.items.length < 12) {
						createNotification('These are all images we have');
					}
				}
			}
		)
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