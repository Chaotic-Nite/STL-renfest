export const weekends = {
    'weekendOne': {id: 'highland-fling', name:'Highland Fling', short: 'Highland Fling' },
    'weekendTwo': {id: 'pups-pints-pirates', name:'Pups, Pints & Pirates', short: 'Pups & Pirates'},
    'weekendThree': {id: 'shamrocks-shenanigans', name:'Shamrocks and Shenanigans ', short: 'Shamrocks & Shenanigans'},
    'weekendFour': {id: 'heroes-vs-villains', name:'Heroes Vs Villains', short: 'Heroes Vs Villains'},
    'weekendFive': {id: 'oktoberfest', name:'Oktoberfest', short: 'Oktoberfest'},
    'weekendSix': {id: 'vampires-vikings', name:'Vampires and Vikings', short: 'Vampires & Vikings'},
    'shoppingDay': {id: 'festive-shopping-day', name: 'School and Festive Shopping Day', short: 'School & Shopping'}
}

var weeks = []

for (const wknd in weekends) {
    weeks.push({id: weekends[wknd].id, name: weekends[wknd].name, short: weekends[wknd].short})
}

export const listWeekends = weeks

export const vendTabs = [
    {id:'artisans-marketplace', name:'Artisan Marketplace'}, 
    {id:'faire-food', name:'Faire Food'},
    {id:'faire-games', name:'Faire Games'},
    {id:'musical-acts', name:'Musical Acts'}, 
    {id:'specialty-groups', name:'Specialty Groups/Guilds'},
    {id:'street-acts', name:'Street Acts'},
  ]

var pavilionSch = {} 
var stlouisSch = {} 
var owainSch = {} 
var friendshipSch = {} 
var joanOfArcSch = {} 
var marcoPoloSch = {} 
var storytellingSch = {}
var knightsSch = {}
var piratesSch = {}
 
    // Pavilion Stage
pavilionSch[weekends.weekendOne.id] = [
        {name: 'Coming Soon', time: '' },
    ]
pavilionSch[weekends.weekendTwo.id] = [
        {name: 'Coming Soon', time: '' },
    ]
pavilionSch[weekends.weekendThree.id] = [
        {name: 'Coming Soon', time: '' },
    ]
pavilionSch[weekends.weekendFour.id] = [
        {name: 'Coming Soon', time: '' },
    ]
pavilionSch[weekends.weekendFive.id] = [
        {name: 'Coming Soon', time: '' },
    ]
pavilionSch[weekends.weekendSix.id] = [
        {name: 'Coming Soon', time: '' },
    ]
pavilionSch[weekends.shoppingDay.id] = [
        {name: 'Coming Soon', time: '' },
    ]

    // St Louis Stage
stlouisSch[weekends.weekendOne.id] =  [
        {name: 'Coming Soon', time: '' },
    ]
stlouisSch[weekends.weekendTwo.id] =  [
        {name: 'Coming Soon', time: '' },
    ]
stlouisSch[weekends.weekendThree.id] =  [
        {name: 'Coming Soon', time: '' },
    ]
stlouisSch[weekends.weekendFour.id] =  [
        {name: 'Coming Soon', time: '' },
    ]
stlouisSch[weekends.weekendFive.id] =  [
        {name: 'Coming Soon', time: '' },
    ]
stlouisSch[weekends.weekendSix.id] =  [
        {name: 'Coming Soon', time: '' },
    ]
stlouisSch[weekends.shoppingDay.id] =  [
        {name: 'Coming Soon', time: '' },
    ]

    // Owain Stage
owainSch[weekends.weekendOne.id] = [
        {name: 'Coming Soon', time: '' },
    ]
owainSch[weekends.weekendTwo.id] = [
        {name: 'Coming Soon', time: '' },
    ]
owainSch[weekends.weekendThree.id] = [
        {name: 'Coming Soon', time: '' },
    ]
owainSch[weekends.weekendFour.id] = [
        {name: 'Coming Soon', time: '' },
    ]
owainSch[weekends.weekendFive.id] = [
        {name: 'Coming Soon', time: '' },
    ]
owainSch[weekends.weekendSix.id] = [
        {name: 'Coming Soon', time: '' },
    ]
owainSch[weekends.shoppingDay.id] = [
        {name: 'Coming Soon', time: '' },
    ]

    // Friendship Stage
friendshipSch[weekends.weekendOne.id] =[
        {name: 'Coming Soon', time: '' },
    ]
friendshipSch[weekends.weekendTwo.id] =[
        {name: 'Coming Soon', time: '' },
    ]
friendshipSch[weekends.weekendThree.id] =[
        {name: 'Coming Soon', time: '' },
    ]
friendshipSch[weekends.weekendFour.id] =[
        {name: 'Coming Soon', time: '' },
    ]
friendshipSch[weekends.weekendFive.id] =[
        {name: 'Coming Soon', time: '' },
    ]
friendshipSch[weekends.weekendSix.id] =[
        {name: 'Coming Soon', time: '' },
    ]
friendshipSch[weekends.shoppingDay.id] =[
        {name: 'Coming Soon', time: '' },
    ]

    // Joan of Arc Stage   
joanOfArcSch[weekends.weekendOne.id]=[
        {name: 'Coming Soon', time: '' },
    ]
joanOfArcSch[weekends.weekendTwo.id]=[
        {name: 'Coming Soon', time: '' },
    ]
joanOfArcSch[weekends.weekendThree.id]=[
        {name: 'Coming Soon', time: '' },
    ]
joanOfArcSch[weekends.weekendFour.id]=[
        {name: 'Coming Soon', time: '' },
    ]
joanOfArcSch[weekends.weekendSix.id]=[
        {name: 'Coming Soon', time: '' },
    ]
joanOfArcSch[weekends.shoppingDay.id]=[
        {name: 'Coming Soon', time: '' },
    ]

    // Marco Polo Stage
marcoPoloSch[weekends.weekendOne.id]=[
    {name: 'Coming Soon', time: '' },
]
marcoPoloSch[weekends.weekendTwo.id]=[
    {name: 'Coming Soon', time: '' },
]
marcoPoloSch[weekends.weekendThree.id]=[
    {name: 'Coming Soon', time: '' },
]
marcoPoloSch[weekends.weekendFour.id]=[
    {name: 'Coming Soon', time: '' },
]
marcoPoloSch[weekends.weekendSix.id]=[
    {name: 'Coming Soon', time: '' },
]
marcoPoloSch[weekends.shoppingDay.id]=[
    {name: 'Coming Soon', time: '' },
]

    // StoryTelling Stage
storytellingSch[weekends.weekendOne.id]=[
    {name: 'Coming Soon', time: '' },
]
storytellingSch[weekends.weekendTwo.id]=[
    {name: 'Coming Soon', time: '' },
]
storytellingSch[weekends.weekendThree.id]=[
    {name: 'Coming Soon', time: '' },
]
storytellingSch[weekends.weekendFour.id]=[
    {name: 'Coming Soon', time: '' },
]
storytellingSch[weekends.weekendFive.id]=[
    {name: 'Coming Soon', time: '' },
]
storytellingSch[weekends.weekendSix.id]=[
    {name: 'Coming Soon', time: '' },
]
storytellingSch[weekends.shoppingDay.id]=[
    {name: 'Coming Soon', time: '' },
]

    // Knights Stage
knightsSch[weekends.weekendOne.id]=[
    {name: 'Coming Soon', time: '' },
]
knightsSch[weekends.weekendTwo.id]=[
    {name: 'Coming Soon', time: '' },
]
knightsSch[weekends.weekendThree.id]=[
    {name: 'Coming Soon', time: '' },
]
knightsSch[weekends.weekendFour.id]=[
    {name: 'Coming Soon', time: '' },
]
knightsSch[weekends.weekendFive.id]=[
    {name: 'Coming Soon', time: '' },
]
knightsSch[weekends.weekendSix.id]=[
    {name: 'Coming Soon', time: '' },
]
knightsSch[weekends.shoppingDay.id]=[
    {name: 'Coming Soon', time: '' },
]

    // Pirates Stage
piratesSch[weekends.weekendOne.id]=[
    {name: 'Coming Soon', time: '' },
]
piratesSch[weekends.weekendTwo.id]=[
    {name: 'Coming Soon', time: '' },
]
piratesSch[weekends.weekendThree.id]=[
    {name: 'Coming Soon', time: '' },
]
piratesSch[weekends.weekendFour.id]=[
    {name: 'Coming Soon', time: '' },
]
piratesSch[weekends.weekendFive.id]=[
    {name: 'Coming Soon', time: '' },
]
piratesSch[weekends.weekendSix.id]=[
    {name: 'Coming Soon', time: '' },
]
piratesSch[weekends.shoppingDay.id]=[
    {name: 'Coming Soon', time: '' },
]

export const STAGESCHEDULE = {
    pavilion: pavilionSch,
    stlouis: stlouisSch,
    owain: owainSch,
    friendship: friendshipSch,
    joanOfArc: joanOfArcSch,
    marcoPolo: marcoPoloSch,
    storytelling: storytellingSch,
    knights: knightsSch,
    pirates: piratesSch
}