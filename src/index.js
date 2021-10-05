import loadNavBar from './LoadNavBar.js';
import loadContentBar from './LoadContentBar.js';
import loadFooterBar from './LoadFooterBar.js';
import { welcomePageData, zenPageDataFunction } from './pageData.js';

import makeSelection from './MakeSelection.js';

import './reset.css';
import './style.css';


const app = (() => {
    console.log("Loading...");
    
    //This FINALLY WORKED!
    const selected = makeSelection();
    //THIS WILL BE USED IN AN ADDLISTENER, CHANGE THE FUNCTION NAME
    const firstLoad = (() => {
        loadNavBar();
        //NEEDED TO USE THE THEN METHOD TO CALL THE FUNCTION WITH NEEDED INPUT
        selected.then(function(data) {
            console.log(data);
            const selectedQuote = data.selectedQuote;
            const quoteAuthor = data.quoteAuthor;

            loadContentBar(zenPageDataFunction(selectedQuote,quoteAuthor));
        })
        loadFooterBar();
    })();
    
    // const firstLoad = (() => {
    //     loadNavBar();
    //     // console.log(zenPageDataFunction());
    //     loadContentBar(welcomePageData);
    //     loadFooterBar();
    // })();

})();

