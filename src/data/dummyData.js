export const barbershops = [
  {
    id: 1,
    name: "Elite Men's Grooming",
    address: "123 Main Street, Downtown",
    rating: 4.8,
    image: "/src/assets/barbershop-1.jpg",
    phone: "(555) 123-4567",
    description: "Premium grooming services for the modern gentleman. Our experienced barbers provide traditional and contemporary cuts in a sophisticated atmosphere.",
    openingHours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    services: [
      { id: 1, name: "Classic Haircut", price: 35, duration: "45 min" },
      { id: 2, name: "Beard Trim", price: 25, duration: "30 min" },
      { id: 3, name: "Hot Towel Shave", price: 45, duration: "60 min" },
      { id: 4, name: "Hair Styling", price: 30, duration: "30 min" },
    ],
    barbers: [
      { id: 1, name: "Marcus Johnson", experience: "8 years", specialty: "Classic cuts" },
      { id: 2, name: "David Chen", experience: "5 years", specialty: "Modern styling" },
    ]
  },
  {
    id: 2,
    name: "Classic Barbershop",
    address: "456 Oak Avenue, Midtown",
    rating: 4.6,
    image: "/src/assets/barbershop-2.jpg",
    phone: "(555) 234-5678",
    description: "Traditional barbershop experience with old-school charm. We specialize in classic cuts and traditional shaving techniques.",
    openingHours: "Tue-Sat: 8AM-7PM, Sun: 10AM-5PM",
    services: [
      { id: 1, name: "Traditional Cut", price: 30, duration: "40 min" },
      { id: 2, name: "Straight Razor Shave", price: 40, duration: "50 min" },
      { id: 3, name: "Mustache Trim", price: 15, duration: "15 min" },
      { id: 4, name: "Hair Wash & Style", price: 25, duration: "25 min" },
    ],
    barbers: [
      { id: 3, name: "Tony Romano", experience: "15 years", specialty: "Traditional cuts" },
      { id: 4, name: "Jake Miller", experience: "7 years", specialty: "Beard styling" },
    ]
  },
  {
    id: 3,
    name: "Modern Edge Barbers",
    address: "789 Pine Street, Uptown",
    rating: 4.9,
    image: "/src/assets/barbershop-3.jpg",
    phone: "(555) 345-6789",
    description: "Contemporary barbershop offering cutting-edge styles and premium grooming services in a sleek, modern environment.",
    openingHours: "Mon-Sun: 9AM-9PM",
    services: [
      { id: 1, name: "Signature Cut", price: 50, duration: "60 min" },
      { id: 2, name: "Precision Fade", price: 40, duration: "45 min" },
      { id: 3, name: "Luxury Shave", price: 55, duration: "70 min" },
      { id: 4, name: "Eyebrow Grooming", price: 20, duration: "20 min" },
    ],
    barbers: [
      { id: 5, name: "Alex Rodriguez", experience: "10 years", specialty: "Modern fades" },
      { id: 6, name: "Sam Thompson", experience: "6 years", specialty: "Creative styling" },
    ]
  }
];

export const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
];