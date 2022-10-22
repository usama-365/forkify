class SearchView {
    _parentElement = document.querySelector('.search');
    getQuery() {
        return this._parentElement.querySelector('.search__field').value;
    }
    addHandlerSearch(handlerFunction) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handlerFunction();
        });
    }

    clearInput() {
        this._parentElement.querySelector('.search__field').value = '';
    }
}

export default new SearchView();