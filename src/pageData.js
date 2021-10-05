



const welcomePageData = {
    title: "Welcome",
    byLine: "To the Greatest mother anyone can ask for...",
    mainContent: "Happy Birthmas Madre! I hope you have the most splendiferious " +
                 "day, week, month, YEAR! I love you so very much and I wish I " +
                 "could show you more! I am so very greatful to have had you as " +
                 "the mother that raised me. You have always been there for me " +
                 "and have always been not only my mother, but one of my best friends " +
                 "I just want you to know I love you and I will also always be there for you!",
}

const zenPageDataFunction = (selectedQuote, quoteAuthor) => {
   
    const zenPageData = {
        title: "Zen Quote of the Day",
        byLine: "Time to get your Zen on...",
        // mainContent: "Testing",
        mainContent: selectedQuote + " " + "\n\r" +
                        "Spoken by: " + quoteAuthor,
    }
    
    return zenPageData;
}

export {
    welcomePageData,
    zenPageDataFunction,
}