import { ADD_MISTAKE, ADD_QUESTION_LIST } from "./quiz.constants";

const initialState = {
    mistakes: [],
}

export default function quizReducer(state = {...initialState}, action) {
    switch (action.type) {
        case ADD_MISTAKE:
            state.mistakes.push(action.payload);
            break;
        case ADD_QUESTION_LIST:
            state.questionlist = action.payload;
            break;
    }
    return state;
}