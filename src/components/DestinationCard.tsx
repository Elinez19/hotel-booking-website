import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  name: string;
  count: number;
  image: string;
  slug: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, count, image, slug }) => {
  return (
    <Link to={`/destination/${slug}`} className="block group">
      <div className="relative rounded-lg overflow-hidden h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/80"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1 group-hover:text-orange-400 transition-colors">{name}</h3>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{count} Hotels</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;