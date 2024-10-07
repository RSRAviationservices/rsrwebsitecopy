import React, { useState, useEffect } from 'react';
import './Team.css';

const TeamPage = () => {
  const [imagePaths, setImagePaths] = useState({});
  const [flippedCards, setFlippedCards] = useState({});

  // Team members data with name, department, and image
  const teamMembers = [
    { name: 'SURESH RAHANGDALE', department: 'Directors', photo: 'Directors/1.png', bio: 'Experienced Director' },
    { name: 'REENA PAIGUDE', department: 'Directors', photo: 'Directors/2.png', bio: 'Expert in Strategic Management' },
    { name: 'HARSHADA GAVKAR', department: 'Finance & Accounts', photo: 'Finance/8.png', bio: 'Finance and accounting specialist' },
    { name: 'SARIKA MALUSARE', department: 'General Manager', photo: 'GeneralManager/4.png', bio: 'General Manager overseeing operations' },
    { name: 'NARENDRA GENOLIA', department: 'General Manager', photo: 'GeneralManager/3.png', bio: 'General Manager' },
    { name: 'SWAPNIL MISHRA', department: 'Operations', photo: 'Operations/12.png', bio: 'Operations lead' },
    { name: 'KARISHMA CHAURASIYA', department: 'Operations', photo: 'Operations/13.png', bio: 'Operations manager' },
    { name: 'AARADHYA DAKARE', department: 'Operations', photo: 'Operations/14.png', bio: 'Operations coordinator' },
    { name: 'DARSHANA MAHADIK', department: 'Purchase', photo: 'Purchase/7.png', bio: 'Purchase manager' },
    { name: 'MRUNALI DHARGAVE', department: 'Sales', photo: 'Sales/5.png', bio: 'Sales manager' },
    { name: 'SHUBHAM RAHANGDALE', department: 'Sales', photo: 'Sales/6.png', bio: 'Sales executive' },
    { name: 'ANANDKUMAR YADAV', department: 'Sales Executive', photo: 'SalesExecutes/9.png', bio: 'Sales executive' },
    { name: 'MADHURI BADWAIK', department: 'Sales Executive', photo: 'SalesExecutes/10.png', bio: 'Sales executive' },
    { name: 'SHIVAM TIWARI', department: 'Sales Executive', photo: 'SalesExecutes/11.png', bio: 'Sales executive' },
  ];

  // List of departments for grouping
  const departments = ['Directors', 'General Manager', 'Finance & Accounts', 'Purchase', 'Sales', 'Sales Executive', 'Operations'];

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

  // Handle card flip, using a unique key for each card
  const toggleFlip = (name) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [name]: !prevState[name], // Toggle the flip state for the card based on its unique name
    }));
  };

  return (
    <div className="team-page">
      <h1 className="page-title">Our Team</h1>
      {departments.map((department, deptIndex) => (
        <div key={deptIndex} className="department">
          <h2 className="department-title">{department}</h2>
          <div className="member-grid">
            {teamMembers
              .filter((member) => member.department === department)
              .map((member) => (
                <div
                  key={member.name}
                  className={`member-card ${flippedCards[member.name] ? 'flipped' : ''}`}
                  onClick={() => toggleFlip(member.name)}
                >
                  <div className="member-card-inner">
                    {/* Front Side */}
                    <div className="member-card-front">
                      <div className="member-photo">
                        {imagePaths[member.photo] ? (
                          <img src={imagePaths[member.photo]} alt={member.name} />
                        ) : (
                          <div>Loading...</div>
                        )}
                      </div>
                      <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-department">{member.department}</p>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="member-card-back">
                      <h3 className="member-detail">{member.name}</h3>
                      <p className="member-detail">{member.department}</p>
                      <p className="member-bio">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
