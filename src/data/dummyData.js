export interface Barber {
  id: string;
  name: string;
  experience: string;
  rating: number;
  avatar: string;
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

export interface Barbershop {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  rating: number;
  totalReviews: number;
  image: string;
  services: Service[];
  barbers: Barber[];
  openHours: string;
}

export interface Booking {
  id: string;
  shopId: string;
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export const services: Service[] = [
  {
    id: "1",
    name: "Classic Haircut",
    duration: 45,
    price: 35,
    description: "Traditional scissor cut with styling"
  },
  {
    id: "2",
    name: "Beard Trim",
    duration: 30,
    price: 25,
    description: "Professional beard shaping and grooming"
  },
  {
    id: "3",
    name: "Hair & Beard Combo",
    duration: 75,
    price: 55,
    description: "Complete grooming package"
  },
  {
    id: "4",
    name: "Hot Towel Shave",
    duration: 60,
    price: 45,
    description: "Traditional straight razor shave with hot towel"
  },
  {
    id: "5",
    name: "Hair Styling",
    duration: 30,
    price: 30,
    description: "Professional styling and finishing"
  },
  {
    id: "6",
    name: "Hair Wash & Cut",
    duration: 60,
    price: 40,
    description: "Shampoo, cut, and style service"
  }
];

export const barbers: Barber[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    experience: "8 years",
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "2",
    name: "David Rodriguez",
    experience: "12 years",
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "3",
    name: "Anthony Miller",
    experience: "6 years",
    rating: 4.7,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "4",
    name: "James Wilson",
    experience: "15 years",
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  }
];

export const barbershops: Barbershop[] = [
  {
    id: "1",
    name: "The Gentleman's Cut",
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    email: "info@gentlemanscut.com",
    rating: 4.8,
    totalReviews: 156,
    image: "barbershop-1",
    openHours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
    services: services.slice(0, 4),
    barbers: barbers.slice(0, 2)
  },
  {
    id: "2",
    name: "Classic Cuts & Shaves",
    address: "456 Oak Avenue, Midtown",
    phone: "(555) 234-5678",
    email: "hello@classiccuts.com",
    rating: 4.7,
    totalReviews: 203,
    image: "barbershop-2",
    openHours: "Mon-Fri: 8:00 AM - 7:00 PM, Sat: 9:00 AM - 6:00 PM",
    services: services.slice(1, 5),
    barbers: [barbers[1], barbers[2]]
  },
  {
    id: "3",
    name: "Modern Barber Co.",
    address: "789 Cedar Street, Uptown",
    phone: "(555) 345-6789",
    email: "contact@modernbarber.com",
    rating: 4.9,
    totalReviews: 89,
    image: "barbershop-3",
    openHours: "Tue-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 5:00 PM",
    services: [services[0], services[2], services[4], services[5]],
    barbers: [barbers[0], barbers[3]]
  },
  {
    id: "4",
    name: "Elite Barbershop",
    address: "321 Elm Street, West End",
    phone: "(555) 456-7890",
    email: "bookings@elitebarbershop.com",
    rating: 4.6,
    totalReviews: 127,
    image: "barbershop-1",
    openHours: "Mon-Sat: 9:00 AM - 7:00 PM",
    services: services,
    barbers: barbers
  }
];

export const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
];