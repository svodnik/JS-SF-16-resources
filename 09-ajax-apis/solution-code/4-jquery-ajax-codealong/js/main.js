/* 
$.get("https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD")
  .done(function (data) {
    console.log(data);
  });
 */

$.ajax({
  url: "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD",
  data: {
    format: "json"
  },
})
  .done(function (data) {
    console.log(data);
  });
