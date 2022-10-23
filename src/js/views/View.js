import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();

        this._data = data;
        // Rendering recipe
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const virtualDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = [...virtualDOM.querySelectorAll('*')];
        const currentElements = [...this._parentElement.querySelectorAll('*')];
        newElements.forEach((newElement, i) => {
            const currentElement = currentElements[i];
            // Update change text
            if (!currentElement.isEqualNode(newElement) && newElement.firstChild?.nodeValue.trim() !== '') {
                currentElement.textContent = newElement.textContent;
            }
            // Update change attributes
            if (!newElement.isEqualNode(currentElement)) {
                [...newElement.attributes].forEach(attr => currentElement.setAttribute(attr.name, attr.value));
            }
        });
    }

    renderSpinner() {
        const markup = `<div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        this._clear();
        const markup = `<div class="error">
            <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>`;
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        this._clear();
        const markup = `<div class="message">
            <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>`;
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }
}