import fetchPhotos from './apiService';

class SearchQuery {
	constructor() {
		this.searchQuery = '',
		this.page = 1
	}

	getPhotos() {
		fetchPhotos(this.searchQuery, this.page)
			.then(({hits}) => {
				this.incrementPage();
				return hits;
			})
	}

	incrementPage() {
		this.page += 1;
	}

	resetPage() {
		this.page = 1;
	}

	get query() {
		return this.searchQuery;
	}

	set query(newQuery) {
		this.searchQuery = newQuery;
		this.resetPage;
	}
}

export default SearchQuery; 