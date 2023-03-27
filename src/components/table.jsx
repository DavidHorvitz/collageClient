import React from "react";
import table from "./table.css";
import { Row1, Row2, Row3 } from "./Row";
// import InputViewer from "./inputVV";
// import { getData } from "../api/getData";
export function Table(props) {

    const { students } = props;
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
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.Id}>
                                <td><Row1 name={student.Name} /></td>
                                <td><Row2 phoneNumber={student.PhoneNumber} /></td>
                                <td><Row3 email={student.Email} /></td>
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