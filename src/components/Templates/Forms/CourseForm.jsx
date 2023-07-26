import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonClose from "../ButtonClose/ButtonClose";
import { Container, TextField } from "@mui/material";

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
    <div >
      <Container className="space-y-6 shadow-2xl rounded-lg p-4 relative">
        <ButtonClose close={setClose} />
        <div >
          <TextField fullWidth label="Course Name"
            className={`input_field ${!courseData.isCourseNameValid && "invalid"}`}
            type="text"
            value={courseData.CourseName}
            onChange={handleCourseNameChange}
          />
          {!courseData.isCourseNameValid && (
            <span className="error">Please enter a valid course name.</span>
          )}
        </div>
        <div >
          <div className="datepicker-container">
            <ReactDatePicker
              className="input_field"
              selected={courseData.StartingDate}
              onChange={handleStartingDateChange}
            />
          </div>
        </div>
        <div >
          <ReactDatePicker
            className="input_field"
            selected={courseData.EndDate}
            onChange={handleEndDateChange}
          />
          {!courseData.isEndDateValid && (
            <span className="error">The date of End Date should be later than Starting Date</span>
          )}
        </div>
        <div >
          <TextField fullWidth label="Minimum Passing Score"
            className={`input_field ${!courseData.isMinimumPassingScoreValid && "invalid"}`}
            type="text"
            value={courseData.MinimumPassingScore}
            onChange={handleMinimumPassingScoreChange}
          />
          {!courseData.isMinimumPassingScoreValid && (
            <span className="error">
              Please enter a valid Minimum Passing Score.
            </span>
          )}
        </div>
        <div >
          <TextField fullWidth label="Maximum Students"
            className={`input_field ${!courseData.isMaximumStudentsValid && "invalid"}`}
            type="text"
            value={courseData.MaximumStudents}
            onChange={handleMaximumStudentsChange}
          />
          {!courseData.isMaximumStudentsValid && (
            <span className="error">Please enter a valid Maximum Students.</span>
          )}
        </div>
        <button className="card_button" onClick={() => saveData()}>
          Save A new Course
        </button>
      </Container>
    </div>
  );
}
