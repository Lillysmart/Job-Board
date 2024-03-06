import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const { data, setData } = useState([]);

  useEffect(() => {
    fetch("https://www.arbeitnow.com/api/job-board-api") // api for the get request
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const SearchHandler = () => {
    setData((data) => {
      return { ...data, color: "blue" };
    });
  };

  return (
    <div>
      <>{console.log({ data })}</>

      <div className="header">
        <img
          className="header-img"
          src="/logo-no-background.png"
          width={200}
          height={40}
        />
        <input
          className="top-button"
          type="text"
          placeholder="Job Title / Keyword..."
          onClick={SearchHandler}
        />

        <label htmlFor="location"></label>

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

        <button className="search-button">Search</button>

        <img src="/login.png" className="header-image" width={60} height={50} />
      </div>

      <div className="job-section">
        <div className="job-text">
          <h2>Find Your Perfect...</h2>
        </div>
        <img src="/search.png" alt="Search Image" className="job-image" />
      </div>

      <div></div>
    </div>
  );
};

export default HomePage;
