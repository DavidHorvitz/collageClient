import React from "react";
import table from "./table.css";
import { Row1, Row2, Row3, Row4 } from "./Templates/Row";
import { useNavigate } from "react-router-dom";
export const Table = (props) => {
    const { students } = props;
    const navigate = useNavigate();

    const handlerEditStudent = (id,data) => {
        navigate(`/edit-student/${id}`, {
            state: {
                data: data,
            }
        });
    };
    return (
        <div>
            <h1>Student details</h1>
            {students && students.length > 0 ? (
                <table id="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>PhoneNumber</th>
                            <th>Email</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.Id}>
                                <td><Row1 name={student.Name} /></td>
                                <td><Row2 phoneNumber={student.PhoneNumber} /></td>
                                <td><Row3 email={student.Email} /></td>
                                <td><Row4 id={student.Id} /></td>
                                <div className='edit_button' onClick={() =>  handlerEditStudent(student.Id,student)}>Edit</div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
