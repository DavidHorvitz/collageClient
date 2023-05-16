import React, {  useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editLecturer } from "../../../store/actions/lecturer/editLecturer";
import { LecturerForm } from "../../Templates/Forms/LecturerForm";
const EditLecturer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const data = location.state.data;
    const [Name, setName] = useState(data.Name);
    const [PhoneNumber, setPhoneNumber] = useState(data.Phone_Number);
    const [Email, setEmail] = useState(data.Email);



    const saveUpdateData = async () => {
     
        const updateDateObject = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        };
        //here i sand to the API request an object with tow properties, id to the url and the data that will be changed
        //you can see that in editStudent Api
        dispatch(editLecturer({ id, updatedLecturer: updateDateObject }))
            .then(() => {
                navigate('/all-lecturers');
            })
            .catch((err) => {
                console.error('Failed to add lecturer:', err);
            });

    };

    return (
        <div>
        <h1>Edit Lecturer</h1>
        <LecturerForm
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
export default EditLecturer;
