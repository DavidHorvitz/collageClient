import React from "react";
import './wrapper.css'
import { useNavigate } from "react-router-dom";
const Aside = () => {
    const navigate = useNavigate();
    return (
        <aside id="aside">
            <div className="nav_button" onClick={() => navigate("/add-lecturer")}>Add a new Lecturer</div>
            <div className="nav_button" onClick={() => navigate("/add-student")}>Add a new Student</div>
            <div className="nav_button" onClick={() => navigate("/add-course")}>Add a new Course</div>
            <div className="nav_button" onClick={() => navigate("/add-webmaster")}>Add a new WebMaster</div>
        </aside>
    )
}
export default Aside;