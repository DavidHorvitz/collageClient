import React, { useEffect, useState } from "react";
import "../../CRUD/model.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonClose from "../ButtonClose/ButtonClose";
import {
  isCourseNameValid,
  isMinimumPassingScoreValid,
  isMaximumStudentsValid,
  isDateValid,
  isEndDateValid,
} from "../../../validation/inputCourseValidation";
import { useNavigate } from "react-router-dom";

export const CourseForm = ({ courseData, setCourseData, saveData }) => {
  const [close, setClose] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!close) {
      navigate("/all-courses");
    }
  }, [close, navigate]);

  const handleCourseNameChange = (e) => {
    const name = e.currentTarget.value;
    setCourseData((prevData) => ({
      ...prevData,
      CourseName: name,
      isCourseNameValid: isCourseNameValid(name),
    }));
  };

  const handleStartingDateChange = (date) => {
    setCourseData((prevData) => ({
      ...prevData,
      StartingDate: date,
      isStartingDateValid: isDateValid(date),
      isEndDateValid: isEndDateValid(date, prevData.EndDate),
    }));
  };

  const handleEndDateChange = (date) => {
    setCourseData((prevData) => ({
      ...prevData,
      EndDate: date,
      isEndDateValid: isEndDateValid(prevData.StartingDate, date),
    }));
  };

  const handleMinimumPassingScoreChange = (e) => {
    const score = e.currentTarget.value;
    setCourseData((prevData) => ({
      ...prevData,
      MinimumPassingScore: score,
      isMinimumPassingScoreValid: isMinimumPassingScoreValid(score),
    }));
  };

  const handleMaximumStudentsChange = (e) => {
    const students = e.currentTarget.value;
    setCourseData((prevData) => ({
      ...prevData,
      MaximumStudents: students,
      isMaximumStudentsValid: isMaximumStudentsValid(students),
    }));
  };
    return (
        <div className="container">
          <ButtonClose close={setClose} />
          <div className="card">
            <h1 className="card_title">Add Course</h1>
            <p className="card_title-info">Pen By David Horvitz</p>
            <div className="card_form">
              <div className="input">
                <input
                  className={`input_field ${!courseData.isCourseNameValid && "invalid"}`}
                  type="text"
                  value={courseData.CourseName}
                  onChange={handleCourseNameChange}
                />
                <label className="input_label">Course Name</label>
                {!courseData.isCourseNameValid && (
                  <span className="error">Please enter a valid course name.</span>
                )}
              </div>
              <div className="input">
                <div className="datepicker-container">
                  <ReactDatePicker
                    className="input_field"
                    selected={courseData.StartingDate}
                    onChange={handleStartingDateChange}
                  />
                </div>
                <label className="input_label">Starting Date</label>
              </div>
              <div className="input">
                <ReactDatePicker
                  className="input_field"
                  selected={courseData.EndDate}
                  onChange={handleEndDateChange}
                />
                <label className="input_label">End Date</label>
                {!courseData.isEndDateValid && (
                  <span className="error">The date of End Date should be later than Starting Date</span>
                )}
              </div>
              <div className="input">
                <input
                  className={`input_field ${!courseData.isMinimumPassingScoreValid && "invalid"}`}
                  type="text"
                  value={courseData.MinimumPassingScore}
                  onChange={handleMinimumPassingScoreChange}
                />
                <label className="input_label">Minimum Passing Score</label>
                {!courseData.isMinimumPassingScoreValid && (
                  <span className="error">
                    Please enter a valid Minimum Passing Score.
                  </span>
                )}
              </div>
              <div className="input">
                <input
                  className={`input_field ${!courseData.isMaximumStudentsValid && "invalid"}`}
                  type="text"
                  value={courseData.MaximumStudents}
                  onChange={handleMaximumStudentsChange}
                />
                <label className="input_label">Maximum Students In Course</label>
                {!courseData.isMaximumStudentsValid && (
                  <span className="error">Please enter a valid Maximum Students.</span>
                )}
              </div>
              <button className="card_button" onClick={()=> saveData() }>
                Save A new Course
              </button>
            </div>
          </div>
        </div>
    );
}
