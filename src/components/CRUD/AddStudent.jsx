import React, { useEffect, useState } from "react";
import classes from './model.css';
import ButtonClose from "../Templates/ButtonClose/ButtonClose";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addStudent } from "../../api/setData";
import { addStudent } from "../../redux/actions/setData";

const AddStudent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) {
            navigate('/');
        }
    }, [close, navigate]);

    const saveData = () => {
        const objData = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        };

        dispatch(addStudent(objData, navigate));
    };

    return (
        <div className="container">
            <ButtonClose close={setClose} />
            <div className="card">
                <h1 className="card_title">Add Student</h1>
                <p className="card_title-info">Pen By David Horvitz</p>
                <div className="card_form">
                    <div className="input">
                        <input
                            className="input_field"
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                        <label className="input_label">Student Name</label>
                    </div>
                    <div className="input">
                        <input
                            className="input_field"
                            type="text"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                        />
                        <label className="input_label">Phone Number</label>
                    </div>
                    <div className="input">
                        <input
                            className="input_field"
                            type="text"
                            value={Email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <label className="input_label">Email</label>
                    </div>

                    <button className="card_button" onClick={() => saveData()}  > Save New Student </button>


                </div>
            </div>
        </div>
    );
};

export default AddStudent;


// import React, { useEffect, useState } from "react";
// import classes from './model.css';
// import ButtonClose from "../Templates/ButtonClose/ButtonClose";
// import { useNavigate } from "react-router-dom";
// import { setData } from "../../api/setData";


// const AddStudent = (props) => {
//     const navigate = useNavigate();

//     const [Name, setName] = useState('');
//     const [PhoneNumber, setPhoneNumber] = useState('');
//     const [Email, setEmail] = useState('');
//     const [close, setClose] = useState(true);

//     useEffect(() => {
//         if (!close) navigate('/');
//     }, [close]);

//     const saveData = async () => {
//         const objData = {
//             Name: Name,
//             PhoneNumber: PhoneNumber,
//             Email: Email,
//         };

//         try {
//             const response = await setData(objData);
//             console.log(response);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="container">
//             <ButtonClose close={setClose} />
//             <div className="card">
//                 <h1 className="card_title">Add Student</h1>
//                 <p className="card_title-info">Pen By David Horvitz</p>
//                 <div className="card_form">
//                     <div className="input">
//                         <input
//                             className="input_field"
//                             type="text"
//                             value={Name}
//                             onChange={(e) => setName(e.currentTarget.value)}
//                         />
//                         <label className="input_label">Student Name</label>
//                     </div>
//                     <div className="input">
//                         <input
//                             className="input_field"
//                             type="text"
//                             value={PhoneNumber}
//                             onChange={(e) => setPhoneNumber(e.currentTarget.value)}
//                         />
//                         <label className="input_label">Phone Number</label>
//                     </div>
//                     <div className="input">
//                         <input
//                             className="input_field"
//                             type="text"
//                             value={Email}
//                             onChange={(e) => setEmail(e.currentTarget.value)}
//                         />
//                         <label className="input_label">Email</label>
//                     </div>

//                     <button className="card_button" onClick={() => saveData() && navigate("/")}  > Save New Student </button>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddStudent;