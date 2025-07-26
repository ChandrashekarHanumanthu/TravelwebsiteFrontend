import React, { useEffect, useState } from 'react';
import './Hotpicks.css'; // Import the CSS file

const Hotpicks = () => {
  const [hotpicks, setHotpicks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/hotpicks')
      .then(response => response.json())
      .then(data => setHotpicks(data))
      .catch(error => console.error('Error fetching hotpicks:', error));
  }, []);

  return (
    <div className='hot-container'>
      <h2 className="hotpicks-title">Hotpicks</h2>
      <p>Flat 30% off On Holiday Packages</p>
      <div className="hotpicks-container">
        {hotpicks.map(pick => (
          <div key={pick.id} className="hotpick-card">
            <div 
              className="hotpick-image" 
              style={{ backgroundImage: `url(${pick.imageUrl})` }}
            >
              <div className="hotpick-info">
                <h3 className='hot-name'>{pick.name}</h3>
                <p className='hot-price'>₹{pick.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotpicks;
