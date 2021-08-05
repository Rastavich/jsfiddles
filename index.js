// run `node index.js` in the terminal

const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "5,com.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"
];

let listMap = new Map([]);
let domain = [];

function calculateClicksByDomain(counts) {
  for (let i = 0; i < counts.length; i++) {
    domain = counts[i].split(",");
    // listMap.set(domain[1], parseInt(domain[0]));

    let split = domain[1].split(".");
    console.log(domain[1]);
    let subDomain = checkSplit(split);
    console.log(listMap.get(subDomain));

    if (listMap.get(subDomain) === domain[1]) {
      listMap.set(subDomain, parseInt(domain[0]));
    } else {
      listMap.set(domain[1], parseInt(domain[0]));
    }
  }
  console.log(listMap);
  return listMap;
}

function checkSplit(dom) {
  let previousValue;
  for (let i = dom.length; i > 0; i--) {
    if (previousValue != null) {
      previousValue += "." + dom[i];
    } else {
      previousValue = dom[i];
    }
  }
  return previousValue;
}

calculateClicksByDomain(counts);
