import React, { useEffect, useState } from "react";
import classes from './model.css';
import ButtonClose from "../../Templates/ButtonClose/ButtonClose";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editStudent } from "../../../store/actions/student/editStudent";
const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state.data;
    const [Name, setName] = useState(data.Name);
    const [PhoneNumber, setPhoneNumber] = useState(data.PhoneNumber);
    const [Email, setEmail] = useState(data.Email);
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) {
            navigate('/');
        }
    }, [close, navigate]);


    const saveUpdateData = async () => {
        const updateDateObject = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        };
        //here i sand to the API request an object with tow properties, id to the url and the data that will be changed
        //you can see that in editStudent Api
        dispatch(editStudent({ id, updatedStudent: updateDateObject }))
            // dispatch(editStudent(id, updateDateObject))
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });
        console.log("The updated student ID :", updateDateObject);
    };

    return (
        <div className="container">
            <ButtonClose close={setClose} />
            <div className="card">
                <h1 className="card_title">Edit Student</h1>
                <p className="card_title-info">Pen By David Horvitz</p>
                <div className="card_form">
                    <div className="input">
                        <input className="input_field" type="text" value={Name} onChange={e => setName(e.currentTarget.value)} />
                        <label className="input_label">Name</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={PhoneNumber} onChange={e => setPhoneNumber(e.currentTarget.value)} />
                        <label className="input_label">Phone Number</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={Email} onChange={e => setEmail(e.currentTarget.value)} />
                        <label className="input_label">Email</label>
                    </div>
                    <button className="card_button" onClick={() => saveUpdateData()} >Save Changes</button>
                </div>
            </div>
        </div>
    )
};
export default EditStudent;
