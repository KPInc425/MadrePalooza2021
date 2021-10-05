import displayPageData from './DisplayWelcomePageData';


function loadContentBar(pageData) {
    console.log("ContentBar Loaded...")
    const body = document.querySelector("body");
    const mainContentContainer = document.createElement('div');
    mainContentContainer.id = "mainContentContainer";
    // console.log(displayPageData(pageData));
    mainContentContainer.appendChild(displayPageData(pageData));
    body.appendChild(mainContentContainer);

    // //TESTING
    // console.log(getZoneQuotes());
}

export default loadContentBar;