function loadFooterBar(isZenPage) {
    console.log("Footerbar Loaded...")
    console.log(isZenPage);
    const body = document.querySelector("body");
    const footerContainer = document.createElement('div');
    footerContainer.id = "footerContainer";

    const copyRight = document.createElement('p');
    copyRight.textContent = "Copyright © 2021 KPInc425. All Rights Reserved";
    copyRight.id = "copyRight";

    footerContainer.appendChild(copyRight);

    if (isZenPage == true) {
        const containerZenAttribution = document.createElement('div');
        containerZenAttribution.id = "containerZenAttribution";
        
        const pZenAttribution = document.createElement('p');
        pZenAttribution.textContent = "Inspirational quotes provided by:";
        
        const linkZenAttribution = document.createElement('a');
        linkZenAttribution.textContent = "ZenQuotes API";
        linkZenAttribution.href = "https://zenquotes.io/";

        containerZenAttribution.appendChild(pZenAttribution);
        containerZenAttribution.appendChild(linkZenAttribution);
        footerContainer.appendChild(containerZenAttribution);
    }
    body.appendChild(footerContainer);

}

export default loadFooterBar;