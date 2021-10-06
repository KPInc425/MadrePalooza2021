import loadNavBar from './LoadNavBar.js';
import loadContentBar from './LoadContentBar.js';
import loadFooterBar from './LoadFooterBar.js';
import addNavEventListeners from './AddNavEventListeners.js';
import { welcomePageData } from './PageData.js';

import './reset.css';
import './style.css';


const app = (() => {
    console.log("Loading...");
        
    const firstLoad = (() => {
        loadNavBar();
        loadContentBar(welcomePageData);
        loadFooterBar(false);

        addNavEventListeners();
    })();

    

})();

