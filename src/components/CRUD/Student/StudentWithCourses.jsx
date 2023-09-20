import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Templates/Spinner/Spinner";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteStudent } from "../../../store/actions/student/deleteStudent";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";

export const StudentWithCourses = () => {
    const loading = useSelector((state) => state.student.loading);
    const error = useSelector((state) => state.student.error);
    const studentCourses = useSelector(state => state.student.studentCourses);
    const students = useSelector(state => state.student.students);
    const location = useLocation();
    const studentId = location.state.data.Id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = React.useState(false);
    const selectedStudent = students.find(student => student.Id === studentId);

    if (!studentCourses) {
        return <h1>No student data available for the selected ID.</h1>;
    }
    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    const handleDeleteButtonClick = () => {
        setShowDeleteConfirmation(true);
    };

    const handleDeleteStudentItem = () => {
        dispatch(deleteStudent(studentId))
            .then(() => {
                navigate("/all-students");
            })
            .catch((err) => {
                console.error("Failed to Delete Course:", err);
            })
    }
    const handleUpdateStudent = () => {
        navigate(`/edit-student/${studentId}`, {
            state: {
                data: selectedStudent,
            }
        });
    };

    const HandlerAddStudentToCourse = () => {
        navigate(`/add-student-to-course/${studentId}`)
    };

    return (
        <Card className="h-full float-right" sx={{ width: '100%' }}>
            <CardMedia sx={{ height: '300px', width: '30%' }}
                key={studentCourses.Id}
                component="img"
                alt="green iguana"
                image={studentCourses.ImageProfile}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {studentCourses.Name}
                </Typography>
                {studentCourses.Courses && studentCourses.Courses.length > 0 && (
                    <div>
                        {studentCourses.Courses.map((course) => (
                            <div key={course.Id}> {/* Assign a unique key */}
                                <Typography variant="body2" color="text.secondary">
                                    Course Id : {course.Id}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Name : {course.CourseName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Starting Date : {course.StartingDate}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    End Date : {course.EndDate}
                                </Typography>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleDeleteButtonClick}>Delete Item</Button>
                <Button size="small" onClick={() => HandlerAddStudentToCourse()}>Add Student to Course</Button>
                <Button size="small" onClick={() => handleUpdateStudent()}>Edit Student</Button>
                <Button size="small" onClick={() => navigate("/all-students")}>Back</Button>
                {showDeleteConfirmation && (
                    <DeleteConfirmation onCancel={() => setShowDeleteConfirmation(false)} onConfirm={handleDeleteStudentItem} />
                )}
            </CardActions>
        </Card>
    );
};
