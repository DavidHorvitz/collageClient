import React, {  useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../../store/actions/student/deleteStudent";
import { StudentForm } from "../../Templates/Forms/StudentForm";


const DeleteStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state?.data || {};

    const [Name, setName] = useState(data.Name);
    const [PhoneNumber, setPhoneNumber] = useState(data.PhoneNumber);
    const [Email, setEmail] = useState(data.Email);



    const deleteStudentFunction = () => {
        dispatch(deleteStudent(id))
            .then(() => {
                navigate('/all-students');
            })
            .catch((err) => {
                console.error('Failed to Delete student:', err);
            });
    };

    return (
        <div>
        <h1>Edit Student</h1>
        <StudentForm
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
export default DeleteStudent;