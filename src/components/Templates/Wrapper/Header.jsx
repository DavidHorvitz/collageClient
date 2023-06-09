import React from "react";
import { useNavigate } from "react-router-dom";
import './header.scss'
const Header = () => {
    const navigate = useNavigate();
 
    return (
        <header id="header">
            <h1 id="os">Collage</h1>

            <div className="button_Container">
                <div className="main_page_button" onClick={() => navigate("/")}>Main Page</div>
                <div className="add_to_cart_button" onClick={() => navigate("/all-students")}>Student details</div>
                <div className="add_to_cart_button" onClick={() => navigate("/all-courses")}>Courses details</div>
                <div className="add_to_cart_button" onClick={() => navigate("/all-lecturers")}>Lecturers details</div>
                <div className="add_to_cart_button" onClick={() => navigate("/all-webmasters")}>Webmaster details</div>
            </div>
        </header>
    )
}
export default Header;