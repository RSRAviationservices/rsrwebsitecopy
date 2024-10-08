import React, { useState,useEffect } from 'react';
import './Team.css';

const teamMembers = [
      { name: 'SURESH RAHANGDALE', department: 'Directors', photo: 'Directors/1.png', bio: 'Experienced Director' },
      { name: 'REENA PAIGUDE', department: 'Directors', photo: 'Directors/2.png', bio: 'Expert in Strategic Management' },
      { name: 'SARIKA MALUSARE', department: 'General Manager', photo: 'GeneralManager/4.png', bio: 'General Manager overseeing operations' },
      { name: 'NARENDRA GENOLIA', department: 'General Manager', photo: 'GeneralManager/3.png', bio: 'General Manager' },
      { name: 'MRUNALI DHARGAVE', department: 'Sales', photo: 'Sales/5.png', bio: 'Sales manager' },
      { name: 'HARSHADA GAVKAR', department: 'Finance & Accounts', photo: 'Finance/8.png', bio: 'Finance and accounting specialist' },
      { name: 'SWAPNIL MISHRA', department: 'Operations', photo: 'Operations/12.png', bio: 'Operations lead' },
      { name: 'SHUBHAM RAHANGDALE', department: 'Sales', photo: 'Sales/6.png', bio: 'Sales executive' },
      { name: 'ANANDKUMAR YADAV', department: 'Sales Executive', photo: 'SalesExecutes/9.png', bio: 'Sales executive' },
      { name: 'MADHURI BADWAIK', department: 'Sales Executive', photo: 'SalesExecutes/10.png', bio: 'Sales executive' },
      { name: 'SHIVAM TIWARI', department: 'Sales Executive', photo: 'SalesExecutes/11.png', bio: 'Sales executive' },
      { name: 'DARSHANA MAHADIK', department: 'Purchase', photo: 'Purchase/7.png', bio: 'Purchase manager' },
      { name: 'KARISHMA CHAURASIYA', department: 'Operations', photo: 'Operations/13.png', bio: 'Operations manager' },
      { name: 'AARADHYA DAKARE', department: 'Operations', photo: 'Operations/14.png', bio: 'Operations coordinator' },
    ];

const TeamPage = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [imagePaths, setImagePaths] = useState({});
  const handleFlip = (name) => {
    setFlippedCard((prevFlippedCard) => (prevFlippedCard === name ? null : name));
  };
  
  useEffect(() => {
    const loadImages = () => {
      const images = {};
      const context = require.context('/src/Resource/employees', true, /\.png$/);
      context.keys().forEach((key) => {
        const cleanedKey = key.replace('./', '');
        images[cleanedKey] = context(key);
      });
      setImagePaths(images);
    };

    loadImages();
  }, []);

  return (
    <div className="team-section ">
      <h1 className="team-title kodchasan-regular">Our Team</h1>
      <div className="team-grid kodchasan-regular">
        {teamMembers.map((member) => (
          <div
            key={member.name} 
            className={`team-card ${flippedCard === member.name ? 'flipped' : ''}`}
            onClick={() => handleFlip(member.name)}
          >
            <div className="team-card-inner">
              {/* Front Side */}
              <div className="team-card-front">
              <div className="team-photo">
                       {imagePaths[member.photo] ? (
                          <img src={imagePaths[member.photo]} alt={member.name} />
                        ) : (
                          <div>Loading...</div>
                        )}
                      </div>
                <h3>{member.name}</h3>
                <p>{member.department}</p>
              </div>

              {/* Back Side */}
              <div className="team-card-back">
                <p>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
