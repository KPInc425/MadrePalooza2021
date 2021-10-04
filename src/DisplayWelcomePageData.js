function displayWelcomePageData(inputData) {
    const contentContainer1 = document.createElement('div');
    contentContainer1.id = "contentContainer1";

    const title = document.createElement('h1');
    title.textContent = inputData.title;

    const byLine = document.createElement('h3');
    byLine.textContent = inputData.byLine;

    const mainContent = document.createElement('p');
    mainContent.textContent = inputData.mainContent;

    contentContainer1.appendChild(title);
    contentContainer1.appendChild(byLine);
    contentContainer1.appendChild(mainContent)

    return contentContainer1;
}

export default displayWelcomePageData;