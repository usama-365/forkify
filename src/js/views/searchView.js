class SearchView {
    #parentElement = document.querySelector('.search');
    getQuery() {
        return this.#parentElement.querySelector('.search__field').value;
    }
    addHandlerSearch(handlerFunction) {
        this.#parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handlerFunction();
        });
    }

    clearInput() {
        this.#parentElement.querySelector('.search__field').value = '';
    }
}

export default new SearchView();