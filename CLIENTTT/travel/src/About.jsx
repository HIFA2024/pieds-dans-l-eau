import React from 'react';

const About = () => {
  return (
    <div style={{position :'absolute', marginLeft:'21%',marginTop:'10%'}}>
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          color: '#333',
          fontSize: '2rem',
          marginBottom: '10px',
        }}
      >
        Welcome to TravShot
      </h2>
      <p
        style={{
          color: '#666',
          fontSize: '1.2rem',
          lineHeight: '1.6',
        }}
      >
        Your ultimate destination for immersive travel experiences and insightful
        stories from around the globe. Whether you're a seasoned wanderer or
        planning your first adventure, we're here to inspire and inform. Our
        passionate team of travel enthusiasts brings you firsthand accounts,
        detailed guides, and expert tips to help you navigate the world's most
        captivating destinations with confidence and curiosity. Join us as we
        uncover hidden gems, embrace diverse cultures, and share unforgettable
        moments that ignite your wanderlust. Let TravShot be your companion on a
        journey where every shot tells a story.
      </p>
    </div>
    </div>
  );
};

export default About;
