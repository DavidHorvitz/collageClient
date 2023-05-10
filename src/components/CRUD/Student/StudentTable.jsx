import React from "react";
import "./studentTable.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentWithCourses } from "../../../store/actions/student/getStudentWithCourses";
import Spinner from "../../Templates/Spinner/Spinner";



export const StudentTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //the state => state.student.students came from the store state in the index file
    const students = useSelector(state => state.student.students);//like this i can access to the specific students state in the reducer 
    const loading = useSelector((state) => state.student.loading);
    const error = useSelector((state) => state.student.error);
    if (!students) {
        return null;
    }
    if (loading) {
        return <div>
            <Spinner />
        </div>
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
            <table className="table">
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
                            <td>{student.Name} </td>
                            <td>{student.PhoneNumber}</td>
                            <td>{student.Email}</td>
                            <td>{student.Id}</td>
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
                            <td>
                                <div className='button_container'>
                                    <div className='property_button' onClick={() => handlerStudentCourses(student.Id, student)}>Courses</div>
                                </div>
                            </td>
                            <td>
                                <div className='button_container'>
                                    <div className='add_student_to_course' onClick={() => handlerAddStudentToCourse(student.Id)}>Add to course</div>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};
