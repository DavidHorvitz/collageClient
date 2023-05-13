import React from "react";
import { useNavigate } from "react-router-dom";
import './header.scss'
import { useDispatch } from "react-redux";
import { getStudents } from "../../../store/actions/student/getStudent";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const backToMain = () => {

        dispatch(getStudents())
            .then(() => {
                navigate('/');
            });
    }
    return (
        <header id="header">
            <h1 id="os">Collage</h1>

            <div className="button_Container">
                <div className="main_page_button" onClick={backToMain}>Main Page</div>
                <div className="add_to_cart_button" onClick={() => navigate("/all-students")}>Student details</div>
                <div className="add_to_cart_button" onClick={() => navigate("/add-student")}>Add a new Student</div>
                <div className="add_to_cart_button" onClick={() => navigate("/add-course")}>Add a new Course</div>
                <div className="add_to_cart_button" onClick={() => navigate("/all-courses")}>Courses details</div>
                <div className="add_to_cart_button" onClick={() => navigate("/all-lecturers")}>Lecturers details</div>
            </div>
        </header>
    )
}
export default Header;