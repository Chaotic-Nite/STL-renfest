import {dateObject} from './UPTODATE';

export const castList = [
    {
        name: 'Fairy House Competition',
        description: `All patrons big and small are invited to make their own unique fairy house and share it during the Festival. 
        FREE to participate and each fairy house submitted will receive 2 FREE admission tickets to the Festival. 
        The fairy houses will be judged and the top 3 winners in each category 
        (Adult & Child) will win great prizes! 
        Those participating will take their Fairy House to the box office to receive the free tickets and then drop it off in Fairy Wing Forest. 
        Fairy houses are accepted our first three weekends 
        (September ${dateObject.wkndRaw[0].getDate()}, ${dateObject.wkndRaw[1].getDate()}, ${dateObject.wkndRaw[2].getDate()}, ${dateObject.wkndRaw[3].getDate()}, October ${dateObject.wkndRaw[4].getDate()}, and ${dateObject.wkndRaw[5].getDate()}).`,
        downloadLink: '/assests/pdf-files/Fairy-House-Form.pdf',
    },
    {
        name: 'Mural Competition',
        description: '',
        downloadLink: '/assests/pdf-files/Fairy-House-Form.pdf',
    },
    {
        name: '',
        description: '',
        downloadLink: '/assests/pdf-files/Fairy-House-Form.pdf',
    },
    {
        name: '',
        description: '',
        downloadLink: '/assests/pdf-files/Fairy-House-Form.pdf',
    }
]