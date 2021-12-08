export default class ApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchArticles() {
        const option = {
            headers: {
                Authorization: '563492ad6f91700001000001d82bc9302d2d4120b9de0e03cac4257b',
            }
        };
        const url = `https://api.pexels.com/v1/search?query=${this.query}&page=${this.page}&per_page=12`;
        
        return fetch(url, option)
        .then(r => r.json())
            .then(data => {
                this.incrementPage();
                
                return data.photos;
        });
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
    }
}