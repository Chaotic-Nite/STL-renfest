import {dateObject} from './UPTODATE.js';

console.log(dateObject.wkndList[0])

const deadline = 'September 4th'

export const contestsList = [
    {
        name: 'Fairy House Competition',
        description: [`All patrons big and small are invited to make their own unique fairy house and share it during the Festival. 
        `, `FREE to participate and each fairy house submitted will receive 2 FREE admission tickets to the Festival. 
        The fairy houses will be judged and the top 3 winners in each category 
        (Adult & Child) will win great prizes! 
        `,`Those participating will take their Fairy House to the box office to receive the free tickets and then drop it off in Fairy Wing Forest.`,`
        Fairy houses are accepted our first three weekends 
        (September ${dateObject.wkndRaw[0].getDate()}, ${dateObject.wkndRaw[1].getDate()}, ${dateObject.wkndRaw[2].getDate()}, ${dateObject.wkndRaw[3].getDate()}, October ${dateObject.wkndRaw[4].getDate()}, and ${dateObject.wkndRaw[5].getDate()}).`],
        downloadLink: '/assests/pdf-files/Fairy-House-Form.pdf',
    },
    {
        name: 'Mural Competition',
        description: [`Show off your artistic skills by painting and submitting a unique Mermaid themed mural for a chance to win a great prize! 
        `,`FREE to participate and each mural submitted will receive 4 FREE admission tickets to the festival. 
        Mural judging will begin September ${dateObject.wkndRaw[0].getDate()}th and top three murals will WIN great prizes!
        `,`Mural can be dropped off at our Festival site M-F 9am to 5pm.
        `, `Submission Date is Friday ${deadline}. Guidelines listed on Mural form.`],
        downloadLink: '/assests/pdf-files/Mural-Registration-Form.pdf',
    },
    {
        name: 'Banner Competition',
        description: [`
        Show off your artistic skills by painting and submitting a unique Renaissance themed Banner for a chance to win a great prize! 
        `,`FREE to participate and each banner submitted will receive 2 FREE admission tickets to the festival. Banner judging will begin September ${dateObject.wkndRaw[0].getDate()}th and top three murals will WIN great prizes!
`,`Banners can be dropped off at our Festival site M-F 9am to 5pm.`,`Submission Date is Friday ${deadline}. Guidelines listed on Banner form.
        `],
        downloadLink: '/assests/pdf-files/STL-BANNER-Form.pdf',
    },
    {
        name: 'Fantasy Mask',
        description: [
            `
            Show off your best mask, have fun with a character!`, `The contest is free to participate and all participants will receive FREE admission into the Festival with their Mask.
            `,
        ],
        italics: `(Fantasy Mask is only valid the “Viking Invasion and Cosplay in the Kingdom, ${dateObject.wkndList[3]}.” weekend of the Festival).`,
        downloadLink: '/assests/pdf-files/Fantasy-Mask-Registration-Form.pdf',
    }
]

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
        time: '11:30 & 2:00 & 4:00'
    },
    {
        title: "King's Happy Hour",
        price: '$30 per Person',
        description: 'Enjoy a sampling of ales and delicious hor d’oeuvres while being regaled with song and stories!',
        ageSuggetion: true,
        age: 'Bawdy event is for 21+ with valid ID.',
        time: '4:15 pm at Two Cannons Whiskey and Rum Bar'
    },
    {
        title: "A Very Fairy Tea",
        price: '$10 per Person',
        description: 'Mingle with the Fairies while enjoying a light snack, crafts and entertainment and a photo opportunity at the end!',
        ageSuggetion: true,
        age: 'Recommended for ages 5-12.',
        time: '3:00 pm at Fairy Wing Forest'
    },
    {
        title: "Renaissance Romance",
        price: '$50 per Couple',
        description: 'Romantic refreshment for two! Enjoy a front row view of the joust while being served a gourmet lunch, two sparkling water flutes, and one bottle of sparkling wine.',
        ageSuggetion: false,
        age: '',
        time: '11:30am & 2:00pm & 4:00pm Meet at the Gaint Rocking Horse>'
    },
    {
        title: "Brunch at the Joust",
        price: '$25 per Person',
        description: 'Enjoy a front row view of the joust while being served a gourmet lunch, and sparkling wine with orange juice. (Seating is Community Table Style unless otherwise reserved for small groups please email akuchar@renaissancefest.com)',
        ageSuggetion: false,
        age: '',
        time: '11:30am & 2:00pm & 4:00pm - Meet at the Gaint Rocking Horse'
    },
    {
        title: "Pub Crawl",
        price: '$30 per Person',
        description: 'Enjoy a sampling of ales and delicious hor d’oeuvres while being regaled with song and stories!',
        ageSuggetion: true,
        age: '21+ with valid ID.',
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
        time: '2pm – Begin at Information Booth by Front Gate'
    },
    {
        title: "Hawk Walk",
        price: '$30 per Person',
        description: 'Enjoy a sampling of ales and delicious hor d’oeuvres while being regaled with song and stories!',
        ageSuggetion: false,
        age: '',
        time: '9:30am - Meet at Information Booth by Front Gate'
    },
]