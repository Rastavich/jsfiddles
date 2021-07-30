// run `node index.js` in the terminal

'use strict';

const counts = [
  '900,google.com',
  '60,mail.yahoo.com',
  '10,mobile.sports.yahoo.com',
  '40,sports.yahoo.com',
  '300,yahoo.com',
  '10,stackoverflow.com',
  '20,overflow.com',
  '5,com.com',
  '2,en.wikipedia.org',
  '1,m.wikipedia.org',
  '1,mobile.sports',
  '1,google.co.uk'
];

let list = [];
let domain = [];
let subDomain = [];

function calculateClicksByDomain(counts) {
  for (let i = 0; i < counts.length; i++) {
    domain = counts[i].split(',');
    // console.log(domain);

    list.push(domain[0], domain[1]);
  }

  // console.log(list.length);
  for (let j = 0; j < list.length; j++) {
    console.log(list[j]);
    // concatDomains(list[j].split('.'));
  }
}

function concatDomains(domain) {
  // console.log(domain);
  for (let i = domain.length; i > 0; i--) {
    let previousValue = domain[1];
    let val = domain[1];
    // console.log(previousValue);
  }
  // console.log(domain);
}

calculateClicksByDomain(counts);
