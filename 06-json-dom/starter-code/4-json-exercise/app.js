'use strict';

// JSON is a subset of the object literal notation of JavaScript; we use JSON to
// transfer data between programs.
// ----  RULES ----
// Property names must be double-quoted strings; trailing commas are forbidden.
// Leading zeroes are prohibited; a decimal point must be followed by at least 
// one digit.
// Most characters are allowed in strings, except certain control characters.
// Strings must be double quoted.
// No comments!
//
// More on JSON here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// Although the following statement isn't technically JSON (since it's actual 
// JavaScript code)
// the object that's being saved with the variable name `notActuallyJSON` is 
// written in valid JSON syntax.
const notActuallyJSON = {
  "someKey": "someValue",
  "innerArray": [
    "alpha",
    "beta",
    "gamma",
    "delta"
  ]
};

// [ Step 1 ] Use JSONLint to determine if something is valid JSON.
// Copy the entire object above (including the opening and closing braces {...},
// but NOT 'let notActuallyJSON =' or the trailing semicolon).
// Then go to http://jsonlint.com/ and paste it into the validator. 
// Does it pass the test of being valid JSON?

// Answer 1:
//
//


// [ Step 2 ] The following statement is valid JavaScript, but the object it 
// creates is not written in valid JSON syntax.
// Use JSONLint to validate the object in the following line; then, edit the 
// object so it passes the validator.
// (Remember that the object is only the content between the braces, including 
// the braces themselves.)
const eddie = {name:'Eddie Vedder', age:49};


// [ Step 3 ] Turn the `grungeAlbums` JavaScript object below into a JSON 
// string, and store it in the variable `grungeAlbumsJSON`.
// Then, convert `grungeAlbumsJSON` back into a JavaScript object, and compare
// it to the original `grungeAlbums`. Are they the same?

// Hint: To turn a JS Object into JSON, use the .stringify method  
// ( JSON.stringify(someObject) )
// (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

const grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

// Answer 3:
//
//

// [ Step 4 ] Take `grungeAlbumsJSON` and convert it back into a JavaScript
// object.
// Then, for each album in the list, do a console log printing out the album 
// name, artist, and units sold.
// Each album should be formatted as follows:

//  Album: Album name
//  Artist: Artist name
//  Units sold: 31234

// Hint: To turn a JSON string into a JS Object, use the .parse method
// ( JSON.parse('some string') )
// (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)


// [ Step 5 ] Go to http://jsonlint.com/  and create a custom JSON string, and
// save it below as a variable.
// Use JavaScript methods to convert the string to a JavaScript object, then to
// convert that object back to JSON.
// Compare the final result to the JSON string you originally created - how has
// it changed?

// Answer 5:
//
//

// BONUS
// Rewrite your answer to Step 4 using square bracket notation.


