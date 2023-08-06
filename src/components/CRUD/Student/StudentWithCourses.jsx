
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../../Templates/Spinner/Spinner";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { deleteStudent } from "../../../store/actions/student/deleteStudent";
// import { useLocation, useNavigate } from "react-router-dom";

// export const StudentWithCourses = () => {
//     const loading = useSelector((state) => state.student.loading);
//     const error = useSelector((state) => state.student.error);
//     const studentCourses = useSelector(state => state.student.studentCourses);
//     const location = useLocation();
//     const data = location.state.data.Id;
//     console.log("data" + data);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     console.log("studentCourses", studentCourses);

//     if (!studentCourses) {
//         return <h1>No student data available for the selected ID.</h1>;
//     }
//     if (loading) {
//         return <Spinner />;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }
//     const handleDeleteStudentItem = () => {
//         dispatch(deleteStudent(data))
//             .then(() => {
//                 navigate("/all-students");
//             })
//             .catch((err) => {
//                 console.error("Failed to Delete Course:", err);
//             })
//     }
//     const HandlerAddStudentToCourse = () => {
//         navigate(`/add-student-to-course/${data}`)
//     };
//     return (
//         <Card className="h-full float-right" sx={{ width: '100%' }}>
//             <CardMedia sx={{ height: '300px', width: '30%' }}
//                 component="img"
//                 alt="green iguana"
//                 // height="140"
//                 image="https://images.squarespace-cdn.com/content/v1/5a7c0544d74cffa3a6ce66b3/1630183781197-HDM6VZNPNANFZIYPJUI5/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA+%D7%A0%D7%95%D7%A3+-+%D7%A9%D7%95%D7%95%D7%99%D7%A5.jpg"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {studentCourses.Name}
//                 </Typography>

//                 <div>

//                     {studentCourses.Courses.map((course) => (
//                         <div key={course.Id}>
//                             <Typography variant="body2" color="text.secondary">
//                                 Course Name : {course.CourseName}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Starting Date : {course.StartingDate}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 End Date : {course.EndDate}
//                             </Typography>
//                         </div>
//                     ))}
//                 </div>
//             </CardContent>
//             <CardActions>
//                 <Button size="small" onClick={() => handleDeleteStudentItem()}>Delete Item </Button>
//                 <Button size="small" onClick={() => HandlerAddStudentToCourse()}>Add Student to Course</Button>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//         </Card>
//     );
// };
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

export const StudentWithCourses = () => {
    const loading = useSelector((state) => state.student.loading);
    const error = useSelector((state) => state.student.error);
    const studentCourses = useSelector(state => state.student.studentCourses);
    const location = useLocation();
    const data = location.state.data.Id;
    console.log("data" + data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("studentCourses", studentCourses);

    if (!studentCourses) {
        return <h1>No student data available for the selected ID.</h1>;
    }
    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleDeleteStudentItem = () => {
        dispatch(deleteStudent(data))
            .then(() => {
                navigate("/all-students");
            })
            .catch((err) => {
                console.error("Failed to Delete Course:", err);
            })
    }

    const HandlerAddStudentToCourse = () => {
        navigate(`/add-student-to-course/${data}`)
    };

    return (
        <Card className="h-full float-right" sx={{ width: '100%' }}>
            <CardMedia sx={{ height: '300px', width: '30%' }}
                component="img"
                alt="green iguana"
                image="https://images.squarespace-cdn.com/content/v1/5a7c0544d74cffa3a6ce66b3/1630183781197-HDM6VZNPNANFZIYPJUI5/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA+%D7%A0%D7%95%D7%A3+-+%D7%A9%D7%95%D7%95%D7%99%D7%A5.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {studentCourses.Name}
                </Typography>
                {studentCourses.Courses && studentCourses.Courses.length > 0 && ( // Check if courses exist
                    <div>
                        {studentCourses.Courses.map((course) => (
                            <div key={course.Id}>
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
                <Button size="small" onClick={() => handleDeleteStudentItem()}>Delete Item</Button>
                <Button size="small" onClick={() => HandlerAddStudentToCourse()}>Add Student to Course</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};
