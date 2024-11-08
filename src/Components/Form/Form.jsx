import React, { useState, useEffect } from 'react';
import './Form.css'; // Import your CSS for styling
import { countries } from 'countries-list'; // Import countries and states

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    postalCode: '',
    country: '',
    message: '',
  });

  const [stateOptions, setStateOptions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2></h2>
      <div className="form-group row">
        <div className="form-item">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-item">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="form-item">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-item">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="form-item">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-item">
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="form-item">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            {Object.keys(countries).map((countryCode) => (
              <option key={countryCode} value={countryCode}>
                {countries[countryCode].name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button className='Submit' type="submit">Submit</button>
    </form>
  );
};

export default Form;
