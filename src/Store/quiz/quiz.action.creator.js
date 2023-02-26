import { ADD_MISTAKE, ADD_QUESTION_LIST } from "./quiz.constants";
import questionListCreator from "../../utilis/question.list.creator.utilis";
import { Wordlist } from "../../utilis/word.list.utilis";


export function quizAddMistakeAction(payload) {
    return {
        type:ADD_MISTAKE,
        payload,
    }
}

export function quizQuestionListAction(){
    return {
        type:ADD_QUESTION_LIST,
        payload:questionListCreator(Wordlist),
    }
}