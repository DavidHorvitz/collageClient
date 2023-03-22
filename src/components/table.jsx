import React from "react";
import table from "./table.css";
import { Row1, Row2, Row3 } from "./Row";

export function Table() {
    let students = [
        { id: 1, Name: 'David', PhoneNumber: "0594857685", Email: "dfrkeje@fkjkff.com" },
        { id: 2, Name: 'B', PhoneNumber: "0594857685", Email: "dfrkeje@fkjkff.com" },
        { id: 3, Name: 'C', PhoneNumber: "0594857685", Email: "dfrkeje@fkjkff.com" },
        { id: 4, Name: 'D', PhoneNumber: "0594857685", Email: "dfrkeje@fkjkff.com" },
        { id: 5, Name: 'E', PhoneNumber: "0594857685", Email: "dfrkeje@fkjkff.com" },
        { id: 6, Name: 'F', PhoneNumber: "0594857685", Email: "dfrkeje@fkjkff.com" },
        { id: 7, Name: 'G', PhoneNumber: "0594857685", Email: "dfrkeje@fkjkff.com" }
    ];
    return (
        <div>
            <table id="table">
                <tr>
                    <th>Name</th>
                    <th>PhoneNumber</th>
                    <th>Email</th>
                </tr>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td><Row1 name={student.Name} /></td>
                        <td><Row2 phoneNumber={student.PhoneNumber} /></td>
                        <td><Row3 email={student.Email} /></td>
                    </tr>
                ))}

            </table>
        </div >
    );
}