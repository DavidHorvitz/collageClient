import { GET_STUDENTS } from '../actions/getData';

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
        default:
            return state;
    }
};

export default reducer;
// In this reducer, we define an initial state with an empty array for the students property. The reducer listens for the GET_STUDENTS action type and updates the students property in the state with the payload data received from the server.

