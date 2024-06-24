
import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    const weekDay = { 0: "Jan", 1: "Feb", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec" };
const monhtset=weekDay[new Date().getMonth()];
    const [events, setEvents] = useState([]);
    const [todayDate, setTodayDate] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [monthFilter, setMonthFilter] = useState('');
   
    const [mon, setMonth] = useState(monhtset);

    // Fetch initial events data on component mount
    useEffect(() => {
        fetchEvents();
    }, []);

    // Fetch events based on filters whenever they change
    useEffect(() => {
        fetchEvents();
    }, [yearFilter, monthFilter]);

    // Function to fetch events based on filters
    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:3000/v1/naivadya/getShedule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Adjust this according to your API's expected request body
                    year: yearFilter,
                    month: monthFilter,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const responseData = await response.json();
            // Assuming your response data structure is { data: [] }
            if (Array.isArray(responseData.data)) {
                setEvents(responseData.data);
            } else {
                throw new Error('Invalid data format received');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
   
   
        
      
  
   
    

    // Function to handle year filter change
    const handleYearChange = (event) => {
        setYearFilter(event.target.value);
    };

    // Function to handle month filter change
    const handleMonthChange = (event) => {
        setMonthFilter(event.target.value);
        monthHandel(event.target.value)
    };
let monthHandel=(event)=>{
   
setMonth(weekDay[event])
}
    // Function to handle search button click
    const handleSearch = () => {
        fetchEvents();
    };

    // Fetch today's date for reference
    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Get YYYY-MM-DD format
        setTodayDate(formattedDate);
    }, []);

    return (
        <div className="container text-center">
            
         <h2>{mon}</h2>   <h1> स्वामी समर्थांची आरती Calendar</h1>
            <div className="filters">
                <label htmlFor="year">Year:</label>
                <input
                    type="text"
                    id="year"
                    value={yearFilter}
                    onChange={handleYearChange}
                    placeholder="Enter year"
                />

                <label htmlFor="month">Month:</label>
                <select
                    id="month"
                    value={monthFilter}
                    onChange={handleMonthChange}
                >
                    <option value="">Select Month</option>
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                </select>

                <button onClick={handleSearch}>Search</button>
            </div><br></br>
            <Calendar events={events} todayDate={todayDate} />
          
        </div>
    );
};

export default Home;
