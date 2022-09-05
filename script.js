//API URL: https://jacintodesign.github.io/quotes-api/data/quotes.json - For Quotes
let apiQuotes = [];

//Show New Quote
function newQuote() {
    //Pick a random quote from apiQuotes array
    const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}
//Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
      const response = await fetch(apiUrl); //Response variable populated upon receiving info from api
      apiQuotes = await response.json(); //Getting JSON from API as a response & turnning into a JSON object.
      newQuote();
    } catch (error) {
        //Catch Error Here
    }

}//On Load
getQuotes();