import React, {  useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editStudent } from "../../../store/actions/student/editStudent";
import { StudentForm } from "../../Templates/Forms/StudentForm";

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state.data;
    const [Name, setName] = useState(data.Name);
    const [PhoneNumber, setPhoneNumber] = useState(data.PhoneNumber);
    const [Email, setEmail] = useState(data.Email);



    const saveUpdateData = async () => {
     
        const updateDateObject = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        };
        //here i sand to the API request an object with tow properties, id to the url and the data that will be changed
        //you can see that in editStudent Api
        dispatch(editStudent({ id, updatedStudent: updateDateObject }))
            .then(() => {
                navigate('/all-students');
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
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
            saveData={saveUpdateData}
        />
    </div>
    )
};
export default EditStudent;
