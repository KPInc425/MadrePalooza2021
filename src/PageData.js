import birthdayMenuData from './BirthdayMenuData.js';
import cutePicPresent from './media/gift_cute.png';
import scaryPicPresent from './media/gift_scary.png';

const welcomePageData = {
    title: "Welcome",
    byLine: "To the Greatest mother anyone can ask for...",
    mainContent: `Happy Birthmas Madre! I hope you have the most splendiferious
                 day, week, month, YEAR!`,
    mainContent2: `I love you so very much and I wish I could show you more! I 
                   am so very greatful to have had you as the mother that raised me.
                   You have always been there for me and have always been, not only 
                   my mother, but one of my best friends.`,
    mainContent3: `I just want you to know I love you and I will also always be 
                   there for you as well!`,
}

const zenPageDataFunction = (selectedQuote, quoteAuthor) => {
   
    const zenPageData = {
        title: "Zen Quote",
        byLine: "Time to get your Zen on...",
        // mainContent: "Testing",
        mainContent: selectedQuote,
        mainContent2: `Pondered by : ${quoteAuthor}`,
    }
    
    return zenPageData;
}

const menuPageDataFunction = () => {

    const menuBirthdayArray = birthdayMenuData;
    // console.log(menuBirthdayArray);

    const menuPageData = {
        title: "Birthday Menu",
        byLine: "Who's Hungry?!?!",
        mainContentImg: 'https://i.imgur.com/GxKsC9b.png',
        mainContent: `First up is ${menuBirthdayArray[0].name} 
                     which includes ${menuBirthdayArray[0].description}`,
        mainContentImg2: 'https://i.imgur.com/iVZ1dop.png',
        mainContent2: `Later in the day we will be having 
                      ${menuBirthdayArray[1].name} which will be embodied by
                      ${menuBirthdayArray[1].description}`,
        mainContentImg3: 'https://i.imgur.com/uR8Gm1w.png',
        mainContent3: `All this will hopefully be followed up
        with some JackBox Party Packs with the family for Game Night!`,
    };

    console.log(menuPageData);
    return menuPageData;
}

const willowImgData = {
    title: "Willow's Gift",
    byLine: "Quote: She's sweet and amazing!",
    firstImg: cutePicPresent,
    secondImg: scaryPicPresent,
}

export {
    welcomePageData,
    zenPageDataFunction,
    menuPageDataFunction,
    willowImgData,
}