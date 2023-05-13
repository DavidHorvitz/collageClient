import React, { useEffect, useState } from "react";
import "../model.css";
import ButtonClose from "../../Templates/ButtonClose/ButtonClose";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../../store/actions/course/deleteCourse";
import { CourseForm } from "../../Templates/Forms/CourseForm";

const DeleteCourse = () => {
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


  const deleteCourseFunction = () => {
  

    dispatch(deleteCourse(id, courseData))
      .then(() => {
        navigate('/all-courses');
      })
      .catch((err) => {
        console.error('Failed to Delete Course:', err);
      });
           
  };
    return (
      <div>
      <h1>Add Course</h1>
      <CourseForm courseData={courseData} setCourseData={setCourseData} saveData={deleteCourseFunction}/>

  </div>
    )
};
export default DeleteCourse;