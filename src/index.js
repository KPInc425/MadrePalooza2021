import loadNavBar from './LoadNavBar.js';
import loadContentBar from './LoadContentBar.js';
import loadFooterBar from './LoadFooterBar.js';
import './reset.css';
import './style.css';


const app = (() => {
    console.log("Loading...");
    loadNavBar();
    loadContentBar();
    loadFooterBar();
})();

