import React from 'react'
import ReactDOM from 'react-dom/client'

export const HomePage = () => {
    return (
      <div>
        <div className='header'>
          <input className='top-button' type='search' placeholder='Job Title / Keyword...' />
          
         
          <label htmlFor="location">Location :</label>

          <select id="location" name="location">
            <option value="All">Wordwide</option>
            <option value="Johannesburg">Johannesburg</option>
            <option value="Cape Town">Cape Town</option>
            <option value="Bloemfontein">Bloemfontein</option>
            <option value="Pretoria">Pretoria</option>
            <option value="Sandton">Sandton</option>
            <option value="Durban">Durban</option>
            <option value="East London">East London</option>
          </select>
          

          <button className='search-button'>
        Search
        </button>


        </div>
        <h1>Find Your Perfect Job ...</h1>


        <div>


      
        </div>
      </div>
    );
  };

export default HomePage


