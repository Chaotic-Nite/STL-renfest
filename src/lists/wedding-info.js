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
      Entree:
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
      "Hot Appetizers (prices per 50 pieces",
      { food: "None", price: "" },
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

    partyPackage: {
      knights: {
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
      fairy: {
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
    },
  },
};
