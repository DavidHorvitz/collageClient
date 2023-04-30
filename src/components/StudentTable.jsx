import React from "react";
import table from "./studentTable.css";
import { Row1, Row2, Row3, Row4 } from "./Templates/Row";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



export const StudentTable = () => {
    const navigate = useNavigate();
    //the state => state.student.students came from the store state in the index file
    const students = useSelector(state => state.student.students);//like this i can access to the specific students state in the reducer 
    const loading = useSelector((state) => state.student.loading);
    const error = useSelector((state) => state.student.error);
    if (!students) {
        return null;
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    const handlerEditStudent = (id, data) => {
        navigate(`/edit-student/${id}`, {
            state: {
                data: data,
            }
        });
    };
    const handlerDeleteStudent = (id, data) => {
        navigate(`/delete-student/${id}`, {
            state: {
                data: data,
            }
        });
    };

    return (
        <div>
            <h1>Student details</h1>
            <table id="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th>Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.Id}>
                            <td><Row1 name={student.Name} /></td>
                            <td><Row2 phoneNumber={student.PhoneNumber} /></td>
                            <td><Row3 email={student.Email} /></td>
                            <td><Row4 id={student.Id} /></td>
                            <td>
                                <div className='button_container'>
                                    <div className='edit_button' onClick={() => handlerEditStudent(student.Id, student)}>Edit</div>
                                </div>
                            </td>
                            <td>
                                <div className='button_container'>
                                    <div className='delete_button' onClick={() => handlerDeleteStudent(student.Id, student)}>Delete</div>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};
