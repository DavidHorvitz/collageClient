import React, { useEffect, useState } from "react";
import '../model.css';
import ButtonClose from "../../Templates/ButtonClose/ButtonClose";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCourse } from "../../../store/actions/course/setCourse";
import {
    isCourseDataValid,
    isCourseNameValid,
    isDateValid,
    isMinimumPassingScoreValid,
    isMaximumStudentsValid,
    isBooleanValid
} from "../../../validation/inputCourseValidation";

const AddCourse = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState({
        CourseName: '',
        StartingDate: '',
        EndDate: '',
        MinimumPassingScore: '',
        MaximumStudents: '',
        IsReady: true
    });
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) {
            navigate('/');
        }
    }, [close, navigate]);

    const saveData = () => {
        if (!isCourseDataValid(courseData)) {
            alert('Please enter valid course data.');
            return;
        }
        dispatch(addCourse(courseData))
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    };

    return (
        <div className="container">
            <ButtonClose close={setClose} />
            <div className="card">
                <h1 className="card_title">Add Student</h1>
                <p className="card_title-info">Pen By David Horvitz</p>
                <div className="card_form">
                    <div className="input">
                        <input
                            className={`input_field ${!isCourseNameValid(courseData.CourseName) && "invalid"}`}
                            type="text"
                            value={courseData.CourseName}
                            onChange={(e) => setCourseData({ ...courseData, CourseName: e.currentTarget.value })}
                        />
                        <label className="input_label">Course Name</label>
                        {!isCourseNameValid(courseData.CourseName) && (
                            <span className="error">Please enter a valid course name.</span>
                        )}
                    </div>

                    <div className="input">
                        <input
                            className={`input_field ${!isDateValid(courseData.StartingDate) && "invalid"}`}
                            type="text"
                            value={courseData.StartingDate}
                            onChange={(e) => setCourseData({ ...courseData, StartingDate: e.currentTarget.value })}
                        />
                        <label className="input_label">Starting Date</label>
                        {!isDateValid(courseData.StartingDate) && (
                            <span className="error">Please enter a valid date (YYYY-MM-DD).</span>
                        )}
                    </div>

                    <div className="input">
                        <input
                            className={`input_field ${!isDateValid(courseData.EndDate) && "invalid"}`}
                            type="text"
                            value={courseData.EndDate}
                            onChange={(e) => setCourseData({ ...courseData, EndDate: e.currentTarget.value })}
                        />
                        <label className="input_label">End Date</label>
                        {!isDateValid(courseData.EndDate) && (
                            <span className="error">Please enter a valid date (YYYY-MM-DD).</span>
                        )}
                    </div>
                    <div className="input">
                        <input
                            className={`input_field ${!isMinimumPassingScoreValid(courseData.MinimumPassingScore) && "invalid"}`}
                            type="text"
                            value={courseData.MinimumPassingScore}
                            onChange={(e) => setCourseData({ ...courseData, MinimumPassingScore: e.currentTarget.value })}
                        />
                        <label className="input_label">Minimum Passing Score</label>
                        {!isMinimumPassingScoreValid(courseData.MinimumPassingScore) && (
                            <span className="error">Please enter a valid Minimum Passing Score.</span>
                        )}
                    </div>
                    <div className="input">
                        <input
                            className={`input_field ${!isMaximumStudentsValid(courseData.MaximumStudents) && "invalid"}`}
                            type="text"
                            value={courseData.MaximumStudents}
                            onChange={(e) => setCourseData({ ...courseData, MaximumStudents: e.currentTarget.value })}
                        />
                        <label className="input_label">Maximum Students In Course</label>
                        {!isMaximumStudentsValid(courseData.MaximumStudents) && (
                            <span className="error">Please enter a valid Maximum Students.</span>
                        )}
                    </div>
                    <div className="input">
                        <input
                            className={`input_field ${!isBooleanValid(courseData.IsReady) && "invalid"}`}
                            type="text"
                            value={courseData.IsReady}
                            onChange={(e) => setCourseData({ ...courseData, IsReady: e.currentTarget.value })}
                        />
                        <label className="input_label">Is Ready</label>
                        {!isBooleanValid(courseData.IsReady) && (
                            <span className="error">Please enter a valid IsReady</span>
                        )}
                    </div>

                    <button className="card_button" onClick={() => saveData()}  > Save A new Course </button>
                </div>
            </div>
        </div>
    );
};


export default AddCourse;
