import { GET_STUDENTS } from '../actions/getData';
import { SET_STUDENTS } from '../actions/setData';
import { EDIT_STUDENTS } from '../actions/editData';
import { DELETE_STUDENTS } from '../actions/deleteData';

const initialState = {
    students: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            };
        case SET_STUDENTS:
            return {
                ...state,
                students: [...state.students, action.payload]//This is how you add the new member to the existing array and not create a new array
            };
        case EDIT_STUDENTS:
            const updatedStudent = action.payload;
            return {
                ...state,
                students: state.students.map(student => {
                    if (student.Id === updatedStudent.Id) {
                        // Update the student with the updatedStudent data
                        return {
                            ...student,
                            Name: updatedStudent.Name,
                            PhoneNumber: updatedStudent.PhoneNumber,
                            Email: updatedStudent.Email
                        };
                    }
                    return student;
                })
            };

        case DELETE_STUDENTS:
            const studentIdToDelete = action.payload;
            const filteredStudents = state.students.filter(student => student.Id !== studentIdToDelete);
            return { ...state, students: filteredStudents };
        default:
            return state;
    }
};
export default reducer;
// In this reducer, we define an initial state with an empty array for the students property. The reducer listens for the GET_STUDENTS action type and updates the students property in the state with the payload data received from the server.

