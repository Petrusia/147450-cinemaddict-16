import {createSiteMenuTemplate} from './view/main-navigation-view.js';
import {createFilmDetailsPopupTemplate} from './view/film-details-popup-view.js';
import {createFilmsListTemplate} from './view/films-list-view.js';
import {createFilmsShowMoreBtnTemplate} from './view/films-show-more-btn-view.js';
import {createFilmsSectionTemplate} from './view/films-section-view.js';
import {createSortTemplate} from './view/sort-view.js';
import {createUserProfileTemplate} from './view/user-profile-view';
import {createFilmCardTemplate} from './view/film-card-view';
import {renderTemplate} from './render.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics-view';

const CARDS_COUNT = 5;

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterStatisticsElement = document.querySelector('.footer__statistics');
const siteFooterElement = document.querySelector('.footer');

renderTemplate(siteHeaderElement, createUserProfileTemplate());
renderTemplate(siteMainElement, createSiteMenuTemplate());
renderTemplate(siteMainElement, createSortTemplate());
renderTemplate(siteMainElement, createFilmsSectionTemplate());
const filmsSection = siteMainElement.querySelector('.films');
renderTemplate(filmsSection, createFilmsListTemplate());
const filmsList = filmsSection.querySelector('.films-list');
const filmsListContainer = filmsList.querySelector('.films-list__container');
for (let i = 0; i < CARDS_COUNT; i++) {
  renderTemplate(filmsListContainer, createFilmCardTemplate());
}
renderTemplate(filmsList, createFilmsShowMoreBtnTemplate());
renderTemplate(siteFooterStatisticsElement, createFooterStatisticsTemplate());
renderTemplate(siteFooterElement, createFilmDetailsPopupTemplate());
