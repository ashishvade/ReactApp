

import React, { useState, useEffect } from 'react';

import './AllUser.css'; 

function Alluser() {
  const [getAllUser, setgetAllUser] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: '',
    mobail: 0, // assuming this is a number
    dayName: '',
    naivadyaType: '',
    time: '',
    naivadyaId: '' // Added naivadyaId to selectedUser state
  });

  const handelUser = async () => {
    const res = await fetch("http://localhost:5009/v1/naivadya/getAllSevekari");
    const data = await res.json();
    setgetAllUser(data.data);
  };

  useEffect(() => {
    handelUser();
  }, []);

  const handleUpdateClick = (user) => {
    setSelectedUser({
      ...user,
      naivadyaId: user.naivadyaId // Set naivadyaId from user object to selectedUser
    });
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedUser({
      name: '',
      mobail: 0,
      dayName: '',
      naivadyaType: '',
      time: '',
      naivadyaId: '' // Reset naivadyaId when closing popup
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({
      ...selectedUser,
      [name]: name === 'mobail' ? parseInt(value) : value, // convert mobail to number
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://swamikendramanagment.onrender.com/v1/naivadya/updateNaivadya", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedUser),
    });

    if (response.ok) {
      alert("User updated successfully!");
      handelUser(); // Refresh the user list after update
      handleClosePopup();
    } else {
      alert("Failed to update user.");
    }
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Day</th>
            <th scope="col">Naivadya Type</th>
            <th scope="col">Aarati Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {getAllUser.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.mobail}</td>
              <td>{user.dayName}</td>
              <td>{user.naivadyaType}</td>
              <td>{user.time}</td>
              <td>
                <button 
                  onClick={() => handleUpdateClick(user)} 
                  className="btn btn-sm btn-primary mx-2"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={handleClosePopup}>&times;</span>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={selectedUser.name} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-group">
                <label>Mobile:</label>
                <input 
                  type="number" 
                  name="mobail" 
                  value={selectedUser.mobail} 
                  onChange={handleInputChange} 
                />
              </div>
             
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Alluser;
