//utillities
import { Wordlist } from "../../utilis/word.list.utilis";
import questionListCreator from "../../utilis/question.list.creator.utilis";
import randomString from "../../utilis/random.string.utilis";
import { getFromLocalStorage } from "../../utilis/get.from.localstorage.utilis";
//hooks
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
//css
import "./index.css";
//components
import Question from "./components/Question";
import Displayer from "./components/Displayer";
//Actions
import {
  quizAddMistakeAction,
  quizSelectedQuestionAction,
  quizSetQuestionListAction,
} from "../../Store/quiz/quiz.action.creators";

export default function Toggler() {
  const Store = useSelector((state) => state);
  const dispatch = useDispatch();
  let wrongAnswers = Store.mistakes;
  let [questions, setQuestions] = useState(questionListCreator([...Wordlist]));
  let [chosenIndex, setChosenIndex] = useState(0);

  useEffect(() => {
    //if finds the today's date in local storage it stops the quiz
    //set the selected question in redux state
    let date = getFromLocalStorage("quizDate");
    if (date === new Date().toDateString()) {
      setChosenIndex(10);
    } else {
      localStorage.setItem("Mistakes", JSON.stringify(wrongAnswers));
      localStorage.removeItem("quizDate");
    }
  }, []);

  useEffect(() => {
    //prevents creations of a new list on each render by stroeing the first list on redux
    //and using it for next renders
    if (!Store.questionlist.length) {
      dispatch(quizSetQuestionListAction(questions));
    } else {
      setQuestions(Store.questionlist);
    }
    if (chosenIndex < 10) {
      dispatch(quizSelectedQuestionAction(questions[chosenIndex]));
    }
  }, [chosenIndex]);

  //if chosenIndex is less was less than 10 we dispatch the latest question to state
  //this is here to avoid sending undifined values to reudcer

  const HandleAnswer = (answer) => {
    //checks if the answer is wrong the put it into state's wrong answers with the correct response
    if (answer !== questions[chosenIndex].trueAnswer) {
      let chosenword = questions[chosenIndex].word;
      let trueAnswer = questions[chosenIndex].trueAnswer;

      dispatch(quizAddMistakeAction({ chosenword, trueAnswer }));

      localStorage.setItem("Mistakes", JSON.stringify(wrongAnswers));
    }

    setChosenIndex((index) => index + 1);
  };

  return (
    <>
      {chosenIndex < 10 ? (
        <Question
          key={randomString()}
          handler={HandleAnswer}
          questionCount={chosenIndex + 1}
        />
      ) : (
        <Displayer />
      )}
    </>
  );
}
