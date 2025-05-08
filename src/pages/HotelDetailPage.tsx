import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  Users,
  ParkingCircle,
  Tv,
  Utensils,
  AirVent,
  Heart,
  Share,
  ChevronRight,
  ChevronLeft,
  Calendar,
} from 'lucide-react';

// Mock data - in a real app, fetch this from an API
const hotelData = {
  id: '1',
  name: 'Grand Luxury Resort & Spa',
  location: 'Maldives, Indian Ocean',
  description: 'Nestled on a pristine private island in the heart of the Maldives, Grand Luxury Resort & Spa offers an unparalleled escape into paradise. With overwater villas, world-class dining, and direct access to vibrant coral reefs, every moment here becomes a treasured memory.',
  rating: 4.8,
  reviewCount: 246,
  price: 299,
  images: [
    'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ],
  amenities: [
    'Free WiFi',
    'Free Breakfast',
    'Swimming Pool',
    'Fitness Center',
    'Spa & Wellness',
    'Beachfront',
    'Restaurant',
    'Room Service',
    'Airport Shuttle',
    'Air Conditioning',
    'Bar/Lounge',
    'Concierge Service',
  ],
  rooms: [
    {
      id: 'room1',
      name: 'Deluxe Ocean View Suite',
      description: 'Spacious suite with panoramic ocean views, king-size bed, and private balcony.',
      price: 299,
      capacity: 2,
      beds: '1 King',
      size: 45,
      features: ['Ocean View', 'Private Balcony', 'Mini-bar', 'Air Conditioning'],
      images: [
        'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
    },
    {
      id: 'room2',
      name: 'Premium Water Villa',
      description: 'Exclusive overwater villa with direct ocean access, glass floor panels, and outdoor shower.',
      price: 499,
      capacity: 2,
      beds: '1 King',
      size: 65,
      features: ['Overwater', 'Direct Ocean Access', 'Glass Floor', 'Outdoor Shower'],
      images: [
        'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
    },
    {
      id: 'room3',
      name: 'Family Beach House',
      description: 'Spacious two-bedroom beach house ideal for families, with private pool and garden.',
      price: 699,
      capacity: 4,
      beds: '2 Kings',
      size: 120,
      features: ['Beachfront', 'Private Pool', 'Garden', 'Kitchen'],
      images: [
        'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
    },
  ],
  reviews: [
    {
      id: 'review1',
      user: {
        name: 'Emily Johnson',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'United States',
      },
      rating: 5,
      date: '2 weeks ago',
      comment: 'Absolutely stunning resort! The overwater villa was a dream come true, and the staff went above and beyond to make our stay unforgettable. The snorkeling right off our villa was incredible - we saw so many colorful fish and even a few reef sharks!',
      pros: 'Beautiful location, amazing staff, excellent food',
      cons: 'Expensive, but worth every penny',
    },
    {
      id: 'review2',
      user: {
        name: 'James Wilson',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Australia',
      },
      rating: 4,
      date: '1 month ago',
      comment: 'We had a fantastic honeymoon stay at Grand Luxury. The water villa was spectacular and the food at all restaurants was excellent. Only giving 4 stars because our seaplane transfer was delayed by several hours.',
      pros: 'Luxurious accommodations, great dining options, romantic atmosphere',
      cons: 'Transfer logistics could be improved',
    },
  ],
};

const HotelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? hotelData.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === hotelData.images.length - 1 ? 0 : prev + 1));
  };

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoom(roomId === selectedRoom ? null : roomId);
  };

  const handleBookNow = () => {
    console.log('Booking:', { roomId: selectedRoom, checkIn, checkOut, guests });
    alert('Booking functionality would be implemented here!');
  };

  const displayedAmenities = showAllAmenities
    ? hotelData.amenities
    : hotelData.amenities.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-16">
        {/* Hotel Image Gallery */}
        <section className="relative">
          <div className="h-[60vh] bg-gray-200 relative overflow-hidden">
            <img
              src={hotelData.images[activeImageIndex]}
              alt={hotelData.name}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>

            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            >
              <ChevronLeft className="h-6 w-6 text-navy-900" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            >
              <ChevronRight className="h-6 w-6 text-navy-900" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {hotelData.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeImageIndex === index ? 'bg-orange-500' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md">
              <Heart className="h-6 w-6 text-navy-900" />
            </button>
            <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md">
              <Share className="h-6 w-6 text-navy-900" />
            </button>
          </div>
        </section>

        {/* Hotel Info */}
        <section className="container mx-auto px-4 py-8 -mt-32 relative z-10">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(hotelData.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600 ml-2">
                    {hotelData.rating} ({hotelData.reviewCount} reviews)
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-navy-900 mb-2">{hotelData.name}</h1>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                  <span>{hotelData.location}</span>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-navy-900">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{hotelData.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-navy-900">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3">
                    {displayedAmenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        {amenity.includes('WiFi') && <Wifi className="h-5 w-5 mr-2 text-orange-500" />}
                        {amenity.includes('Breakfast') && <Coffee className="h-5 w-5 mr-2 text-orange-500" />}
                        {amenity.includes('Parking') && <ParkingCircle className="h-5 w-5 mr-2 text-orange-500" />}
                        {amenity.includes('TV') && <Tv className="h-5 w-5 mr-2 text-orange-500" />}
                        {amenity.includes('Restaurant') && <Utensils className="h-5 w-5 mr-2 text-orange-500" />}
                        {amenity.includes('Air') && <AirVent className="h-5 w-5 mr-2 text-orange-500" />}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  {hotelData.amenities.length > 8 && (
                    <button
                      onClick={() => setShowAllAmenities(!showAllAmenities)}
                      className="text-orange-500 font-medium mt-3 hover:underline"
                    >
                      {showAllAmenities ? 'Show Less' : 'Show All Amenities'}
                    </button>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-navy-900">${hotelData.price}</span>
                  <span className="text-gray-600"> / night</span>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                      Check In
                    </label>
                    <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 bg-white">
                      <Calendar className="h-5 w-5 text-gray-400 ml-3" />
                      <input
                        type="date"
                        id="check-in"
                        className="p-2 pl-2 w-full outline-none"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                      Check Out
                    </label>
                    <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 bg-white">
                      <Calendar className="h-5 w-5 text-gray-400 ml-3" />
                      <input
                        type="date"
                        id="check-out"
                        className="p-2 pl-2 w-full outline-none"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Guests
                    </label>
                    <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 bg-white">
                      <Users className="h-5 w-5 text-gray-400 ml-3" />
                      <select
                        id="guests"
                        className="p-2 pl-2 w-full outline-none appearance-none bg-transparent"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleBookNow}
                    disabled={!selectedRoom || !checkIn || !checkOut || !guests}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 rounded-md transition-colors"
                  >
                    Book Now
                  </button>
                </form>

                <div className="mt-4 text-sm text-center text-gray-500">
                  You won't be charged yet
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Rooms */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Available Rooms</h2>
          <div className="space-y-6">
            {hotelData.rooms.map((room) => (
              <div 
                key={room.id} 
                className={`border rounded-lg overflow-hidden transition-shadow ${
                  selectedRoom === room.id ? 'border-orange-500 shadow-lg' : 'border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-48 md:h-full">
                    <img 
                      src={room.images[0]} 
                      alt={room.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-navy-900 mb-2">{room.name}</h3>
                        <p className="text-gray-600 mb-4">{room.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-navy-900">${room.price}</div>
                        <div className="text-gray-500 text-sm">per night</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2 text-orange-500" />
                        <span>{room.capacity} Guests</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="font-medium mr-2">Beds:</span>
                        <span>{room.beds}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="font-medium mr-2">Size:</span>
                        <span>{room.size}m²</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-navy-900/10 text-navy-900"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleSelectRoom(room.id)}
                        className={`px-6 py-2 rounded-md transition-colors ${
                          selectedRoom === room.id 
                            ? 'bg-orange-500 text-white' 
                            : 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                        }`}
                      >
                        {selectedRoom === room.id ? 'Selected' : 'Select Room'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="container mx-auto px-4 py-12 border-t">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-navy-900">Guest Reviews</h2>
            <div className="flex items-center">
              <div className="flex mr-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(hotelData.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
              </div>
              <span className="font-medium">{hotelData.rating} · {hotelData.reviewCount} reviews</span>
            </div>
          </div>

          <div className="space-y-8">
            {hotelData.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-8">
                <div className="flex items-start">
                  <img 
                    src={review.user.image} 
                    alt={review.user.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold text-navy-900">{review.user.name}</h4>
                        <p className="text-gray-500 text-sm">{review.user.location}</p>
                      </div>
                      <div className="text-gray-500 text-sm">{review.date}</div>
                    </div>
                    
                    <div className="flex my-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{review.comment}</p>
                    
                    {(review.pros || review.cons) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        {review.pros && (
                          <div className="bg-green-50 p-3 rounded">
                            <p className="font-medium text-green-700 mb-1">What I liked:</p>
                            <p className="text-green-700">{review.pros}</p>
                          </div>
                        )}
                        {review.cons && (
                          <div className="bg-red-50 p-3 rounded">
                            <p className="font-medium text-red-700 mb-1">What could be better:</p>
                            <p className="text-red-700">{review.cons}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 border border-navy-900 text-navy-900 rounded-md hover:bg-navy-900 hover:text-white transition-colors font-medium">
              Show All {hotelData.reviewCount} Reviews
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetailPage;