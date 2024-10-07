import React, { useState, useEffect } from 'react';
import './Team.css';

const TeamPage = () => {
  const [imagePaths, setImagePaths] = useState({});

  const teamMembers = [
    { name: 'SURESH RAHANGDALE', department: 'Directors', photo: 'Directors/1.png' },
    { name: 'REENA PAIGUDE ', department: 'Directors', photo: 'Directors/2.png' },
    { name: 'HARSHADA GAVKAR', department: 'Finance & Accounts', photo: 'Finance/8.png' },
    { name: 'SARIKA MALUSARE ', department: 'General Manager', photo: 'GeneralManager/3.png' },
    { name: 'NARENDRA GENOLIA', department: 'General Manager', photo: 'GeneralManager/4.png' },
    { name: 'SWAPNIL MISHRA', department: 'Operations', photo: 'Operations/12.png' },
    { name: 'KARISHMA CHAURASIYA', department: 'Operations', photo: 'Operations/13.png' },
    { name: 'AARADHYA DAKARE', department: 'Operations', photo: 'Operations/14.png' },
    { name: 'DARSHANA MAHADIK', department: 'Purchase', photo: 'Purchase/7.png' },
    { name: 'MRUNALI DHARGAVE', department: 'Sales', photo: 'Sales/5.png' },
    { name: 'SHUBHAM RAHANGDALE', department: 'Sales', photo: 'Sales/6.png' },
    { name: 'ANANDKUMAR YADAV ', department: 'Sales Executive', photo: 'SalesExecutes/9.png' },
    { name: 'MADHURI BADWAIK', department: 'Sales Executive', photo: 'SalesExecutes/10.png' },
    { name: 'SHIVAM TIWARI', department: 'Sales Executive', photo: 'SalesExecutes/11.png' },
  ];

  const departments = ['Directors', 'General Manager', 'Finance & Accounts', 'Purchase', 'Sales','Sales Executive' ,'Operations'];

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
    <div className="team-page">
      <h1 className="page-title">Our Team</h1>
      
      {departments.map((dept, index) => (
        <div key={dept} className={`department ${index === 0 ? 'first-department' : ''}`}>
          <h2 className="department-title">{dept}</h2>
          <div className="member-grid">
            {teamMembers
              .filter(member => member.department === dept)
              .map((member, memberIndex) => (
                <div 
                  key={member.name} 
                  className="member-card"
                  style={{animationDelay: `${memberIndex * 0.1}s`}}
                >
                  <div className="member-photo">
                    {imagePaths[member.photo] ? (
                      <img 
                        src={imagePaths[member.photo]}
                        alt={member.name}
                        onError={(e) => {
                          console.error(`Error loading image for ${member.name}:`, e);
                          e.target.src = 'https://via.placeholder.com/200x200?text=Image+Not+Found';
                        }}
                      />
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-department">{member.department}</p>
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
