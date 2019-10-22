'use strict';

const $zip = $('#zip');
const $tempPara = $('#temp');
const $locationPara = $('#location');
const weatherUrl = 'http://api.weatherunlocked.com/api/current/';
let city;
let state;
let lat;
let lon;

const getLocation = (data) => {
  city = data.places[0]['place name'];
  state = data.places[0]['state'];
}

const updateUISuccess = () => {
  $zip.val('');
  $locationPara.text(city + ', ' + state);
}

const updateUIError = (error) => {
  $locationPara.text('Please try again in a bit.');
  console.log('Response code: ' + error);
}

const getData = (zip) => {
  fetch('http://api.zippopotam.us/us/' + zip)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((data) => getLocation(data))
    .then(() => updateUISuccess())
    .catch((status) => updateUIError(status));
};

$zip.on('keyup', function () {
  const zipString = $zip.val();
  if (zipString.length === 5) {
    getData(zipString);
  }
});