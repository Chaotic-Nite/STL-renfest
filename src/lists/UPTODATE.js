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

d.setFullYear(year, 8, 18)
endDate.setFullYear(year, 9, 17)

// The start and end days
const startDay = `${d.toLocaleDateString('default', { month: 'long'})} ${d.getDate()}${nth(d.getDate())}`;
const endDay = `${endDate.toLocaleDateString('default', { month: 'long'})} ${endDate.getDate()}${nth(endDate.getDate())}`;

// How long the Faire has been happening
const yearOfFaire = year - 1998 + "rd";

// Weekends

let wknd = []
let wkndList = []
for (let i = 0; i < 10; i+=2){
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

let shopDay = `${wknd[wknd.length-1].toLocaleDateString('default', { month: 'long'})} ${wknd[wknd.length-1].getDate()}${nth(wknd[wknd.length-1].getDate())}`

console.log(wkndList)

//wkndStr = `${wknd[j].toLocaleDateString('default', { month: 'long'})} ${wknd[j].getDate()}${nth(wknd[j].getDate())} & ${wknd[j+1].toLocaleDateString('default', { month: 'long'})} ${wknd[j+1].getDate()}${nth(wknd[j+1].getDate())}`;



const dateObject = {
  year: 2021,
  startDay: startDay,
  endDay: endDay,
  yearOfFaire: yearOfFaire,
  wkndRaw: wknd,
  wkndList: wkndList,
  shopDay: shopDay,
};

export default dateObject;
