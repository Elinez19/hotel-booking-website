import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, rating, comment, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <Quote className="absolute top-4 right-4 text-gray-200 h-10 w-10" />
      
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-navy-900">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
      </div>
      
      <p className="text-gray-600 italic">{comment}</p>
    </div>
  );
};

export default TestimonialCard;