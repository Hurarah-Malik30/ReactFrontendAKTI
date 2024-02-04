import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
export default function Register() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [highestEducation, setHighestEducation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleFatherNameChange = (e) => {
    setFatherName(e.target.value);
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleHighestEducationChange = (e) => {
    setHighestEducation(e.target.value);
  };
  const handleSubmit = async  (e) => {
    e.preventDefault();
    const registerFormData = {
      name,
      fatherName,
      course,
      city,
      highestEducation
    }
    const response = await axios.post('http://localhost:5000/api/v1/add-uni-info',registerFormData )
    console.log(response)
  };

  return (
    <>
      {" "}
      <center>
        <div className="unknown">
          <h2 className="reg">Register</h2>
          <form onSubmit={handleSubmit}>
            {/*name  */}
            <input
              type="text"
              className="username my-3"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            {/* father name */}
            <input
              type="text"
              className="father my-3"
              placeholder="Father name"
              name="fatherName"
              value={fatherName}
              onChange={handleFatherNameChange}
            />
            <br />
            {/* course */}
            <input
              type="text"
              className="course my-3"
              placeholder="Course"
              name="course"
              value={course}
              onChange={handleCourseChange}
            />
            <br />
            {/* city */}
            <input
              type="text"
              className="city my-3"
              placeholder="City"
              name="city"
              value={city}
              onChange={handleCityChange}
            />
            <br />
            {/* higher edu */}
            <input
              type="text"
              className="edu my-3"
              placeholder="Highest education"
              name="highestEducation"
              value={highestEducation}
              onChange={handleHighestEducationChange}
            />
            <br />
            <button type="submit" className="btn btn-primary my-3">
              Submit
            </button>
          </form>
        </div>
      </center>
    </>
  );
}
