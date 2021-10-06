import loadNavBar from './LoadNavBar.js';
import loadContentBar from './LoadContentBar.js';
import loadFooterBar from './LoadFooterBar.js';
import { welcomePageData, zenPageDataFunction, menuPageDataFunction, willowImgData } from './PageData.js';
import makeZenSelection from './MakeZenSelection.js';

function addNavEventListeners() {
    const body = document.querySelector("body");
    
    const btnWelcome = document.getElementById('btnWelcome');
    btnWelcome.addEventListener('click', () => {
        console.log("Click!");
        body.innerHTML = "";
        loadNavBar();
        loadContentBar(welcomePageData);
        loadFooterBar(false);
        //THIS MIGHT NEED TO BE REMOVED AND CALLED OUTSIDE
        addNavEventListeners();
    });

    const btnZenQuote = document.getElementById('btnZenQuote');
    btnZenQuote.addEventListener('click', () => {
        console.log('Click!');
        body.innerHTML = "";
        //This FINALLY WORKED!
        const selected = makeZenSelection();        
        loadNavBar();
        //NEEDED TO USE THE THEN METHOD TO CALL THE FUNCTION WITH NEEDED INPUT
        selected.then(function(data) {
            console.log(data);
            const selectedQuote = data.selectedQuote;
            const quoteAuthor = data.quoteAuthor;

            loadContentBar(zenPageDataFunction(selectedQuote,quoteAuthor));
            loadFooterBar(true);
            addNavEventListeners();
        })
    });

    const btnMenu = document.getElementById('btnMenu');
    btnMenu.addEventListener('click', () => {
        body.innerHTML = "";
        loadNavBar();
        loadContentBar(menuPageDataFunction());
        loadFooterBar(false);
        addNavEventListeners();
    })

    const btnWillowsPresent = document.getElementById('btnWillowsPresent');
    btnWillowsPresent.addEventListener('click', () => {
        console.log('click!');
        body.innerHTML = "";
        loadNavBar();
        loadContentBar(willowImgData);
        loadFooterBar(false);
        addNavEventListeners();

    })

    const btnPastYears = document.getElementById('btnPastYears');
    btnPastYears.addEventListener('click', () => {
        window.location.href = "https://shamralee.xyz";
        console.log('click');
    })




}

export default addNavEventListeners;