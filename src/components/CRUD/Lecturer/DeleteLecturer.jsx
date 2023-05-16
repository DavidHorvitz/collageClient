import React, {  useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteLecturer } from "../../../store/actions/lecturer/deleteLecturer";
import { LecturerForm } from "../../Templates/Forms/LecturerForm";


const DeleteLecturer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state?.data || {};

    const [Name, setName] = useState(data.Name);
    const [PhoneNumber, setPhoneNumber] = useState(data.Phone_Number);
    const [Email, setEmail] = useState(data.Email);



    const deleteStudentFunction = () => {
        dispatch(deleteLecturer(id))
            .then(() => {
                navigate('/all-lecturers');
            })
            .catch((err) => {
                console.error('Failed to Delete student:', err);
            });
    };

    return (
        <div>
        <h1>Delete Lecturer</h1>
        <LecturerForm
            Name={Name}
            setName={setName}
            PhoneNumber={PhoneNumber}
            setPhoneNumber={setPhoneNumber}
            Email={Email}
            setEmail={setEmail}
            saveData={deleteStudentFunction}
        />
    </div>
    )
};
export default DeleteLecturer;