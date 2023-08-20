import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CourseForm } from "../../Forms/CourseForm";
import { addCourse } from "../../../store/actions/course/setCourse";

const AddCourse = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const [CourseName, setCourseName] = useState('');
    const [StartingDate, setStartingDate] = useState('');
    const [EndDate, setEndDate] = useState('');
    const [MinimumPassingScore, setMinimumPassingScore] = useState('');
    const [MaximumStudents, setMaximumStudents] = useState('');

    const updatedStudent = {
        CourseName: CourseName,
        StartingDate: StartingDate,
        EndDate: EndDate,
        MinimumPassingScore: MinimumPassingScore,
        MaximumStudents: MaximumStudents,
    };
    const saveData = () => {
        dispatch(addCourse(updatedStudent))
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
                 CourseName={CourseName}
                 setCourseName={setCourseName}
                 StartingDate={StartingDate}
                 setStartingDate={setStartingDate}
                 EndDate={EndDate}
                 setEndDate={setEndDate}
                 MinimumPassingScore={MinimumPassingScore}
                 setMinimumPassingScore={setMinimumPassingScore}
                 MaximumStudents={MaximumStudents}
                 setMaximumStudents={setMaximumStudents}
                saveData={saveData} />

        </div>

    );
};

export default AddCourse;
