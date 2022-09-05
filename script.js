//API URL: https://jacintodesign.github.io/quotes-api/data/quotes.json
let apiQuotes = [];

//Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
      const response = await fetch(apiUrl); //Response variable populated upon receiving info from api
      apiQuotes = await response.json(); //Getting JSON from API as a response & turnning into a JSON object.
      console.log(apiQuotes);
    } catch (error) {
        //Catch Error Here
    }

}//On Load
getQuotes();