function displayImgPageData(inputData) {
    console.log(inputData);
    const contentContainer1 = document.createElement('div');
    contentContainer1.id = "contentContainer1";
    contentContainer1.classList.add('card');

    const title = document.createElement('h1');
    title.textContent = inputData.title;

    const byLine = document.createElement('h3');
    byLine.textContent = inputData.byLine;

    const imgContainer = document.createElement('div');
    imgContainer.id = "imgContainer";

    const firstImg = document.createElement('img');
    firstImg.src = inputData.firstImg;
    firstImg.id = "firstImg";

    const secondImg = document.createElement('img');
    secondImg.src = inputData.secondImg;
    secondImg.id = "secondImg";


    imgContainer.appendChild(secondImg);
    imgContainer.appendChild(firstImg);  
    

    contentContainer1.appendChild(title);
    contentContainer1.appendChild(byLine);
    contentContainer1.appendChild(imgContainer);

      


    return contentContainer1;
}

export default displayImgPageData;