import React, { useEffect, useState } from "react";
import main from './wrapper.css'
import { Table } from "../../Table";
import AddStudent from "../../CRUD/AddStudent";
import EditStudent from "../../CRUD/editStudent";
import { Route, Routes } from "react-router-dom";
import { getData  } from "../../../api/getData";
const Main = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        getData(setStudents);
    }, []);
    return (
        <main id="main">
            <Routes>
                <Route exect path="/" element={<Table students={students} />} />
                <Route path="/add-student" element={<AddStudent/>} />
                <Route path="/edit-student/:id" element={<EditStudent/>} />
            </Routes>
            <Table />
        </main>
    )
}
export default Main;