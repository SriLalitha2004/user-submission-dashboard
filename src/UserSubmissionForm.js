import React, { useState } from 'react';

import './UserSubmissionForm.css'

const UserSubmissionForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]); // Store the selected images
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !socialMedia || images.length === 0) {
      alert('Please fill in all fields and upload at least one image.');
      return;
    }

    const submission = {
      name,
      socialMedia,
      images: [...images].map(file => URL.createObjectURL(file)) // For displaying image previews
    };

    onSubmit(submission); // Pass the submission back to App component

    // Reset form fields after submission
    setName('');
    setSocialMedia('');
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <label className='mr-2'>Name:</label>
        < br /><input 
          type="text" 
          className='mr-2'
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Social Media Handle:</label>
        <br /><input 
          type="text" 
          value={socialMedia} 
          onChange={(e) => setSocialMedia(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Upload Images:</label>
        <br /><input 
          type="file"
          className='ml-2'
          multiple 
          onChange={handleImageChange} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserSubmissionForm;