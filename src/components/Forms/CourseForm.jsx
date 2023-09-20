import React, { useEffect, useState } from "react";
import ButtonClose from "../Templates/ButtonClose/ButtonClose";
import { Container, TextField } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  isCourseNameValid,
  isMinimumPassingScoreValid,
  isMaximumStudentsValid,
  isDateValid,
  isEndDateValid,
} from "../../validation/inputCourseValidation";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export const CourseForm = ({ CourseName, setCourseName, StartingDate, setStartingDate, EndDate, setEndDate,
  MinimumPassingScore, setMinimumPassingScore, MaximumStudents, setMaximumStudents, Image, setImage, saveData }) => {
  const [close, setClose] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!close) {
      navigate("/all-courses");
    }
  }, [close, navigate]);

  return (
    <div >
      <Container className="space-y-6 shadow-2xl rounded-lg p-4 relative">
        <ButtonClose close={setClose} />
        <div >
          <TextField fullWidth label="Course Name"
            className={`input_field ${!isCourseNameValid(CourseName) && "invalid"}`}
            type="text"
            value={CourseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          {!isCourseNameValid(CourseName) && (
            <span className="error">Please enter a valid course name.</span>
          )}
        </div>

        <div >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Set Starting Date"
                // value={StartingDate}
                value={StartingDate ? dayjs(StartingDate) : null} // Convert StartingDate to Dayjs object
                onChange={(date) => setStartingDate(date)} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Set End Date"
                // value={EndDate}
                value={EndDate ? dayjs(EndDate) : null} // Convert EndDate to Dayjs object
                onChange={(date) => setEndDate(date)} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div>
          {!isEndDateValid(EndDate) && (
            <span className="error">The date of End Date should be later than Starting Date</span>
          )}
        </div>
        <div >
          <TextField fullWidth label="Minimum Passing Score"
            className={`input_field ${!isMinimumPassingScoreValid(MinimumPassingScore) && "invalid"}`}
            type="number"
            value={MinimumPassingScore}
            onChange={(e) => setMinimumPassingScore(parseInt(e.target.value))}
          />
          {!isMinimumPassingScoreValid(MinimumPassingScore) && (
            <span className="error">
              Please enter a valid Minimum Passing Score.
            </span>
          )}
        </div>
        <div >
          <TextField fullWidth label="Maximum Students"
            className={`input_field ${!isMaximumStudentsValid(MaximumStudents) && "invalid"}`}
            type="number"
            value={MaximumStudents}
            onChange={(e) => setMaximumStudents(parseInt(e.target.value))}
          />
          {!isMaximumStudentsValid(MaximumStudents) && (
            <span className="error">Please enter a valid Maximum Students.</span>
          )}
        </div>
        <div>
          <TextField fullWidth label="Image Profile Url" id="fullWidth"
            className={`input_field ${Image} `}
            type="text"
            value={Image}
            onChange={(e) => setImage(e.currentTarget.value)}
          />
          {/* {!isEmailValid(Email) && (
                    <span className="error">Please enter a valid email address.</span>
                )} */}
        </div>
        <button className="card_button" onClick={() => saveData()}>
          Save A new Course
        </button>
      </Container>
    </div>
  );
}

