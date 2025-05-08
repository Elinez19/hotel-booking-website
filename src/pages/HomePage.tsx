import React from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import RoomTypeCard from '../components/RoomTypeCard';
import HotelCard from '../components/HotelCard';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';
import { Building, Home, Landmark, Castle, Hotel, Palmtree as PalmTree, ChevronLeft, ChevronRight, Award, Clock, Glasses, Wallet } from 'lucide-react';

const featuredHotels = [
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
  }
];

const destinations = [
  {
    name: 'New York',
    count: 125,
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'new-york'
  },
  {
    name: 'Paris',
    count: 89,
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'paris'
  },
  {
    name: 'Tokyo',
    count: 112,
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'tokyo'
  },
  {
    name: 'Bali',
    count: 78,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'bali'
  }
];

const testimonials = [
  {
    name: 'Emily Johnson',
    location: 'United States',
    rating: 5,
    comment: 'The best hotel booking experience I\'ve ever had. The room was exactly as pictured and the staff was incredibly accommodating.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'James Wilson',
    location: 'Australia',
    rating: 5,
    comment: 'Luxstay made our honeymoon unforgettable. We got a free upgrade and the concierge service was exceptional.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Sophia Chen',
    location: 'Singapore',
    rating: 4,
    comment: 'Great selection of luxury hotels at reasonable prices. Will definitely use this service again for my next trip.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: '85vh' }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
          backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
        }}>
          <span className="w-full h-full absolute opacity-50 bg-navy-900"></span>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h1 className="text-white font-semibold text-4xl md:text-5xl mb-4">
                  Find Your Dream Luxury Stay.
                </h1>
                <p className="text-white opacity-80 text-lg mb-12 leading-relaxed">
                  Discover handpicked hotels, exclusive amenities, and personalized service. 
                  Your perfect getaway is just a few clicks away.
                </p>
                <div className="flex gap-4">
                  <a href="#explore" className="bg-orange-500 text-white font-medium px-6 py-3 rounded-md hover:bg-orange-600 transition-colors">
                    Explore Now
                  </a>
                  <a href="#how-it-works" className="bg-transparent text-white border border-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                    How It Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Bar */}
      <SearchBar />
      
      {/* Room Types */}
      <section id="explore" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Explore Accommodation Types</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From luxury suites and boutique hotels to cozy villas and apartments, 
              find the perfect accommodation type for your next journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <RoomTypeCard 
              icon={<Building className="h-8 w-8" />} 
              title="Hotels" 
              count={532} 
              to="/category/hotels" 
            />
            <RoomTypeCard 
              icon={<Home className="h-8 w-8" />} 
              title="Apartments" 
              count={217} 
              to="/category/apartments" 
            />
            <RoomTypeCard 
              icon={<Landmark className="h-8 w-8" />} 
              title="Resorts" 
              count={143} 
              to="/category/resorts" 
            />
            <RoomTypeCard 
              icon={<Castle className="h-8 w-8" />} 
              title="Villas" 
              count={98} 
              to="/category/villas" 
            />
            <RoomTypeCard 
              icon={<Hotel className="h-8 w-8" />} 
              title="Cottages" 
              count={65} 
              to="/category/cottages" 
            />
            <RoomTypeCard 
              icon={<PalmTree className="h-8 w-8" />} 
              title="Cabins" 
              count={41} 
              to="/category/cabins" 
            />
          </div>
        </div>
      </section>
      
      {/* Featured Hotels */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-2">Featured Hotels</h2>
              <p className="text-gray-600">
                Handpicked accommodations to make your stay memorable
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a
              href="/hotels"
              className="inline-block px-6 py-3 border border-navy-900 text-navy-900 rounded-md hover:bg-navy-900 hover:text-white transition-colors font-medium"
            >
              View All Hotels
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose LuxStay</h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              We're dedicated to providing you with the best booking experience possible, 
              with personalized service and attention to every detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-navy-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-300">
                We promise the best rates and will match any lower price you find elsewhere.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-300">
                Our team is available around the clock to assist with any questions or concerns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Glasses className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
              <p className="text-gray-300">
                Every property is handpicked and quality-checked to ensure your satisfaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wallet className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Payment</h3>
              <p className="text-gray-300">
                Multiple payment options and free cancellation on most rooms for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our most sought-after destinations and find your next dream getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it—hear from our satisfied guests around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Get Exclusive Offers</h2>
              <p className="text-white/80 max-w-lg">
                Subscribe to our newsletter and be the first to know about special promotions, new destinations, and travel tips.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 max-w-md">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white text-navy-900"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-navy-900 text-white font-medium rounded-md hover:bg-navy-800 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-2 text-white/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;