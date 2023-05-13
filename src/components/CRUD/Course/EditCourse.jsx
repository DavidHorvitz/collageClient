import React, {  useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCourse } from "../../../store/actions/course/editCourse";
import { CourseForm } from "../../Templates/Forms/CourseForm";


const EditCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state.data;

    const [courseData, setCourseData] = useState({
        CourseName:data.Course_Name,
        StartingDate:  new Date(data.Starting_Date),
        EndDate: new Date(data.End_Date),
        MinimumPassingScore: data.Minimum_Passing_Score,
        MaximumStudents: data.Maximum_Students,
        IsReady: true
    });
   
    const updateCourseFunction = () => {
        dispatch(editCourse({ id,updatedCourse: courseData }))
            .then(() => {
                navigate('/all-courses');
            })
            .catch((err) => {
                console.error('Failed to Update Course:', err);
            });
    };
    return (
        <div>
            <h1>Edit Course</h1>
            <CourseForm courseData={courseData} setCourseData={setCourseData} saveData={updateCourseFunction}/>

        </div>
    )
};
export default EditCourse;