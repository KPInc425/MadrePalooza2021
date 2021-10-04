function getZoneQuotes() {
    const api_url = "https://zenquotes.io/api/quotes/";

    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
    }
    let apiData = getapi(api_url);

    return apiData;
}

export default getZoneQuotes;