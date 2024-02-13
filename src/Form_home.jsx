import React, { useState } from 'react';
import './form_home.css';

function Form_home() {
  const [keywords, setKeywords] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = () => {
   
  };

  const validateForm = () => {
    
    return true; 
  };

  return (
    <div className="form-container">
      <h4 className='form-header'>Find Your Tour</h4>
      <div className="row">
        <div className="column">
          <div className="input-row">
            <div className='input1'>
              <label htmlFor="Keywords" className='label-1'>Keywords</label>
              <input 
                type="text" 
                className="input-field"  
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
             
            </div>
            <div className='input1'>
              <label htmlFor="Category" className='label-1'>Category</label>
              <select 
                name="category" 
                id="category" 
                className='input-field'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="volvo">Any</option>
                <option value="saab">Saab</option>
              </select>
            </div>
            <div className='input1'>
              <label htmlFor="Min price" className='label-1'>Min Price</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="00.0" 
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-row">
        <div className='input1'>
          <label htmlFor="Duration" className='label-1'>Duration</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Any" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className='input1'>
          <label htmlFor="Duration" className='label-1'>Date</label>
          <input 
            type="Date" 
            className="input-field" 
            placeholder="Date" 
            
          />
        </div>
        <div className='input1'>
          <label htmlFor="Duration" className='label-1'>Max Price</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Any" 
            value={duration}
            
          />
        </div>
        {/* Add more input fields here */}
      </div>
      <button type="button" className="button" onClick={handleSubmit} disabled={!validateForm()}>
        Submit
      </button>
    </div>
  );
}

export default Form_home;
