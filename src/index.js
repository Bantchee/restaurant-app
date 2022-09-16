import { loadBasePage } from './loadBasePage';
import { homePage } from './homePage';
import './style/index.css'
import './style/home.css'

loadBasePage();
const hp = homePage();
hp.render();