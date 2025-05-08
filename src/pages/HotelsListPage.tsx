import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';
import { Search, MapPin, Calendar, Users, Filter, SlidersHorizontal, Check, Star, ChevronRight } from 'lucide-react';

// Mock data for hotels
const hotelsList = [
  {
    id: '1',
    name: 'Grand Luxury Resort & Spa',
    location: 'Maldives',
    rating: 4.8,
    reviewCount: 246,
    price: 299,
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    features: ['WiFi', 'Breakfast', 'Bathroom', '4 Guests']
  },
  {
    id: '2',
    name: 'Mountain View Hideaway',
    location: 'Switzerland',
    rating: 4.7,
    reviewCount: 189,
    price: 199,
    image: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    features: ['WiFi', 'Breakfast', 'Bathroom', '2 Guests']
  },
  {
    id: '3',
    name: 'Beachfront Paradise Hotel',
    location: 'Hawaii',
    rating: 4.9,
    reviewCount: 312,
    price: 349,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    features: ['WiFi', 'Breakfast', 'Bathroom', '3 Guests']
  },
  {
    id: '4',
    name: 'Urban Boutique Hotel',
    location: 'New York',
    rating: 4.6,
    reviewCount: 178,
    price: 249,
    image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    features: ['WiFi', 'Bathroom', '2 Guests']
  },
  {
    id: '5',
    name: 'Riverside Retreat',
    location: 'Bali',
    rating: 4.5,
    reviewCount: 156,
    price: 179,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    features: ['WiFi', 'Pool', 'Bathroom', '2 Guests']
  },
  {
    id: '6',
    name: 'Historic Palace Hotel',
    location: 'Venice',
    rating: 4.7,
    reviewCount: 203,
    price: 279,
    image: 'https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    features: ['WiFi', 'Breakfast', 'Bathroom', '3 Guests']
  }
];

// Filter options
const amenities = [
  'WiFi', 'Breakfast', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Parking', 'Air Conditioning', 'Pet-Friendly'
];

const HotelsListPage: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const handleAmenityToggle = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log({ location, checkIn, checkOut, guests, priceRange, selectedAmenities, ratingFilter });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-navy-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Your Perfect Stay</h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
                Discover and book the ideal hotel for your next adventure, with thousands of options worldwide
              </p>
            </div>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500">
                    <MapPin className="h-5 w-5 text-gray-400 ml-3" />
                    <input
                      type="text"
                      id="location"
                      placeholder="Where are you going?"
                      className="p-2 pl-2 w-full outline-none"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                    Check In
                  </label>
                  <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500">
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

                <div className="relative">
                  <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                    Check Out
                  </label>
                  <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500">
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Guests
                    </label>
                    <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500">
                      <Users className="h-5 w-5 text-gray-400 ml-3" />
                      <select
                        id="guests"
                        className="p-2 pl-2 w-full outline-none appearance-none bg-transparent"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                      >
                        <option value="">Guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center self-end"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </button>
                </div>
              </form>
              
              <div className="mt-6 border-t pt-6">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center text-navy-900 font-medium hover:text-orange-500 transition-colors"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                
                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                    <div>
                      <h3 className="font-medium text-navy-900 mb-3 flex items-center">
                        <SlidersHorizontal className="h-5 w-5 mr-2" />
                        Price Range
                      </h3>
                      <div className="px-4">
                        <div className="flex justify-between mb-2">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1000"
                          step="50"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full accent-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-navy-900 mb-3">Rating</h3>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => setRatingFilter(ratingFilter === rating ? null : rating)}
                            className={`flex items-center px-3 py-1.5 rounded ${
                              ratingFilter === rating ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex mr-2">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < rating
                                        ? ratingFilter === rating
                                          ? 'text-white fill-white'
                                          : 'text-yellow-400 fill-yellow-400'
                                        : ratingFilter === rating
                                        ? 'text-white/30'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                            </div>
                            <span>{rating}+ Stars</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-navy-900 mb-3">Amenities</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {amenities.map((amenity) => (
                          <button
                            key={amenity}
                            onClick={() => handleAmenityToggle(amenity)}
                            className={`flex items-center px-3 py-1.5 rounded text-left ${
                              selectedAmenities.includes(amenity) 
                                ? 'bg-navy-900 text-white' 
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center mr-2 ${
                              selectedAmenities.includes(amenity)
                                ? 'bg-orange-500 border-orange-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedAmenities.includes(amenity) && (
                                <Check className="h-3 w-3 text-white" />
                              )}
                            </div>
                            <span>{amenity}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Hotels List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-navy-900">
                {hotelsList.length} hotels found
              </h2>
              <div>
                <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="recommended">Recommended</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotelsList.map((hotel) => (
                <HotelCard key={hotel.id} {...hotel} />
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <div className="flex space-x-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors">
                  3
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HotelsListPage;