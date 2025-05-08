import React from 'react';
import { Star, MapPin, Wifi, Coffee, Bath, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  image: string;
  features: string[];
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  name,
  location,
  rating,
  reviewCount,
  price,
  image,
  features,
}) => {
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ));
  };

  const renderFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'breakfast':
        return <Coffee className="h-4 w-4" />;
      case 'bathroom':
        return <Bath className="h-4 w-4" />;
      case 'guests':
        return <Users className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
          ${price}/night
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex">{renderStars()}</div>
          <span className="text-sm text-gray-500 ml-2">{reviewCount} reviews</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-1 text-navy-900">{name}</h3>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="border-t border-gray-100 pt-3 mb-3">
          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600 text-sm">
                {renderFeatureIcon(feature)}
                <span className="ml-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg text-navy-900">${price}</span>
          <Link
            to={`/hotel/${id}`}
            className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white rounded-md transition-colors text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;