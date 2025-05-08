import React from 'react';
import { Link } from 'react-router-dom';

interface RoomTypeCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  to: string;
}

const RoomTypeCard: React.FC<RoomTypeCardProps> = ({ icon, title, count, to }) => {
  return (
    <Link to={to} className="group">
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
        <div className="mb-4 bg-navy-900/5 p-4 rounded-full group-hover:bg-orange-500/10 transition-colors">
          <div className="text-navy-900 group-hover:text-orange-500 transition-colors">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-1 text-navy-900 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">
          {count} {count === 1 ? 'Property' : 'Properties'}
        </p>
      </div>
    </Link>
  );
};

export default RoomTypeCard;