function displayPageData(inputData) {
    console.log(inputData);
    const contentContainer1 = document.createElement('div');
    contentContainer1.id = "contentContainer1";
    contentContainer1.classList.add('card');

    const title = document.createElement('h1');
    title.textContent = inputData.title;

    const byLine = document.createElement('h3');
    byLine.textContent = inputData.byLine;

    const mainContent = document.createElement('p');
    mainContent.textContent = inputData.mainContent;



    contentContainer1.appendChild(title);
    contentContainer1.appendChild(byLine);

    if (inputData.hasOwnProperty('mainContentImg')) {
        console.log('mainContent has image');
        const mainContentImg = document.createElement('img');
        mainContentImg.src = inputData.mainContentImg;
        mainContentImg.alt = "mainContentImg Here";
        contentContainer1.appendChild(mainContentImg);
    }

    contentContainer1.appendChild(mainContent);

    

    if (inputData.hasOwnProperty('mainContent2')){
        console.log("has mainContent2");
        // console.log(inputData.mainContentImg2);

        if (inputData.hasOwnProperty('mainContentImg2')) {
            console.log('mainContent has image2');
            const mainContentImg2 = document.createElement('img');
            mainContentImg2.src = inputData.mainContentImg2;
            mainContentImg2.alt = "mainContentImg2 Here";
            contentContainer1.appendChild(mainContentImg2);
        }

        const mainContent2 = document.createElement('p');
        mainContent2.textContent = inputData.mainContent2;
        contentContainer1.appendChild(mainContent2);
        
        if (inputData.hasOwnProperty('mainContent3')){
            console.log("has mainContent3");

            if (inputData.hasOwnProperty('mainContentImg3')) {
                console.log('mainContent has image3');
                const mainContentImg3 = document.createElement('img');
                mainContentImg3.src = inputData.mainContentImg3;
                mainContentImg3.alt = "mainContentImg Here3";
                contentContainer1.appendChild(mainContentImg3);
            }

            const mainContent3 = document.createElement('p');
            mainContent3.textContent = inputData.mainContent3;
            contentContainer1.appendChild(mainContent3);
        }
    }

    

    

    return contentContainer1;
}

export default displayPageData;