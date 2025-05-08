import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'New York',
    count: 125,
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'new-york',
    description: 'Experience the vibrant culture and iconic landmarks of the Big Apple'
  },
  {
    name: 'Paris',
    count: 89,
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'paris',
    description: 'Discover the romance and charm of the City of Light'
  },
  {
    name: 'Tokyo',
    count: 112,
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'tokyo',
    description: 'Immerse yourself in the fascinating blend of tradition and modernity'
  },
  {
    name: 'Bali',
    count: 78,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'bali',
    description: 'Relax in paradise with pristine beaches and lush landscapes'
  },
  {
    name: 'Dubai',
    count: 95,
    image: 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'dubai',
    description: 'Experience luxury and innovation in this modern desert metropolis'
  },
  {
    name: 'Rome',
    count: 83,
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'rome',
    description: 'Walk through history in the Eternal City'
  },
  {
    name: 'Sydney',
    count: 67,
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'sydney',
    description: 'Explore the stunning harbor city with iconic landmarks'
  },
  {
    name: 'Santorini',
    count: 45,
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'santorini',
    description: 'Experience the magic of Greek island life'
  }
];

const DestinationsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-navy-900">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Popular Destinations</h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Discover our handpicked selection of world-class destinations
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden h-96">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/80"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-white/80 mb-4">{destination.description}</p>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{destination.count} Hotels</span>
                      </div>
                    </div>
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

export default DestinationsPage;