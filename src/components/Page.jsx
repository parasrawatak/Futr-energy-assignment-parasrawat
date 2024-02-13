import React, { useState } from "react";
import Travel from "../images/travel-banner.jpeg"
import validateForm from "./validate";
import "./page.scss"
const Page= () =>{

    const [formData, setFormData] = useState({
        keywords: "",
        duration: "",
        category1: "",
        category2: "",
        date: "",
        minPrice: "",
        maxPrice: "",
      });

    const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSearchClick = () => {
    const formErrors = validateForm(formData);
    setErrors(formErrors);
  
    if (Object.keys(formErrors).length === 0) {   
      alert("Form is valid!");
    } else {
      Object.keys(formErrors).forEach((field) => {
        alert(`${field.charAt(0).toUpperCase() + field.slice(1)}: ${formErrors[field]}`);
      });
    }
  };
    return (
        <>
        <div className="hero">
         <div className="hero-title">
            <span className="t1">TRAVEL</span>
            <span className="t2">WITH US</span>
         </div>
         <button className='btn-main'>Read more</button>
         <div className="hero-form">
         <div className="form-title">
            <span>Find Your Tour</span>
         </div>
         <div className="form-main">
      <div className="form-col">
        <span>Keywords</span>
        <input
          name="keywords"
          value={formData.keywords}
          onChange={handleInputChange}
          className={`input-box ${errors.keywords ? "input-error" : ""}`}
        ></input>
        <input className="input-box-h"></input>
        <input className="input-box-h"></input>
        <span>Duration</span>
        <input
          name="duration"
          value={formData.duration}
          onChange={handleInputChange}
          placeholder="Any"
          className={`input-box ${errors.duration ? "input-error" : ""}`}
        ></input>
      </div>
      <div className="form-col">
      <span>Category</span>
  <select
    name="category1"
    value={formData.category1}
    onChange={handleInputChange}
    className="input-box category-dropdown"
  >
    <option value="">Select Category</option>
    <option value="category1Option1">Option 1</option>
    <option value="category1Option2">Option 2</option>

  </select>
  <select
    name="category2"
    value={formData.category2}
    onChange={handleInputChange}
    className="input-box category-dropdown"
  >
    <option value="">Select Category</option>
    <option value="category2Option1">Option 1</option>
    <option value="category2Option2">Option 2</option>
  </select>
        <span>Date</span>
        <input
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          type="date"
          className={`input-box ${errors.date ? "input-error" : ""}`}
        ></input>
      </div>
      <div className="form-col">
        <span>Min Price</span>
        <input
          name="minPrice"
          value={formData.minPrice}
          onChange={handleInputChange}
          placeholder="00.0"
          className={`input-box ${errors.minPrice ? "input-error" : ""}`}
        ></input>
         <input className="input-box-h"></input>
         <input className="input-box-h"></input>
        <span>Max Price</span>
        <input
          name="maxPrice"
          value={formData.maxPrice}
          onChange={handleInputChange}
          placeholder="00.0"
          className={`input-box ${errors.maxPrice ? "input-error" : ""}`}
        ></input>
      </div>
      <div className="form-search">
        <button className="btn-main2" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
        </div>
        </div>
        </>
    )
}

export default Page;