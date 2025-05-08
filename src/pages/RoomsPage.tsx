import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Bed, Users, Bath, Wifi, Coffee, Tv } from 'lucide-react';

const roomTypes = [
  {
    id: '1',
    name: 'Deluxe King Room',
    description: 'Spacious room with king-size bed and city view',
    price: 199,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    amenities: ['King Bed', '2 Guests', 'City View', 'Free WiFi', 'Breakfast'],
    size: '32m²'
  },
  {
    id: '2',
    name: 'Executive Suite',
    description: 'Luxury suite with separate living area and panoramic views',
    price: 349,
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    amenities: ['King Bed', '2 Guests', 'Ocean View', 'Free WiFi', 'Breakfast'],
    size: '48m²'
  },
  {
    id: '3',
    name: 'Family Room',
    description: 'Perfect for families with two queen beds and extra space',
    price: 279,
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    amenities: ['2 Queen Beds', '4 Guests', 'Garden View', 'Free WiFi', 'Breakfast'],
    size: '40m²'
  },
  {
    id: '4',
    name: 'Premium Ocean View',
    description: 'Stunning ocean views with premium amenities',
    price: 399,
    image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    amenities: ['King Bed', '2 Guests', 'Ocean View', 'Free WiFi', 'Breakfast'],
    size: '38m²'
  }
];

const RoomsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-navy-900">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Rooms & Suites</h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Experience luxury and comfort in our carefully designed rooms and suites
              </p>
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roomTypes.map((room) => (
                <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64">
                    <img 
                      src={room.image} 
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                      From ${room.price}/night
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-navy-900 mb-2">{room.name}</h3>
                    <p className="text-gray-600 mb-4">{room.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Bed className="h-5 w-5 text-orange-500 mr-2" />
                        <span>{room.amenities[0]}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 text-orange-500 mr-2" />
                        <span>{room.amenities[1]}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Bath className="h-5 w-5 text-orange-500 mr-2" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Wifi className="h-5 w-5 text-orange-500 mr-2" />
                        <span>{room.amenities[3]}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Coffee className="h-5 w-5 text-orange-500 mr-2" />
                        <span>{room.amenities[4]}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Tv className="h-5 w-5 text-orange-500 mr-2" />
                        <span>Smart TV</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-navy-900 text-white py-3 rounded-md hover:bg-navy-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoomsPage;