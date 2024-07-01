
import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import * as XLSX from 'xlsx';
import './Home.css';

const Home = () => {
  const weekDay = { 0: "Jan", 1: "Feb", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec" };
  const monhtset = weekDay[new Date().getMonth()];
  const [events, setEvents] = useState([]);
  const [todayDate, setTodayDate] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [mon, setMonth] = useState(monhtset);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [yearFilter, monthFilter]);

  //chNGES
  const fetchEvents = async () => {
    try {
      const response = await fetch('https://swamikendramanagment.onrender.com/v1/naivadya/getShedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          year: yearFilter,
          month: monthFilter,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();
      if (Array.isArray(responseData.data)) {
        setEvents(responseData.data);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleYearChange = (event) => {
    setYearFilter(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonthFilter(event.target.value);
    monthHandel(event.target.value);
  };

  let monthHandel = (event) => {
    setMonth(weekDay[event]);
  };

  const handleSearch = () => {
    fetchEvents();
  };

  // useEffect(() => {
  //   fetchEvents();
  // }, [fetchEvents]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setTodayDate(formattedDate);
  }, []);

  const handleDownload = () => {
    
    const header = [['day', 'dayname', 'data'], ['', '', 'name', 'mobail', 'time']];
    const merges = [{ s: { r: 0, c: 2 }, e: { r: 0, c: 4 } }];
    const data = events.flatMap(event => 
      event.data.map(item => ({
        day: event.day,
        dayname: event.dayname,
        name: item.name,
        mobail: item.mobail,
        time: item.time
      }))
    );

   
    const worksheet = XLSX.utils.json_to_sheet([], { skipHeader: true });
    XLSX.utils.sheet_add_aoa(worksheet, header, { origin: 'A1' });
    worksheet['!merges'] = merges;
    XLSX.utils.sheet_add_json(worksheet, data, { origin: 'A3' });

    
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Events');

 
    XLSX.writeFile(workbook, 'events.xlsx');
  };

  return (
    <>
    <div className="home-container">
      {/* <Header /> */}
      <h2>{mon}</h2>
      <h1 className="title">स्वामी समर्थांची आरती Calendar</h1>
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
        <button onClick={handleDownload}>Download Excel</button>
      </div>
     
      {/* <Footer /> */}
    </div>
    <Calendar events={events} todayDate={todayDate} />
    </>
  );
};

export default Home;

