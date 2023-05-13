import React, { useEffect, useState } from "react";
import '../../CRUD/model.css'
import ButtonClose from "../ButtonClose/ButtonClose";
import { isNameValid, isPhoneNumberValid, isEmailValid } from "../../../validation/inputValidation";
import { useNavigate } from "react-router-dom";
export const StudentForm = ({ Name, setName, PhoneNumber, setPhoneNumber, Email, setEmail, saveData }) => {
    const [close, setClose] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!close) {
            navigate('/all-courses');
        }
    }, [close, navigate]);
    
    return (
        <div className="container">
            <ButtonClose close={setClose} />
            <div className="card">
                <h1 className="card_title"> Student</h1>
                <p className="card_title-info">Pen By David Horvitz</p>
                <div className="card_form">
                    <div className="input">
                        <input
                            className={`input_field ${!isNameValid(Name) && "invalid"}`}
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                        <label className="input_label">Name</label>
                        {!isPhoneNumberValid(Name) && (
                            <span className="error">Please enter a valid Name.</span>
                        )}
                    </div>
                    <div className="input">
                        <input
                            className={`input_field ${!isPhoneNumberValid(PhoneNumber) && "invalid"}`}
                            type="text"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                        />
                        <label className="input_label">Phone Number</label>
                        {!isPhoneNumberValid(PhoneNumber) && (
                            <span className="error">Please enter a valid phone number.</span>
                        )}
                    </div>

                    <div className="input">
                        <input
                            className={`input_field ${!isEmailValid(Email) && "invalid"}`}
                            type="text"
                            value={Email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <label className="input_label">Email</label>
                        {!isEmailValid(Email) && (
                            <span className="error">Please enter a valid email address.</span>
                        )}
                    </div>

                    <button className="card_button" onClick={saveData}>Save</button>
                </div>
            </div>
        </div>
    );
}

