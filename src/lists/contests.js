import {dateObject} from './UPTODATE.js';

export const setPromotions = [
    {
        title: 'Military & Public Services Weekend',
        dates: dateObject.wkndList[0],
        info: `
        Show your Military, Police Officers, Fire Fighter or EMS ID at the Festival box office to receive free adult admission.
        `,
        italics: `Discount cannot be combined with any other offer.`
    },{
        title: 'Student Discount',
        dates: dateObject.wkndList[0],
        info: `
        Show your student ID at the Festival box office to receive $5 off adult admission. However, those students who are on the honor roll and bring proof of being on the honor roll will receive a free ticket.
        `,
        italics: `Discount cannot be combined with any other offer.`
    },{
        title: 'Military & Public Services Weekend',
        dates: 'Available First 3 Weekends',
        info: `
        Show your Military, Police Officers, Fire Fighter or EMS ID at the Festival box office to receive free adult admission.
        `,
        italics: `Discount cannot be combined with any other offer.`
    },{
        title: 'Blood Drive',
        dates: 'Available All 5 Weekends',
        info: `
        Donate 5 non-perishable items and get a BOGO Ticket to the festival!
        `,
        italics:`**Tickets must be purchased at the gate in order to receive this discount.**
        `,
    },{
        title: 'Shopping Day',
        dates: dateObject.shopDay,
        info: `
        Military & First Responders get in for free! Just show an ID at the box office.
        `,
        italics:`*Valid only on ${dateObject.shopDay}. Cannot be combined with any other offer.*`,
    },
]

export const dailyEvents = [
    {
        title: "LIVE Armored Joust Daily",
        price: '',
        description: 'Join us at the Joust Field three times a day to watch live armored jousting! Don’t miss the biggest attraction of our festival!',
        ageSuggetion: false,
        age: '',
        ticketUrl: '',
        time: '11:30 & 2:00 & 4:00',
    },
    {
        title: "King's Happy Hour",
        price: '$30 per Person',
        description: 'Enjoy a sampling of ales and delicious hor d’oeuvres while being regaled with song and stories!',
        ageSuggetion: true,
        age: 'Bawdy event is for 21+ with valid ID.',
        ticketUrl: '',
        time: '4:15 pm at Two Cannons Whiskey and Rum Bar'
    },
    {
        title: "A Very Fairy Tea",
        price: '$10 per Person',
        description: 'Mingle with the Fairies while enjoying a light snack, crafts and entertainment and a photo opportunity at the end!',
        ageSuggetion: true,
        age: 'Recommended for ages 5-12.',
        ticketUrl: '',
        time: '3:00 pm at Fairy Wing Forest'
    },
    {
        title: "Renaissance Romance",
        price: '$50 per Couple',
        description: 'Romantic refreshment for two! Enjoy a front row view of the joust while being served a gourmet lunch, two sparkling water flutes, and one bottle of sparkling wine.',
        ageSuggetion: false,
        age: '',
        ticketUrl: '',
        time: '11:30am & 2:00pm & 4:00pm Meet at the Gaint Rocking Horse>'
    },
    {
        title: "Brunch at the Joust",
        price: '$25 per Person',
        description: 'Enjoy a front row view of the joust while being served a gourmet lunch, and sparkling wine with orange juice. (Seating is Community Table Style unless otherwise reserved for small groups please email akuchar@renaissancefest.com)',
        ageSuggetion: false,
        age: '',
        ticketUrl: '',
        time: '11:30am & 2:00pm & 4:00pm - Meet at the Gaint Rocking Horse'
    },
    {
        title: "Pub Crawl",
        price: '$30 per Person',
        description: 'Enjoy a guided tour of our most popular pubs at the Festival with three beers, a souvenir mug, and activities including Trivia.',
        ageSuggetion: true,
        age: '21+ with valid ID.',
        ticketUrl: '',
        time: [
        '12pm – Meet at Information Booth | Stops: Wooden Badger, Battle Axe Pub, Tavern',
        '3:30pm – Meet at Information Booth | Stops: Knights Pub, Tavern, Battle Axe Pub']
    },
    {
        title: "Cocktail Crawl",
        price: '$35 per Person',
        description: 'Enjoy a guided tour of our three cocktail bars! Start off at our Boozy Bean and Bakery Bar then stop by our Two Cannons Whisky & Rum Bar. To finish it off make your way to our Mermaid Margarita Bar! Enjoy bawdy entertainment along the way. Admission includes three cocktails (does not include Walk the Plank) and a souvenir glass.',
        ageSuggetion: true,
        age: '21+ with valid ID.',
        ticketUrl: '',
        time: '2pm – Begin at Information Booth by Front Gate'
    },
    {
        title: "Hawk Walk",
        price: '$30 per Person',
        description: 'Discover the nature of falconry by a Master Falconer through an intimate walk with birds of prey in the quiet of the Renaissance Festival grounds before it opens to the public. Finish the walk and enjoy light snacks of fine meats, cheeses and a complementary beverage.',
        ageSuggetion: false,
        age: '',
        ticketUrl: '',
        time: '9:30am - Meet at Information Booth by Front Gate'
    },
]