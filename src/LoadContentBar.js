import displayWelcomePageData from './DisplayWelcomePageData';
import getZoneQuotes from './GetZenQuotes';
import { welcomePageData, zenPageData } from './pageData.js';

function loadContentBar() {
    console.log("ContentBar Loaded...")
    const body = document.querySelector("body");
    const mainContentContainer = document.createElement('div');
    mainContentContainer.id = "mainContentContainer";
    console.log(displayWelcomePageData(welcomePageData));
    mainContentContainer.appendChild(displayWelcomePageData(welcomePageData));
    body.appendChild(mainContentContainer);

    //TESTING
    console.log(getZoneQuotes());
}

export default loadContentBar;