type CountryData = {
  [year: number]: {
    title: string;
    number: number;
    numberValue: string;
  };
};
type EuropeRealTimeData = {
  title: string;
  value: number;
  timer: number;
  newDataForValue: number;
};

type RandomData = {
  Italy: CountryData;
  France: CountryData;
  Belgium: CountryData;
  Germany: CountryData;
  Romania: CountryData;
  Ireland: CountryData;
  EuropaRealTimeData: EuropeRealTimeData[];
};

const randomData: RandomData = {
  Italy: {
    2020: {
      title: "Pizzas eaten",
      number: 2.9,
      numberValue: "B",
    },

    2021: {
      title: "Cups of coffee drunk",
      number: 34.6,
      numberValue: "B",
    },
    2022: {
      title: "Car Accidents",
      number: 165.8,
      numberValue: "hundreds",
    },
    2023: {
      title: "Wine Consumption",
      number: 40,
      numberValue: "Mhl",
    },
    2024: {
      title: "Tourist Arrivals",
      number: 65,
      numberValue: "M",
    },
  },
  France: {
    2020: {
      title: "Electric Cars Sold",
      number: 1.1,
      numberValue: "M",
    },

    2021: {
      title: "Baguettes Consumed",
      number: 10.8,
      numberValue: "B",
    },

    2022: {
      title: "Tourism Revenue",
      number: 59.4,
      numberValue: "B Euro",
    },

    2023: {
      title: "Air Travel Passengers",
      number: 160,
      numberValue: "M",
    },

    2024: {
      title: "Renewable Energy Share",
      number: 25,
      numberValue: "%",
    },
  },
  Belgium: {
    2020: {
      title: "Bicycles Sold",
      number: 1.3,
      numberValue: "M",
    },

    2021: {
      title: "Chocolate Consumption",
      number: 8.8,
      numberValue: "kg/capita",
    },

    2022: {
      title: "Electricity Production from Renewables",
      number: 25,
      numberValue: "%",
    },

    2023: {
      title: "Tourism Revenue",
      number: 13.4,
      numberValue: "B EUR",
    },

    2024: {
      title: "Unemployment Rate",
      number: 5.6,
      numberValue: "%",
    },
  },
  Germany: {
    2020: {
      title: "Electric Cars Sold",
      number: 0.4,
      numberValue: "M",
    },

    2021: {
      title: "Beer Consumption",
      number: 98.5,
      numberValue: "L/capita",
    },

    2022: {
      title: "Renewable Energy Share",
      number: 46.3,
      numberValue: "%",
    },

    2023: {
      title: "Tourism Revenue",
      number: 44.8,
      numberValue: "B EUR",
    },

    2024: {
      title: "Unemployment Rate",
      number: 3.0,
      numberValue: "%",
    },
  },

  Romania: {
    2020: {
      title: "Electric Cars Sold",
      number: 0.1,
      numberValue: "M",
    },

    2021: {
      title: "Wine Consumption",
      number: 25.5,
      numberValue: "L/capita",
    },

    2022: {
      title: "Tourist Arrivals",
      number: 13.2,
      numberValue: "M",
    },

    2023: {
      title: "Road Traffic Accidents",
      number: 90.2,
      numberValue: "thousand",
    },

    2024: {
      title: "GDP Growth",
      number: 4.2,
      numberValue: "%",
    },
  },

  Ireland: {
    2020: {
      title: "Pizzas Eaten",
      number: 1.0,
      numberValue: "M",
    },

    2021: {
      title: "Coffee Consumption",
      number: 6.2,
      numberValue: "kg/capita",
    },

    2022: {
      title: "Electricity from Renewables",
      number: 42.5,
      numberValue: "%",
    },

    2023: {
      title: "Tourism Revenue",
      number: 8.5,
      numberValue: "B EUR",
    },

    2024: {
      title: "Unemployment Rate",
      number: 4.5,
      numberValue: "%",
    },
  },
  EuropaRealTimeData: [
    {
      title: "Ice Cream Cones Eaten in Europe Today",
      value: 12842,
      timer: 0.5,
      newDataForValue: 13,
    },
    {
      title: "Gallons of Coffee Drunk Across Europe in the Last Hour",
      value: 324570,
      timer: 0.1,
      newDataForValue: 311,
    },
    {
      title: "Electric Cars on European Roads Right Now",
      value: 178421,
      timer: 1,
      newDataForValue: 3,
    },
    {
      title: "Books Sold in Europe Today",
      value: 18544,
      timer: 0.5,
      newDataForValue: 55,
    },
    {
      title: "Taxis Operating in Europe Right Now",
      value: 12789,
      timer: 0.8,
      newDataForValue: 11,
    },
    {
      title: "Plastic Bottles Recycled in Europe Today",
      value: 762567,
      timer: 0.1,
      newDataForValue: 548,
    },
    {
      title: "Football Matches Played in Europe Today",
      value: 1211,
      timer: 1,
      newDataForValue: 2,
    },
    {
      title: "Pizzas Eaten in Europe Today",
      value: 13820,
      timer: 1,
      newDataForValue: 40,
    },
    {
      title: "Bus Passengers in Europe Right Now",
      value: 900330,
      timer: 0.2,
      newDataForValue: 1500,
    },
    {
      title: "Plastic Bags Used in Europe Today",
      value: 924521,
      timer: 0.4,
      newDataForValue: 5234,
    },
    {
      title: "Phones Sold in Europe Today",
      value: 45391,
      timer: 1,
      newDataForValue: 46,
    },
    {
      title: "Cups of Coffee Drunk in Europe Right Now",
      value: 1009345,
      timer: 0.1,
      newDataForValue: 2333,
    },
    {
      title: "Airplanes Flying Over Europe Right Now",
      value: 3109,
      timer: 0.1,
      newDataForValue: 12,
    },
    {
      title: "New Movies Released in Europe Today",
      value: 120,
      timer: 1,
      newDataForValue: 1,
    },
    {
      title: "Tickets Sold for Concerts in Europe Today",
      value: 222123,
      timer: 0.6,
      newDataForValue: 4448,
    },
    {
      title: "Ice Cream Cones Sold in Europe Today",
      value: 34356,
      timer: 1,
      newDataForValue: 49,
    },
    {
      title: "Petrol Cars in Use in Europe Right Now",
      value: 11903838,
      timer: 0.1,
      newDataForValue: 3432,
    },
    {
      title: "Tourists Visiting Europe Today",
      value: 45563,
      timer: 0.2,
      newDataForValue: 900,
    },
    {
      title: "Mobile Data Used in Europe Today",
      value: 353456,
      timer: 0.1,
      newDataForValue: 17250,
    },
    {
      title: "Salaries Paid in Europe Today",
      value: 1412134,
      timer: 0.1,
      newDataForValue: 3521,
    },
    {
      title: "Electric Cars Sold in Europe Today",
      value: 345,
      timer: 1,
      newDataForValue: 1,
    },
    {
      title: "Wind Turbines Installed in Europe",
      value: 8567,
      timer: 0.8,
      newDataForValue: 21,
    },
    {
      title: "Water Bottles Sold in Europe",
      value: 3512376,
      timer: 0.1,
      newDataForValue: 8751,
    },
    {
      title: "Air Conditioning Units Running in Europe",
      value: 120987,
      timer: 1,
      newDataForValue: 342,
    },
    {
      title: "New Vehicles Registered in Europe",
      value: 119087,
      timer: 0.1,
      newDataForValue: 225,
    },
    {
      title: "Food Deliveries in Europe Right Now",
      value: 40321,
      timer: 0.1,
      newDataForValue: 661,
    },
    {
      title: "Music Streams in Europe Today",
      value: 8643231,
      timer: 0.1,
      newDataForValue: 16111,
    },
    {
      title: "Bikes Rented in Europe Right Now",
      value: 30672,
      timer: 0.4,
      newDataForValue: 15,
    },
    {
      title: "Books Borrowed in European Libraries",
      value: 12942,
      timer: 0.4,
      newDataForValue: 101,
    },
    {
      title: "Tires Recycled in Europe",
      value: 38261,
      timer: 1,
      newDataForValue: 333,
    },
    {
      title: "Pizza Orders in Europe Right Now",
      value: 1212,
      timer: 0.1,
      newDataForValue: 81,
    },
    {
      title: "Electric Buses in Operation in Europe",
      value: 15124,
      timer: 0.6,
      newDataForValue: 145,
    },
    {
      title: "Fruit and Vegetables Sold in Europe",
      value: 1294823,
      timer: 1,
      newDataForValue: 3451,
    },
    {
      title: "Text Messages Sent in Europe Today",
      value: 21245673,
      timer: 0.1,
      newDataForValue: 345624,
    },
    {
      title: "Bank Cards Swiped in Europe Right Now",
      value: 123521,
      timer: 0.4,
      newDataForValue: 511,
    },
    {
      title: "Fast Food Meals Sold in Europe",
      value: 12412,
      timer: 0.1,
      newDataForValue: 35,
    },
    {
      title: "New Cars Sold in Europe Today",
      value: 4124,
      timer: 0.8,
      newDataForValue: 10,
    },
    {
      title: "Public Transport Users in Europe",
      value: 435673,
      timer: 1,
      newDataForValue: 12323,
    },
    {
      title: "Data Downloads in Europe",
      value: 9009827,
      timer: 0.2,
      newDataForValue: 2250,
    },
    {
      title: "Smartphone Apps Installed in Europe",
      value: 35003,
      timer: 0.4,
      newDataForValue: 175,
    },
    {
      title: "Electric Scooters Rented in Europe",
      value: 20384,
      timer: 0.8,
      newDataForValue: 12,
    },
    {
      title: "Cigarettes Smoked in Europe",
      value: 512341657,
      timer: 0.1,
      newDataForValue: 83333,
    },
    {
      title: "Flights Departing from Europe",
      value: 18987,
      timer: 0.6,
      newDataForValue: 32,
    },
    {
      title: "Light Bulbs Replaced in Europe",
      value: 500000,
      timer: 7,
      newDataForValue: 71429,
    },
    {
      title: "Pet Food Sold in Europe",
      value: 400000,
      timer: 0.1,
      newDataForValue: 80000,
    },
    {
      title: "Newspapers Printed in Europe",
      value: 6000000,
      timer: 0.8,
      newDataForValue: 2000000,
    },
    {
      title: "Shirts Sold in Europe Today",
      value: 1500000,
      timer: 0.8,
      newDataForValue: 375000,
    },
    {
      title: "Plastic Containers Used in Europe",
      value: 90000000,
      timer: 0.8,
      newDataForValue: 15000000,
    },
    {
      title: "Public Phone Calls Made in Europe",
      value: 100000,
      timer: 0.8,
      newDataForValue: 33333,
    },
    {
      title: "Crowds in European Shopping Malls",
      value: 500000,
      timer: 1,
      newDataForValue: 20,
    },
    {
      title: "Fruits Consumed in Europe",
      value: 15000000,
      timer: 0.6,
      newDataForValue: 2500000,
    },
    {
      title: "Electric Heating Units in Use in Europe",
      value: 10000000,
      timer: 0.6,
      newDataForValue: 2000000,
    },
    {
      title: "Pharmacies Open in Europe Right Now",
      value: 5000,
      timer: 0.6,
      newDataForValue: 2500,
    },
    {
      title: "Grocery Items Sold in Europe",
      value: 20000000,
      timer: 0.6,
      newDataForValue: 5000000,
    },
    {
      title: "Laptops Sold in Europe",
      value: 600000,
      timer: 0.6,
      newDataForValue: 200000,
    },
    {
      title: "Christmas Trees Sold in Europe",
      value: 1000000,
      timer: 0.6,
      newDataForValue: 500000,
    },
    {
      title: "Pillows Sold in Europe Today",
      value: 300000,
      timer: 0.6,
      newDataForValue: 60000,
    },
    {
      title: "Shopping Carts Used in Europe",
      value: 1000000,
      timer: 1,
      newDataForValue: 25,
    },
  ],
};

module.exports = randomData;
