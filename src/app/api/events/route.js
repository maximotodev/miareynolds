export function GET() {
  const events = [
    {
      id: 1,
      date: {
        day: "15",
        month: "Feb",
      },
      location: {
        city: "Los Angeles",
        country: "USA",
        address: "LA Convention Center",
      },
      priceRange: "60-250$",
    },
    {
      id: 2,
      date: {
        day: "20",
        month: "Mar",
      },
      location: {
        city: "Rio de Janeiro",
        country: "Brazil",
        address: "Sambadrome",
      },
      priceRange: "40-200$",
    },
    {
      id: 3,
      date: {
        day: "10",
        month: "May",
      },
      location: {
        city: "Paris",
        country: "France",
        address: "Eiffel Tower Park",
      },
      priceRange: "70-300$",
    },
    {
      id: 4,
      date: {
        day: "25",
        month: "Jul",
      },
      location: {
        city: "Berlin",
        country: "Germany",
        address: "Berlin Exhibition Hall",
      },
      priceRange: "55-280$",
    },
    {
      id: 5,
      date: {
        day: "06",
        month: "Sep",
      },
      location: {
        city: "Athens",
        country: "Greece",
        address: "Acropolis Amphitheatre",
      },
      priceRange: "45-220$",
    },
    {
      id: 6,
      date: {
        day: "12",
        month: "Oct",
      },
      location: {
        city: "Bucharest",
        country: "Romania",
        address: "National Arena",
      },
      priceRange: "42-260$",
    },
    {
      id: 7,
      date: {
        day: "03",
        month: "Nov",
      },
      location: {
        city: "Warsaw",
        country: "Poland",
        address: "PGE Narodowy",
      },
      priceRange: "46-290$",
    },
  ];

  return Response.json(events);
}
