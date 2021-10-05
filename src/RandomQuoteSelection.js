//POSSIBLY CHANGE THIS TO RANDOM FUNCTION TO SIMPLIFY

function randomQuoteSelection(inputArray) {
    // console.log("RandomQuoteSelection loaded...");
    // console.log("What is this? " + inputArray);
    let randomSelection = Math.floor(Math.random() * (50 - 1) + 1);
    // console.log(randomSelection);

    const selectedQuote = inputArray[randomSelection].q;
    const quoteAuthor = inputArray[randomSelection].a;

    return {
        selectedQuote,
        quoteAuthor,
    }
}

export default randomQuoteSelection;