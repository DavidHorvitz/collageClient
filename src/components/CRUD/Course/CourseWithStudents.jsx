import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Templates/Spinner/Spinner";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from "react-router-dom";
import DeleteConfirmation from "../../Templates/DeleteConfirmation/DeleteConfirmation";
import { deleteCourse } from "../../../store/actions/course/deleteCourse";

export const CourseWithStudents = () => {
    const loading = useSelector((state) => state.course.loading);
    const error = useSelector((state) => state.course.error);
    const courseStudents = useSelector(state => state.course.courseWithStudents);
    const courses = useSelector(state => state.course.courses);
    const location = useLocation();
    const courseId = location.state.data.Id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = React.useState(false);
    const selectedCourses = courses.find(course => course.Id === courseId);

    if (!courseStudents) {
        return <h1>No course data available for the selected ID.</h1>;
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

    const handleDeleteCourseItem = () => {
        dispatch(deleteCourse(courseId))
            .then(() => {
                navigate("/all-courses");
            })
            .catch((err) => {
                console.error("Failed to Delete Course:", err);
            })
    }
    const handleUpdateCourse = () => {
        navigate(`/edit-course/${courseId}`, {
            state: {
                data: selectedCourses,
            }
        });
    };

    // const HandlerAddStudentToCourse = () => {
    //     navigate(`/add-student-to-course/${courseId}`)
    // };

    return (
        <Card className="h-full float-right" sx={{ width: '100%' }}>
            <CardMedia sx={{ height: '300px', width: '30%' }}
                component="img"
                alt="green iguana"
                image="https://images.squarespace-cdn.com/content/v1/5a7c0544d74cffa3a6ce66b3/1630183781197-HDM6VZNPNANFZIYPJUI5/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA+%D7%A0%D7%95%D7%A3+-+%D7%A9%D7%95%D7%95%D7%99%D7%A5.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {courseStudents.CourseName}
                </Typography>
                {courseStudents.Students && courseStudents.Students.length > 0 && ( // Check if courses exist
                    <div>
                        {courseStudents.Students.map((student) => (
                            <div key={student.Id}>
                                <Typography variant="body2" color="text.secondary">
                                     Name : {student.Name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   Email : {student.Email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Phone Number : {student.PhoneNumber}
                                </Typography>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleDeleteButtonClick}>Delete Item</Button>
                {/* <Button size="small" onClick={() => HandlerAddStudentToCourse()}>Add Student to Course</Button> */}
                <Button size="small" onClick={() => handleUpdateCourse()}>Edit Course</Button>
                <Button size="small" onClick={() => navigate("/all-courses")}>Back</Button>
                {showDeleteConfirmation && (
                    <DeleteConfirmation onCancel={() => setShowDeleteConfirmation(false)} onConfirm={handleDeleteCourseItem} />
                )}
            </CardActions>
        </Card>
    );
};
