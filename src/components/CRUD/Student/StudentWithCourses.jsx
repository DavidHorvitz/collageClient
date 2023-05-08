import React from "react";
import { useSelector } from "react-redux";
import './studentWithCourses.css'
import Spinner from "../../Templates/Spinner/Spinner";

export const StudentWithCourses = () => {
    const students = useSelector(state => state.student.studentCourses);
    const loading = useSelector((state) => state.student.loading);
    const error = useSelector((state) => state.student.error);

    if (!students) {
        return null;
    }

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <React.Fragment>
            {students.map((student) => (
                <div key={student.Name}>
                    <h1>{student.Name}</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Starting Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.Courses.map((course) => (
                                <tr key={course.CourseName}>
                                    <td className="course-code">{course.CourseName}</td>
                                    <td className="course-title">{course.StartingDate}</td>
                                    <td className="course-title">{course.EndDate}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </React.Fragment>
    );
}
