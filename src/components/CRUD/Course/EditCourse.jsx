import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCourse } from "../../../store/actions/course/editCourse";
import { CourseForm } from "../../Forms/CourseForm";


const EditCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state.data;

    const [CourseName, setCourseName] = useState(data.CourseName);
    const [StartingDate, setStartingDate] = useState(new Date(data.StartingDate));
    const [EndDate, setEndDate] = useState(new Date(data.EndDate));
    const [MinimumPassingScore, setMinimumPassingScore] = useState(data.MinimumPassingScore);
    const [MaximumStudents, setMaximumStudents] = useState(data.MaximumStudents);
    const [Image, setImage] = useState(data.Image);

    const saveUpdateData = async () => {
        const updatedCourse = {
            CourseName: CourseName,
            StartingDate: StartingDate.toISOString().split('T')[0],
            EndDate: EndDate.toISOString().split('T')[0],
            MinimumPassingScore: MinimumPassingScore,
            MaximumStudents: MaximumStudents,
            Image: Image

        };

        dispatch(editCourse({ id, updatedCourse }))
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
                Image={Image}
                setImage={setImage}
                saveData={saveUpdateData} />
        </div>
    )
};
export default EditCourse;