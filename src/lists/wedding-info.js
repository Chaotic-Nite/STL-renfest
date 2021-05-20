export const weddingInfo = {
  location: [
    { place: "Fairy Wing Forest", chargePerHour: "600", capacity: "20" },
    { place: "Mermaid Cove", chargePerHour: "600", capacity: "20" },
    { place: "St Louis Stage", chargePerHour: "500", capacity: "60" },
    { place: "Chapel", chargePerHour: "500", capacity: "75" },
    { place: "Pirate Ship", chargePerHour: "600", capacity: "250" },
    { place: "Joan of Arc", chargePerHour: "600", capacity: "250" },
    { place: "All other stages", chargePerHour: "500", capacity: "varies" },
  ],
  reception: [
    {
      place: "Private Joust Box",
      charge: "500",
      per: "joust",
      capacity: "6",
      inclusive: true,
    },
    {
      place: "Mermaid Cove",
      charge: "500",
      per: "1.5 hours",
      capacity: "6",
      inclusive: true,
    },
    {
      place: "Fairy Wing Forest",
      charge: "400",
      per: "hour",
      capacity: "12",
      inclusive: false,
    },
    {
      place: "Children's Realm",
      charge: "300",
      per: "hour",
      capacity: "40",
      inclusive: false,
    },
    {
      place: "Royal Court",
      charge: "500",
      per: "hour",
      capacity: "120",
      inclusive: false,
    },
  ],
  special: [
    {
      item: "Served seating at Joust",
      price: "$100 per bleacher",
      additional: "seats 40",
    },
    { item: "Rehearsal", price: "$100", additional: "Friday before event" },
    {
      item: "Rehearsal Dinner Reception Area",
      price: "$100",
      additional: "(does not include food)",
    },
    { item: "Officiant", price: "$200", additional: "" },
    { item: "Music (3 Songs)", price: "~$200", additional: "Varies per band" },
    { item: "Parade", price: "$200", additional: "(escorted by court)" },
    { item: "Parade on Horseback", price: "$600", additional: "" },
  ],

  weddingMenu: {
    main: {
      price: "$19.95 per person",
      salad: "Host choice between House Salad or Classic Caesar Salad",
      entree:
        "Slow Roasted Turkey Drumstrick\nGriled Chicken Breast in Host Choice of Sauce(+$1.00 per person)\nChoice of Sauce - Lemon Butter or Marsala Sauce",
      vegetable: "Sweet Buttery Corn on the Cob",
      starch: "Garlic Roasted Mashed Potatoes\nDinner Rolls served with butter",
      dessertTray:
        "Assorded cookies & brownie tray\nAssorted cheese cake bites (+$1.00 per person)\nAssorted cupcakes (+$1.00 per person)",
      beverageStation: [
        "Host choice of 2 options:",
        "Hot Tea",
        "Iced Tea",
        "Lemonade",
        "Punch",
        "Soda",
        "Bottle Water",
      ],
    },
    appetizersHot: [
      "Hot Appetizers (prices per 50 pieces)",
      { food: "Grilled Asparagus", price: "$30" },
      { food: "Grilled Zucchini", price: "$30" },
      { food: "Golden Toasted Ravioli (meat or cheese)", price: "$50" },
      { food: "Mozzarella Cheese Sticks", price: "$50" },
      { food: "Mini Meatballs in Marinara Sauce", price: "$60" },
      {
        food: "Chicken Wings (Garlic Parmesan, Buffalo, or Trashed)",
        price: "$70",
      },
      { food: "Chesse or Chicken Quesadilla", price: "$85" },
    ],
    appetizersCold: [
      "Cold Appetizers & Specialty Trays",
      { food: "Cheese & Cracker Medley (Assorted)", price: "$2.50/person" },
      { food: "Seasonal Fruit Tray", price: "$3.50/person" },
      { food: "Seasonal Veggie Tray", price: "$3.50/person" },
      { food: "Italian Anitpasto Tray", price: "$4.50/person" },
      [
        "Volpi Salami",
        "Prosciutto",
        "Marinated Olives",
        "Roast Beef",
        "Artichoke Hearts",
        "Assorted Cheese",
      ],
    ],

    partyPackage: [
      {
        title: "Knights",
        type: "hot dog",
        mainFood:
          "all beef hot dogs with a variety of toppings (chili, nacho cheese, sauerkraut and diced onions)",
        additional: [
          "individual bag of potato chips",
          "cole slaw",
          "a cookie tray",
        ],
        visitFrom: "Royal Court",
      },
      {
        title: "Fairy",
        type: "taco",
        mainFood:
          "soft flour tortillas, ground beef taco meat, shredded lettuce, pico de gallo, shredded cheddar, and sour cream",
        additional: [
          "tortilla chips with salsa",
          "cookie tray",
          "brownie tray",
        ],
        visitFrom: "enchanting fairies",
      },
    ],

    sandwichTray: [
      {
        name: "Traditional Sandwich Tray",
        additional: ["green leaf lettuce", "sliced tomatoes"],
        bread: ["wheat","rye"],
        cut: "quaters",
        size: [
          { group: "small", price: "80" },
          { group: "medium", price: "110" },
          { group: "large", price: "145" },
        ],
      },
      {
        name: "Deluxe Sandwich Tray",
        additional: ["premium sliced cheese", "green leaf lettuce", "sliced tomatoes"],
        bread: ["kaiser rolls", "hoagie buns", "croissants", "wraps"],
        cut: "halves",
        size: [
          { group: "small", price: "95" },
          { group: "medium", price: "125" },
          { group: "large", price: "160" },
        ],
      },
    ],
  },

  drinks: {
    nonAlcoholic: {
      price: "$20 per gallon",
      drinks: [
        "Fresh Coffee",
        "Iced Tea",
        "Hot Tea",
        "Lemonade",
        "Strawberry Punch",
      ],
    },
    perBottle: {
      price: "$2 per bottle",
      drinks: ["Bottled Water", "Assorted Pepsi products", "Gatorade"],
    },
    alcoholics: {
      byHour: {
        name: "By the Hour",
        byline: "Beer & Wine",
        drinks: [
          { name: "1 Hour per Person", price: "12" },
          { name: "2 Hours per Person", price: "17" },
          { name: "3 Hours per Person", price: "21" },
        ],
      },
      byDrink: {
        name: "By the Drink",
        byline: "Beer (12-14 oz) and Wine/Mead (6oz)",
        drink: [
          { name: "Beer & Wine Domestic", price: "4" },
          { name: "Import Beer", price: "5" },
          { name: "Craft Beer", price: "5" },
          { name: "Wine", price: "5" },
          {
            name: "Mead",
            price: "5",
            notice: "*Must be Requested in Advanced*",
          },
        ],
      },
      byKeg: {
        name: "By the Keg",
        byline:
          "All drinks are 14oz pours\n1/6 Barrels serve 40-50\n1/2 Barrels serve 140-150",
        drink: [
          { name: "Domestic Pony 1/6 Barrel", price: "175" },
          { name: "Imported Craft or Cider 1/6 Barrel", price: "275" },
          { name: "Domestic 1/2 Barrel", price: "300" },
          { name: "Imported Craft or Cider 1/2 Barrel", price: "400" },
        ],
      },
      byBottle: {
        sutterHome: {
          name: "Sutter Home",
          byline: "(1.5 Liter Bottle; Yields 8-6oz pours)",
          drink: [
            { name: "White Zinfandel", price: "25" },
            { name: "Chardonnay", price: "25" },
            { name: "Merlot", price: "25" },
            { name: "Moscato", price: "25" },
          ],
        },
        folieMenage: {
          name: "Folie Meage A Trois",
          byline: "(750 ML; Yields 4-6oz pours)",
          drink: [
            { name: "Midnight Red", price: "25" },
            { name: "Merlot", price: "25" },
            { name: "Chardonnay", price: "25" },
            { name: "Champagne (4-6oz)", price: "25" },
            { name: "Mead(4-6oz)", price: "25" },
          ],
        },
      },
      cashBar: {
        name: "Cash Bar",
        byline: "",
        drink: [
          { name: "Domestic Beer", price: "5" },
          { name: "Import Beer", price: "6" },
          { name: "Craft Beer", price: "6" },
          { name: "Wine", price: "6" },
          { name: "Mead", price: "6" },
        ],
      },
      byline:
        "*The St. Louis Renaissance Festival reserves the right to refuse service to any guest and to stop serving any guest that appears intoxicated. We also card all patrons that appear under the age of 40, this is a state mandated law. Without proper valid identification you will not be served. Sorry for any inconveniences this may cause.",
    },
  },
};

export const weddingFinePrint = [
  {
    name: "Menu Selections",
    description: `Choose a menu from the preceding suggestions or have us customize a menu for you and your guests. Menus for smaller parties (under 25 people) please finalize your menu at least one week prior to the event and parties over 25 people please finalize your menu at least two weeks in advance. We want to ensure that you have everything you need for your event and some items take longer to order and prepare.`,
  },
  {
    name: "Service Labor Charges & Taxes",
    description: `An 18% service charge and an 8.65% Missouri State sales tax will be applied to all food and beverages purchased. Service charge and State taxes are subject to change. If you prefer a plated and served meal over a buffet a fee of $12 per server per hour will applied to your bill.`,
  },
  {
    name: "Guarantees",
    description: `A final guarantee of attendance is required 3 working days prior to all food & beverage events. Billing will be based on your minimum guarantee even if fewer guests actually attend. The guarantee can be adjusted up to 3 working days prior to your event. We do know that last minute guests RSVP and we will do our best to accommodate them, please contact us ASAP with these circumstances.`,
  },
  {
    name: "Outside Food & Beverages",
    description: `No outside food or beverage will be permitted to be brought into The St. Louis Renaissance Festival. Some exceptions will be made for cakes. Please check with us and get it approved prior to the event. If a cake is brought for your event please know we may not have accommodations for storage until your event takes place and we are not responsible for cutting and taking care of the cake. We can supply plates, napkins, and utensils for a small fee if these items are needed. We are responsible for the administration of the sale and service of alcoholic beverages in accordance with the Missouri Alcoholic Beverage Commission’s Regulations, NO outside alcohol of any kind is permitted on premise.`,
  },
  {
    name: "Billing",
    description: `30% of the total bill is due once a contract is signed. A credit card must be kept on file to hold the date and location for your event. The bill must be paid in full within 2 weeks of the event date. Any additional guests and items must be paid the day of the event. A deposit and signed contract is the only way that a location and date will be held.`,
  },
  {
    name: "Cancellation",
    description: `The full deposit will be refunded if event is canceled within one month of the event. Half the deposit will be refunded if canceled up to 10 business days of the event. Your deposit will be not refunded if the cancellation is within 9 business days or less of your event. Full food and beverage revenues will be charged for functions canceled within 5 business days of the function date and charged to the credit card on file unless other arrangements have been made.`,
  },
  {
    name: "Damages",
    description: `Costs associated with damages resulting from event-related activities will be charged directly to the Host or Business holding the event. This includes, but is not limited to, damages resulting from attendee or event personnel vandalism, equipment movement, water, oil, liquid or other leakages.`,
  },
  {
    name: "Centerpieces & Decorations",
    description: `The St. Louis Renaissance Festival and/or it’s staff is not responsible for the removal and storage of any centerpieces or decorations brought in by the guest or host.`,
  },
  {
    name: "Photography",
    description: `The St. Louis Renaissance Festival shall retain the right to take photographs of any event and can be used in future publications and on our website.`,
  },
  {
    name: "Sound Levels",
    description: `Sound levels must be maintained as to not disturb nor interrupt other events that could be taking place at the time of your event. We have the authority to adjust sound levels.`,
  },
  {
    name: "Parking",
    description: `Parking is free of charge. If someone in your group has special needs please inform us prior to your event so we can accommodate them.`,
  },
  {
    name: "Wedding Ceremonies",
    description: `Wedding officiates must be legally licensed in the state of Missouri to perform a wedding ceremony. We must have a copy of the license prior to your event. Wedding officiates and photographers get in free of charge to the festival during the day of your event.`,
  },
  {
    name: "Bars & Alcohol",
    description: `NO outside Beer, Wine, or Liquor is allowed on The St. Louis Renaissance Festival grounds at any time!`,
  },
];
