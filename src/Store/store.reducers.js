import { combineReducers } from "redux";
import mistakesReducer from "./quiz/quiz.mistakes.reducer";
import questionReducer from "./quiz/quiz.selected.question.reducer";
import questionListReducer from "./quiz/quiz.set.question.list.reducer";


export const reducers = combineReducers({
    mistakes: mistakesReducer,
    question: questionReducer,
    questionlist: questionListReducer,
})