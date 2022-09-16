import { loadBasePage, bindBasePage } from './loadBasePage';
import { homePage } from './homePage';
import { menuPage } from './menuPage';
import { aboutPage } from './aboutPage';
import { contactPage } from './contactPage';
import './style/index.css'
import './style/home.css'

loadBasePage();
const hp = homePage();
const mp = menuPage();
const ap = aboutPage();
const cp = contactPage();
hp.render();
bindBasePage(hp, mp, ap, cp);