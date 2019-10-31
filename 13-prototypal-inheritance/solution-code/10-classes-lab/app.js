// CLASSES LAB
//
// Refactor the code to replace constructors and prototypes with `class` 
// syntax instead.

'use strict';

// function Item(stockNumber, name, type, price) {
//   this.stockNumber = stockNumber;
//   this.name = name;
//   this.type = type;
//   this.price = price;
//   this.logItem = function() {
//     console.log(this);
//     for (let key in this) {
//       console.log(`${key}: ${this[key]}`);
//     }
//   };
// }

class Item {
  constructor(stockNumber, name, type, price) {
    this.stockNumber = stockNumber;
    this.name = name;
    this.type = type;
    this.price = price;
  }
  logItem() {
    console.log(this);
    for (let key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

// function Clothing(stockNumber, name, size, gender, type, color, price) {
//   Item.call(this, stockNumber, name, type, price);
//   this.division = 'clothing';
//   this.size = size;
//   this.gender = gender;
//   this.color = color;
// }

// Clothing.prototype = new Item();

class Clothing extends Item {
  constructor(stockNumber, name, size, gender, type, color, price) {
    super(stockNumber, name, type, price);
    this.division = 'clothing';
    this.size = size;
    this.gender = gender;
    this.color = color;
  }
}

// function Household(stockNumber, name, department, type, price) {
//   Item.call(this, stockNumber, name, type, price);
//   this.division = 'household goods';
//   this.department = department;
// }

// Household.prototype = new Item();

class Household extends Item {
  constructor(stockNumber, name, department, type, price) {
    super(stockNumber, name, type, price);
    this.division = 'household goods';
    this.department = department;
  }
}

// test cases -- do not edit
let s20190001 = new Clothing(
  'a1515',
  'Keen Selvage',
  9,
  'F',
  'running',
  'olive/brindle',
  89.99
);
let h20190001 = new Household(
  '55h2102',
  'Jumbo watering can',
  'Home/Garden',
  'plastic',
  19.95
);

s20190001.logItem();
h20190001.logItem();
