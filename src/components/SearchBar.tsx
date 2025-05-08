import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hotel');
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, guests, type: activeTab });
    // Handle search functionality
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-5xl mx-auto -mt-16 relative z-10">
      <div className="flex gap-4 mb-4 border-b">
        <button
          className={`pb-2 px-2 font-medium transition-colors ${
            activeTab === 'hotel'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('hotel')}
        >
          Hotels
        </button>
        <button
          className={`pb-2 px-2 font-medium transition-colors ${
            activeTab === 'apartment'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('apartment')}
        >
          Apartments
        </button>
        <button
          className={`pb-2 px-2 font-medium transition-colors ${
            activeTab === 'villa'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('villa')}
        >
          Villas
        </button>
      </div>

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
    </div>
  );
};

export default SearchBar;