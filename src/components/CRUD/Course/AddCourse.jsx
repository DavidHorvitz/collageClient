import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CourseForm } from "../../Templates/Forms/CourseForm";
import { addCourse } from "../../../store/actions/course/setCourse";

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
    const saveData = () => {
        dispatch(addCourse(courseData))
            .then(() => {
                navigate('/all-courses');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
    };
    return (
        <div>
            <h1>Add Course</h1>
            <CourseForm
                courseData={courseData}
                setCourseData={setCourseData}
                saveData={saveData} />

        </div>

    );
};

export default AddCourse;
