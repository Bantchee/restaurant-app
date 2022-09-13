import { loadBasePage } from './loadBasePage';
import { homePage } from './homePage';
import './style/index.css'

loadBasePage();
const hp = homePage();
hp.render();