import React from "react";
import { useNavigate } from "react-router-dom";
import './header.scss'
const Header = () => {
    const navigate = useNavigate();

    return (
        <header id="header">
            <h1 id="os">Collage</h1>

            <div className="button_Container">
                <div className="add_to_cart_button" onClick={() => navigate("/")}>List of Students</div>
                <div className="add_to_cart_button" onClick={() => navigate("/add-student")}>Add a new Student</div>
            </div>
        </header>
    )
}
export default Header;