import { useState, useMemo } from 'react';
import bgImage from '../assets/schedule/bg1.jpg';
import cardImage from '../assets/schedule/card.jpg';

const eventData = [
  { id: 1, day: 0, name: 'Inauguration Ceremony', club: 'Organizing Committee', time: '10:00 AM', venue: 'Main Auditorium' },
  { id: 2, day: 0, name: 'Cultural Night', club: 'Cultural Club', time: '6:00 PM', venue: 'Open Air Theatre' },
  { id: 3, day: 1, name: 'Coding Competition', club: 'Tech Club', time: '9:00 AM', venue: 'Computer Lab 1' },
  { id: 4, day: 1, name: 'Dance Competition', club: 'Cultural Club', time: '2:00 PM', venue: 'Main Stage' },
  { id: 5, day: 1, name: 'Photography Workshop', club: 'Photography Club', time: '11:00 AM', venue: 'Seminar Hall' },
  { id: 6, day: 2, name: 'Hackathon Finals', club: 'Tech Club', time: '10:00 AM', venue: 'Innovation Center' },
  { id: 7, day: 2, name: 'Music Concert', club: 'Music Club', time: '5:00 PM', venue: 'Open Air Theatre' },
  { id: 8, day: 2, name: 'Debate Competition', club: 'Literary Club', time: '1:00 PM', venue: 'Conference Hall' },
  { id: 9, day: 3, name: 'Fashion Show', club: 'Fashion Club', time: '3:00 PM', venue: 'Main Stage' },
  { id: 10, day: 3, name: 'Quiz Competition', club: 'Quiz Club', time: '11:00 AM', venue: 'Auditorium' },
  { id: 11, day: 3, name: 'Gaming Tournament', club: 'Gaming Club', time: '9:00 AM', venue: 'Gaming Arena' },
  { id: 12, day: 4, name: 'Prize Distribution', club: 'Organizing Committee', time: '4:00 PM', venue: 'Main Auditorium' },
  { id: 13, day: 4, name: 'Closing Ceremony', club: 'Organizing Committee', time: '6:00 PM', venue: 'Main Auditorium' },
  { id: 14, day: 4, name: 'DJ Night', club: 'Cultural Club', time: '8:00 PM', venue: 'Open Air Theatre' },
  { id: 13, day: 4, name: 'Closing Ceremony', club: 'Organizing Committee', time: '6:00 PM', venue: 'Main Auditorium' },
  { id: 14, day: 4, name: 'DJ Night', club: 'Cultural Club', time: '8:00 PM', venue: 'Open Air Theatre' },
  { id: 13, day: 4, name: 'Closing Ceremony', club: 'Organizing Committee', time: '6:00 PM', venue: 'Main Auditorium' },
  { id: 14, day: 4, name: 'DJ Night', club: 'Cultural Club', time: '8:00 PM', venue: 'Open Air Theatre' },
  { id: 13, day: 4, name: 'Closing Ceremony', club: 'Organizing Committee', time: '6:00 PM', venue: 'Main Auditorium' },
  { id: 14, day: 4, name: 'DJ Night', club: 'Cultural Club', time: '8:00 PM', venue: 'Open Air Theatre' },
  { id: 13, day: 4, name: 'Closing Ceremony', club: 'Organizing Committee', time: '6:00 PM', venue: 'Main Auditorium' },
  { id: 14, day: 4, name: 'DJ Night', club: 'Cultural Club', time: '8:00 PM', venue: 'Open Air Theatre' },
];

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = useMemo(() => {
    return eventData.filter(event => {
      if (event.day !== selectedDay) return false;

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          event.name.toLowerCase().includes(query) ||
          event.club.toLowerCase().includes(query) ||
          event.time.toLowerCase().includes(query) ||
          event.venue.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedDay, searchQuery]);

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-[JustFontime] md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Event Schedule
          </h1>
        </div>

        {/* Day Selector */}
        <div className="flex gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 flex-wrap">
          {[0, 1, 2, 3, 4].map(day => (
            <button
              key={day}
              className={`px-4 py-2 sm:px-6 md:px-8 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 font-[JustFontime] relative overflow-hidden group ${
                selectedDay === day
                  ? 'bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 border-transparent'
                  : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 border-yellow-300/50 hover:from-yellow-500 hover:to-orange-500 hover:border-orange-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-400/40'
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <span className="relative z-10">Day {day}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
          <input
            type="text"
            className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-10 sm:pr-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 focus:border-purple-400/50 focus:outline-none focus:ring-4 focus:ring-purple-400/20 text-sm sm:text-base transition-all text-white placeholder-gray-300 shadow-lg"
            placeholder="Search by event name, club, time, or venue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg 
            className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 mt-8" style={{ perspective: '1000px' }}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div 
                key={event.id} 
                className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/40 active:scale-95 md:active:scale-100 transition-all duration-500 border border-white/20 group hover:md:shadow-2xl"
                style={{ 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  transform: 'rotateX(0deg) rotateY(0deg)',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  // Only apply 3D effect on medium screens and larger
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.transform = 'rotateX(3deg) rotateY(3deg) translateY(-10px) scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
                  }
                }}
                onTouchStart={(e) => {
                  // Simple scale effect on mobile touch
                  e.currentTarget.style.transform = 'scale(0.98)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {/* Card Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={cardImage} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {event.time}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{event.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="w-5 h-5 text-orange-500 flex-shrink-0"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span className="text-sm">{event.club}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="w-5 h-5 text-orange-500 flex-shrink-0"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="text-sm">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-white">
              <p className="text-2xl mb-2">No events found for Day {selectedDay}</p>
              {searchQuery && <p className="text-gray-300">Try adjusting your search query</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
