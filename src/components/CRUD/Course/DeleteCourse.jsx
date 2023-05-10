import React, { useEffect, useState } from "react";
import "../model.css";
import ButtonClose from "../../Templates/ButtonClose/ButtonClose";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../../store/actions/course/deleteCourse";

const DeleteCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state?.data || {};
  const [CourseName, setCourseName] = useState(data.Course_Name);
  const [StartingDate, setStartingDate] = useState(data.Starting_Date);
  const [EndDate, setEndDate] = useState(data.End_Date);
  const [MinimumPassingScore, setMinimumPassingScore] = useState(data.Minimum_Passing_Score);
  const [MaximumStudents, setMaximumStudents] = useState(data.Maximum_Students);
  const [IsReady, setIsReady] = useState(data.IsReady);
  const [close, setClose] = useState(true);

  useEffect(() => {
    if (!close) navigate('/all-courses');
  }, [close, navigate]);


  const deleteCourseFunction = () => {
    const course = {
      CourseName,
      StartingDate,
      EndDate,
      MinimumPassingScore,
      MaximumStudents,
      IsReady
    };

    dispatch(deleteCourse(id, course))
      .then(() => {
        navigate('/all-courses');
      })
      .catch((err) => {
        console.error('Failed to Delete Course:', err);
      });
           
  };
    return (
        <div className="container">
            <ButtonClose close={setClose} />
            <div className="card">
                <h2 className="card_title">Are you sure you want to delete this Course ?</h2>
                <div className="card_form">
                    <div className="input">
                        <input className="input_field" type="text" value={CourseName} onChange={e => setCourseName(e.currentTarget.value)} />
                        <label className="input_label">Course Name</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={StartingDate} onChange={e => setStartingDate(e.currentTarget.value)} />
                        <label className="input_label">Starting Date</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={EndDate} onChange={e => setEndDate(e.currentTarget.value)} />
                        <label className="input_label">End Date</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={MinimumPassingScore} onChange={e => setMinimumPassingScore(e.currentTarget.value)} />
                        <label className="input_label">Minimum Passing Score</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={MaximumStudents} onChange={e => setMaximumStudents(e.currentTarget.value)} />
                        <label className="input_label">Maximum Students</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={IsReady} onChange={e => setIsReady(e.currentTarget.value)} />
                        <label className="input_label">Is Ready</label>
                    </div>
                    <button className="card_button" onClick={() => deleteCourseFunction()} >Delete</button>
                </div>
            </div>
        </div>
    )
};
export default DeleteCourse;