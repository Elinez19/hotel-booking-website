export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountPrice?: number;
  images: string[];
  features: string[];
  amenities: string[];
  rooms: Room[];
  reviews: Review[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  capacity: number;
  beds: string;
  size: number;
  features: string[];
  images: string[];
}

export interface Review {
  id: string;
  user: {
    name: string;
    image: string;
    location: string;
  };
  rating: number;
  date: string;
  comment: string;
  pros?: string;
  cons?: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  hotelCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Booking {
  id: string;
  hotelId: string;
  roomId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  favorites: string[];
  bookings: string[];
}