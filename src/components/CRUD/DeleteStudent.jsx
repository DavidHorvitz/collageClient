import React, { useEffect, useState } from "react";
import classes from './model.css';
import ButtonClose from "../Templates/ButtonClose/ButtonClose";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteData } from "../../redux/actions/deleteData";
import { useDispatch } from "react-redux";


const DeleteStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state?.data || {};

    const [Name, setName] = useState(data.Name);
    const [PhoneNumber, setPhoneNumber] = useState(data.PhoneNumber);
    const [Email, setEmail] = useState(data.Email);
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) navigate('/');
    }, [close, navigate]);


    const deleteStudent = () => {
        try {
            dispatch(deleteData(id, navigate));
            setClose(false); // set close to false to trigger the useEffect in the component
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <ButtonClose close={setClose} />
            <div className="card">
                <h2 className="card_title">Are you sure you want to delete this Student?</h2>
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
                    <button className="card_button" onClick={() => deleteStudent()} >Delete</button>
                </div>
            </div>
        </div>
    )
};


export default DeleteStudent;