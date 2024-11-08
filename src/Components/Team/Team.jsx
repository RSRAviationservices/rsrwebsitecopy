import React, { useState,useEffect } from 'react';
import './Team.css';

const teamMembers = [
      { name: 'SURESH RAHANGDALE', department: 'Directors', photo: 'Directors/1.png', bio: 'Experienced Director with 18+ years of Experience  in Strategic planning, partnerships, and leadership at Aviation ' },
      { name: 'REENA PAIGUDE', department: 'Directors', photo: 'Directors/2.png', bio: ' Director with 18+ Years of experience Expert in Strategic Management and  Mentorship for the support team, ensuring service quality' },
      { name: 'SARIKA MALUSARE', department: 'General Manager', photo: 'GeneralManager/4.png', bio: 'General Manager 10+ Years of experience ' },
      { name: 'NARENDRA GENOLIA', department: 'General Manager- Sales & Procurement', photo: 'GeneralManager/3.png', bio: 'General Manager 10+ Years of experience General Manager Leading sales strategies, customer acquisition, and team management' },
      { name: 'MRUNALI DHARGAVE', department: 'Asst. General Manager-Sales and Defence', photo: 'Sales/5.png', bio: ' 7+ years of experience Managing key accounts, ensuring technical compliancer' },
      { name: 'HARSHADA GAVKAR', department: 'Finance & Accounts', photo: 'Finance/8.png', bio: '11+ years of experience Finance and accounting specialist' },
      { name: 'SWAPNIL MISHRA', department: 'Asst. Manager-Sales & Procurement', photo: 'Operations/12.png', bio: '4+ years experience	Assisting with sales, customer consultations, and product support' },
      { name: 'DARSHANA MAHADIK', department: 'Head of Procurement', photo: 'Purchase/7.png', bio: '6+ years of experience Handling customer queries, order managementurchase manager' },
      { name: 'AARADHYA DAKARE', department: 'Head of Outward &Dispatch', photo: 'Operations/14.png', bio: '3+ years of experience Providing assistance, managing inquiries, coordinating with logistics' },
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
      <h1 className="team-title kodchasan-regular">Our Leaders</h1>
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
