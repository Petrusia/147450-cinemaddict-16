/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate)
/* harmony export */ });
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const renderTemplate = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

/***/ }),

/***/ "./src/view/film-card-view.js":
/*!************************************!*\
  !*** ./src/view/film-card-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmCardTemplate": () => (/* binding */ createFilmCardTemplate)
/* harmony export */ });
const createFilmCardTemplate = () => `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">The Dance of Life</h3>
      <p class="film-card__rating">8.3</p>
      <p class="film-card__info">
        <span class="film-card__year">1929</span>
        <span class="film-card__duration">1h 55m</span>
        <span class="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
        <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee
          King (Carroll), end up together on a cold, rainy night at a tr…</p>
        <span class="film-card__comments">5 comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to
        watchlist
      </button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched
      </button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite
      </button>
    </div>
  </article>`;

/***/ }),

/***/ "./src/view/film-details-popup-view.js":
/*!*********************************************!*\
  !*** ./src/view/film-details-popup-view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmDetailsPopupTemplate": () => (/* binding */ createFilmDetailsPopupTemplate)
/* harmony export */ });
const createFilmDetailsPopupTemplate = () => `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">

              <p class="film-details__age">18+</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">The Great Flamarion</h3>
                <p class="film-details__title-original">Original: The Great Flamarion</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">8.9</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">Anthony Mann</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">30 March 1945</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">1h 18m</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">USA</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  <span class="film-details__genre">Drama</span>
                  <span class="film-details__genre">Film-Noir</span>
                  <span class="film-details__genre">Mystery</span></td>
              </tr>
            </table>

            <p class="film-details__film-description">
              The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events
              leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and
              misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a
              beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other
              assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her
              into killing her no good husband during one of their acts.
            </p>
          </div>
        </div>

        <section class="film-details__controls">
          <button type="button" class="film-details__control-button film-details__control-button--watchlist"
                  id="watchlist" name="watchlist">Add to watchlist
          </button>
          <button type="button"
                  class="film-details__control-button film-details__control-button--active film-details__control-button--watched"
                  id="watched" name="watched">Already watched
          </button>
          <button type="button" class="film-details__control-button film-details__control-button--favorite"
                  id="favorite" name="favorite">Add to favorites
          </button>
        </section>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

          <ul class="film-details__comments-list">
            <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
            </span>
              <div>
                <p class="film-details__comment-text">Interesting setting and a good cast</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">Tim Macoveev</span>
                  <span class="film-details__comment-day">2019/12/31 23:59</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
            </span>
              <div>
                <p class="film-details__comment-text">Booooooooooring</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
            </span>
              <div>
                <p class="film-details__comment-text">Very very old. Meh</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
            </span>
              <div>
                <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">Today</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
          </ul>

          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here"
                        name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile"
                     value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio"
                       id="emoji-sleeping" value="sleeping">
                  <label class="film-details__emoji-label" for="emoji-sleeping">
                    <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                  </label>

                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio"
                         id="emoji-puke" value="puke">
                    <label class="film-details__emoji-label" for="emoji-puke">
                      <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                    </label>

                    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio"
                           id="emoji-angry" value="angry">
                      <label class="film-details__emoji-label" for="emoji-angry">
                        <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                      </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;

/***/ }),

/***/ "./src/view/films-list-view.js":
/*!*************************************!*\
  !*** ./src/view/films-list-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsListTemplate": () => (/* binding */ createFilmsListTemplate)
/* harmony export */ });
const createFilmsListTemplate = () => `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
</section>`;

/***/ }),

/***/ "./src/view/films-section-view.js":
/*!****************************************!*\
  !*** ./src/view/films-section-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsSectionTemplate": () => (/* binding */ createFilmsSectionTemplate)
/* harmony export */ });
const createFilmsSectionTemplate = () => `<section class="films">
  </section>`;

/***/ }),

/***/ "./src/view/films-show-more-btn-view.js":
/*!**********************************************!*\
  !*** ./src/view/films-show-more-btn-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsShowMoreBtnTemplate": () => (/* binding */ createFilmsShowMoreBtnTemplate)
/* harmony export */ });
const createFilmsShowMoreBtnTemplate = () => `<button class="films-list__show-more">
        Show more
   </button>`;

/***/ }),

/***/ "./src/view/footer-statistics-view.js":
/*!********************************************!*\
  !*** ./src/view/footer-statistics-view.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooterStatisticsTemplate": () => (/* binding */ createFooterStatisticsTemplate)
/* harmony export */ });
const createFooterStatisticsTemplate = () => `<p>
       130 291 movies inside
   </p>`;

/***/ }),

/***/ "./src/view/main-navigation-view.js":
/*!******************************************!*\
  !*** ./src/view/main-navigation-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSiteMenuTemplate": () => (/* binding */ createSiteMenuTemplate)
/* harmony export */ });
const createSiteMenuTemplate = () => `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSortTemplate": () => (/* binding */ createSortTemplate)
/* harmony export */ });
const createSortTemplate = () => `<ul class="sort">
    <li><a href="#" class="sort__button">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
  </ul>`;

/***/ }),

/***/ "./src/view/user-profile-view.js":
/*!***************************************!*\
  !*** ./src/view/user-profile-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUserProfileTemplate": () => (/* binding */ createUserProfileTemplate)
/* harmony export */ });
const createUserProfileTemplate = () => `<section class="header__profile profile">
     <p class="profile__rating">Movie Buff</p>
     <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
   </section>`;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_main_navigation_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/main-navigation-view.js */ "./src/view/main-navigation-view.js");
/* harmony import */ var _view_film_details_popup_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/film-details-popup-view.js */ "./src/view/film-details-popup-view.js");
/* harmony import */ var _view_films_list_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/films-list-view.js */ "./src/view/films-list-view.js");
/* harmony import */ var _view_films_show_more_btn_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films-show-more-btn-view.js */ "./src/view/films-show-more-btn-view.js");
/* harmony import */ var _view_films_section_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/films-section-view.js */ "./src/view/films-section-view.js");
/* harmony import */ var _view_sort_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/sort-view.js */ "./src/view/sort-view.js");
/* harmony import */ var _view_user_profile_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/user-profile-view */ "./src/view/user-profile-view.js");
/* harmony import */ var _view_film_card_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/film-card-view */ "./src/view/film-card-view.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _view_footer_statistics_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/footer-statistics-view */ "./src/view/footer-statistics-view.js");










const CARDS_COUNT = 5;
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterStatisticsElement = document.querySelector('.footer__statistics');
const siteFooterElement = document.querySelector('.footer');
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(siteHeaderElement, (0,_view_user_profile_view__WEBPACK_IMPORTED_MODULE_6__.createUserProfileTemplate)());
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(siteMainElement, (0,_view_main_navigation_view_js__WEBPACK_IMPORTED_MODULE_0__.createSiteMenuTemplate)());
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(siteMainElement, (0,_view_sort_view_js__WEBPACK_IMPORTED_MODULE_5__.createSortTemplate)());
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(siteMainElement, (0,_view_films_section_view_js__WEBPACK_IMPORTED_MODULE_4__.createFilmsSectionTemplate)());
const filmsSection = siteMainElement.querySelector('.films');
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(filmsSection, (0,_view_films_list_view_js__WEBPACK_IMPORTED_MODULE_2__.createFilmsListTemplate)());
const filmsList = filmsSection.querySelector('.films-list');
const filmsListContainer = filmsList.querySelector('.films-list__container');

for (let i = 0; i < CARDS_COUNT; i++) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(filmsListContainer, (0,_view_film_card_view__WEBPACK_IMPORTED_MODULE_7__.createFilmCardTemplate)());
}

(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(filmsList, (0,_view_films_show_more_btn_view_js__WEBPACK_IMPORTED_MODULE_3__.createFilmsShowMoreBtnTemplate)());
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(siteFooterStatisticsElement, (0,_view_footer_statistics_view__WEBPACK_IMPORTED_MODULE_9__.createFooterStatisticsTemplate)());
(0,_render_js__WEBPACK_IMPORTED_MODULE_8__.renderTemplate)(siteFooterElement, (0,_view_film_details_popup_view_js__WEBPACK_IMPORTED_MODULE_1__.createFilmDetailsPopupTemplate)());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map