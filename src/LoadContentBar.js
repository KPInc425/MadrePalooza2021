import displayImgPageData from './DisplayImgPageData';
import displayPageData from './DisplayPageData';
import loadBirthdayMessage from './LoadBirthdayMessage';


function loadContentBar(pageData) {
    console.log("ContentBar Loaded...")
    const body = document.querySelector("body");
    const mainContentContainer = document.createElement('div');
    mainContentContainer.id = "mainContentContainer";
    mainContentContainer.classList.add('card');
    // console.log(displayPageData(pageData));
    mainContentContainer.appendChild(loadBirthdayMessage());
    if (pageData.hasOwnProperty('firstImg')) {
        mainContentContainer.appendChild(displayImgPageData(pageData))
    } else {
        mainContentContainer.appendChild(displayPageData(pageData));
    }
    
    body.appendChild(mainContentContainer);

    // //TESTING
    // console.log(getZoneQuotes());
}

export default loadContentBar;