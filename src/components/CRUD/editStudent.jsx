import React, { useEffect, useState } from "react";
import classes from './model.css';
import ButtonClose from "../Templates/ButtonClose/ButtonClose";
import { useLocation, useNavigate,useParams  } from "react-router-dom";
import { editData } from "../../api/editData";

const EditStudent = props => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state?.data || {};

    const [Name, setName] = useState(data.Name);
    const [PhoneNumber, setPhoneNumber] = useState(data.PhoneNumber);
    const [Email, setEmail] = useState(data.Email);
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) navigate('/');
    }, [close, navigate]);
    
   

    useEffect(() => {
        setName(data.Name);
        setPhoneNumber(data.PhoneNumber);
        setEmail(data.Email);
    }, [data]);

    const saveData = async () => {
        const objData = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        };
        try {
            const response = await editData(id,objData);
            console.log(response); // log the response from the server
            setClose(false); // set close to false to trigger the useEffect in the component
        } catch (err) {
            console.log(err);
        }
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
                    <button className="card_button" onClick={() => saveData() && navigate("/")} >Save Changes</button>
                </div>
            </div>
        </div>
    )
};


export default EditStudent;