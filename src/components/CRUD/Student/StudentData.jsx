import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentWithCourses } from "../../../store/actions/student/getStudentWithCourses";
import Spinner from "../../Templates/Spinner/Spinner";
import { DynamicTable } from "../../Templates/Table/DynamicTable";


export const StudentData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //the state => state.student.students came from the store state in the index file
    const students = useSelector(state => state.student.students);//like this i can access to the specific students state in the reducer 
    // const loading = useSelector((state) => state.student.loading);
    // const error = useSelector((state) => state.student.error);
    // if (!students) {
    //     return null;
    // }
    // if (loading) {
    //     return <div>
    //         <Spinner />
    //     </div>
    // }

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }
    const tableData = students.map(student => ({
        Id: student.Id,
        Name: student.Name,
        Phone_Number: student.PhoneNumber,
        Email: student.Email,
    }));

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
    const handlerStudentCourses = (id, data) => {
        dispatch(getStudentWithCourses(id))
            .then(() => {
                navigate(`/student-with-courses/${id}`, {
                    state: {
                        data: data,
                    }
                });
            })
            .catch((err) => {
                console.error('Failed to add student:', err);
            });


    }

    const handlerAddStudentToCourse = (id) => {
        navigate(`/add-student-to-course/${id}`)
    };


    return (
        <div>
            <h1>Student details</h1>
            <DynamicTable
                data={tableData}
                onButtonClickDelete={(student) => handlerDeleteStudent(student.Id, student)}
                onButtonClickUpdate={(student) => handlerEditStudent(student.Id, student)}
                onButtonClickGetProperties={(student) => handlerStudentCourses(student.Id, student)}
                onButtonClickAdd={(student) => handlerAddStudentToCourse(student.Id)} />

        </div>
    );
};

