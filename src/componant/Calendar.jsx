import React from 'react';
import './Calendar.css';

const Calendar = ({ events, todayDate }) => {
  const isToday = (date) => {
    return date === todayDate;
  };

  const getDayClass = (index) => {
    const classes = ['calendar-day-1', 'calendar-day-2', 'calendar-day-3', 'calendar-day-4', 'calendar-day-5'];
    return classes[index % classes.length];
  };

  return (
    <div className="calendar-container">
      {events.map((event, index) => (
        <div
          key={event.day}
          className={`calendar-day ${getDayClass(index)} ${isToday(event.day) ? 'highlight' : ''}`}
        >
          <div className="day-number">{event.day}</div>
          <div className="day-name">{event.dayname}</div>
          <div className="event-cards">
            {event.data.map((item, index) => (
              <div key={index} className={`event-card event-${index % 2 === 0 ? 'even' : 'odd'}`}>
                <p className="event-name">{item.name}</p>
                <p className="event-time">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;







// // ./components/Calendar.js

// import React from 'react';
// import './Calendar.css'; // Import CSS file for Calendar styles

// const Calendar = ({ events, todayDate, yearFilter, monthFilter }) => {
//     // Function to check if a date matches todayDate
//     const isToday = (date) => {
//         return date === todayDate;
//     };

//     // Function to filter events based on year and month
//     const filterEvents = (event) => {
//         if (!yearFilter && !monthFilter) {
//             return true; // No filters applied
//         }

//         const eventDate = new Date(event.year, event.month, event.day);
//         const eventYear = eventDate.getFullYear();
//         const eventMonth = eventDate.getMonth();

//         const matchesYear = !yearFilter || eventYear.toString() === yearFilter;
//         const matchesMonth = !monthFilter || eventMonth.toString() === monthFilter;

//         return matchesYear && matchesMonth;
//     };

//     return (
//         <div className="calendar-container">
//             {events.filter(filterEvents).map((event) => (
//                 <div key={event.day} className={`calendar-day ${isToday(event.day) ? 'highlight' : ''}`}>
//                     <div className="day-number">{event.day}</div>
//                     <div className="day-name">{event.dayname}</div>
//                     <div className="event-cards">
//                         {event.data.map((item, index) => (
//                             <div key={index} className="event-card">
//                                 <p className="event-name">{item.name}</p>

//                                 <p className="event-time">{item.time}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Calendar;

