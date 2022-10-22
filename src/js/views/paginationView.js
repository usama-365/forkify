import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');
    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        if (this._data.page === 1) {
            // Page 1, and there are no other pages
            if (numPages > 1) {
                return this._markupRightButton(2);
            }
            // Page 1, and there are no other pages
            else {

            }
        }
        // Last page
        else if (this._data.page === numPages) {
            return this._markupLeftButton(numPages - 1);
        }
        // Other pages
        else {
            return this._markupLeftButton(this._data.page - 1) + this._markupRightButton(this._data.page + 1);
        }
    }

    _markupLeftButton(pageNumber) {
        return `<button class="btn--inline pagination__btn--prev" data-go-to="${pageNumber}">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${pageNumber}</span>
      </button>`;
    }

    _markupRightButton(pageNumber) {
        return `<button class="btn--inline pagination__btn--next" data-go-to="${pageNumber}">
        <span>Page ${pageNumber}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    addHandlerClick(handle) {
        // Event delegation
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goTo;

            handle(goToPage);
        });
    }

}

export default new PaginationView();