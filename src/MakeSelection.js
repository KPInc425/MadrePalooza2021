import getZoneQuotes from './GetZenQuotes';
import randomQuoteSelection from './RandomQuoteSelection.js';

const makeSelection = async () => {
    //NEED A CHECK HERE TO MAKE SURE WE DON'T CALL THE FUNCTION ON EVERY REFRESH
    const zenQuotes = await getZoneQuotes();

    const zenQuoteChoice = randomQuoteSelection(zenQuotes);

    console.log(zenQuoteChoice);

    return zenQuoteChoice
}

export default makeSelection;