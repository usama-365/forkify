import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class AppRecipeView extends View {
    _parentElement = document.querySelector('.upload');
    _windowElement = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    _message = 'Recipe was successfully uploaded';

    constructor() {
        super();
        this._addHandlerShowWindow();
        this._addHandlerCloseWindow();
    }

    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }

    _addHandlerCloseWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    }

    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._windowElement.classList.toggle('hidden');
    }

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            const dataArr = [...new FormData(this)]; // this refers to the form which has caused this event
            const data = Object.fromEntries(dataArr); // Takes array of entries and converts to objects
            handler(data);
        });
    }

    _generateMarkup() {

    }
}

export default new AppRecipeView();