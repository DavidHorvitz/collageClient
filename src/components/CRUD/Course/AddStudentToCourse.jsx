import React, { useEffect, useState } from "react";
import '../model.css';
import ButtonClose from "../../Templates/ButtonClose/ButtonClose";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../../store/actions/course/getCourse";
import { addStudentToCourse } from "../../../store/actions/course/addStudentToCourse";

const AddStudentToCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courses = useSelector((state) => state.course.courses);

  const [courseId, setCourseId] = useState("");
  const [close, setClose] = useState(true);

  useEffect(() => {
    if (!close) {
      navigate("/");
    }
    dispatch(getCourses()); // Fetch the courses when the component mounts
  }, [close, navigate, dispatch]);

  const saveData = () => {
    // Pass the student ID and the selected course ID to the API
    dispatch(addStudentToCourse({ courseId, studentId: id }))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Failed to add student:", err);
      });
  };


  return (
    <div className="container">
      <ButtonClose close={setClose} />
      <div className="card">
        <h1 className="card_title">Add Student To Course</h1>
        <p className="card_title-info">Pen By David Horvitz</p>
        <div className="card_form">


          {/* Display the list of courses */}
          <div className="input">
            <select
              className="input_field"
              value={courseId}
              onChange={(e) => setCourseId(e.currentTarget.value)}
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.Id} value={course.Id}>
                  {course.CourseName}
                </option>
              ))}
            </select>
          </div>

          <button className="card_button" onClick={() => saveData()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentToCourse;

