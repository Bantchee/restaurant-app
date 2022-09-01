import { load } from './basicSite';
import './style/index.css'

console.log('Hello Restaurant');

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

load();