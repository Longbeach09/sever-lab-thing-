import axios from "axios";

// PART 1: Show Dog Photo

function showDogPhoto(evt) {
  axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
    const imageUrl = res.data.message;
    console.log(imageUrl);
    document.querySelector("#dog-image").innerHTML = `<img src=${imageUrl}>`;
  });

  // TODO: get a random photo from the Dog API and show it in the #dog-image div
}

document
  .querySelector("#get-dog-image")
  .addEventListener("click", showDogPhoto);

// PART 2: Show Weather

async function showWeather(evt) {
  // getting info from index and setting zipcode to that and the index is whats in the box
  const zipcode = document.querySelector("#zipcode-field").value;
  // takes whatever the zip code is from the code above and changes the url
  const url = `/weather.txt?zipcode=${zipcode}`;
  //response is waiting to exist until we can pull the data from the url to set response
  const response = await axios.get(url);

  document.querySelector("#weather-info").innerText = response.data;

  // TODO: request weather with that URL and show the forecast in #weather-info
}

document
  .querySelector("#weather-button")
  .addEventListener("click", showWeather);

// PART 3: Order Cookies

function orderCookies(evt) {
  // TODO: Need to preventDefault here, because we're listening for a submit event!
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector("#order-form").addEventListener("submit", orderCookies);

// PART 4: iTunes Search

function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;

  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
}
document
  .querySelector("#itunes-search-form")
  .addEventListener("submit", iTunesSearch);
