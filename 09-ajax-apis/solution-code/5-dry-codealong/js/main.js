'use strict';

const makeRequest = (url) => {
  console.log('Making request');
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.statusText);
      }
    })
    .then((data) => {
      console.log(data);
    });
}

// Code for Fetch request to the first URL
/* 
document.querySelector("#getFinanceDataButton").addEventListener('click', function() {
  console.log('Making request');
  fetch('http://data.consumerfinance.gov/api/views.json')
    .then((response) => {
      if (response.ok) {
          return response.json();
      } else {
          console.log(response.statusText);
      }
    })
    .then((data) => {
      console.log(data);
    });
});

// Code for Fetch request to the second URL

document.querySelector("#getHealthDataButton").addEventListener('click', function() {
  console.log('Making request');
  fetch('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD')
    .then((response) => {
      if (response.ok) {
          return response.json();
      } else {
          console.log(response.statusText);
      }
    }).then((data) => {
      console.log(data);
    });
});
 */

document.querySelector('#getFinanceDataButton').addEventListener(
  'click',
  function () {
    makeRequest('http://data.consumerfinance.gov/api/views.json');
  }
);

document.querySelector('#getHealthDataButton').addEventListener(
  'click',
  function () {
    makeRequest(
      'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD'
    );
  }
);


