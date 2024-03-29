// Function from mplungjan on Stack Overflow
const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

// Year
const year = 2021;

var d = new Date()
var endDate = new Date()

// Setting the days in which it starts and ends
d.setFullYear(year, 8, 18)
endDate.setFullYear(year, 9, 24)

// The start and end days
const startDay = `${d.toLocaleDateString('default', { month: 'long'})} ${d.getDate()}${nth(d.getDate())}`;
const endDay = `${endDate.toLocaleDateString('default', { month: 'long'})} ${endDate.getDate()}${nth(endDate.getDate())}`;

// How long the Faire has been happening
const yearOfFaire = year - 1998 + "rd";

// Shopping Day
let shopDay = `Monday, October 10th`

// Weekends
let wknd = []
let wkndList = []
for (let i = 0; i < 12; i+=2){
  if (wknd.length === 0) {
    wknd[i] = new Date()
    wknd[i].setFullYear(year, d.getMonth(), d.getDate())
    
    wknd[i+1] = new Date()
    wknd[i+1].setFullYear(year, d.getMonth(), d.getDate()+1)
  } else {
    wknd[i] = new Date()
    wknd[i].setFullYear(year, wknd[i-1].getMonth(), wknd[i-2].getDate()+7)
    
    wknd[i+1] = new Date()
    wknd[i+1].setFullYear(year, wknd[i-1].getMonth(), wknd[i-1].getDate()+7)
  }
  wkndList.push(`${wknd[i].toLocaleDateString('default', { month: 'long'})} ${wknd[i].getDate()}${nth(wknd[i].getDate())} & ${wknd[i+1].toLocaleDateString('default', { month: 'long'})} ${wknd[i+1].getDate()}${nth(wknd[i+1].getDate())}`)
  
}

wknd[wknd.length] = new Date()
wknd[wknd.length-1].setFullYear(year, 9, 11)

// Kegs 'N' Eggs
const eggDay = new Date()
eggDay.setFullYear(year, 2, 10)

const earlyBird = 'April 3rd'
const kneDay = 'April 10th'


export const dateObject = {
  year: year,
  startDay: startDay,
  endDay: endDay,
  yearOfFaire: yearOfFaire,
  wkndRaw: wknd,
  wkndList: wkndList,
  numOfWknds: wknd.length,
  shopDay: shopDay,
  earlyBird: earlyBird,
  kneSaleDay: kneDay,
  eggDay: eggDay
};

