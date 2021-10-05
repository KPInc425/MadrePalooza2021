const getZoneQuotes = async () => {
    const api_url = "https://zenquotes.io/api/quotes/";

    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        // console.log(data);
        return data;
    }
    //NEED TO ADD A CHECK TO MAKE SURE THIS IS ONLY HAPPENING
    //EVERY HOUR
    let apiData = await getapi(api_url);

    // console.log("apiData: " + apiData);
    return apiData;
}

export default getZoneQuotes;