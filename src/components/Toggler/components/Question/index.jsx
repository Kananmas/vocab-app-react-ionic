import randomString from "../../../../utilis/random.string.utilis";
//hooks
import { useSelector } from "react-redux";
import { useTimer } from "../../../../hooks/timer.hook";
import { useEffect } from "react";
// components
import {
  IonBadge,
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// styles
import "./index.css";

export default function Question(props) {
  const Store = useSelector((state) => state);
  const selectedQuestion = Store.question;

  let { value, isDone, start } = useTimer(10);

  const HandleClick = (e) => {
    let answer = e.target.textContent;
    props.handler(answer);
  };

  useEffect(() => {
    start();
    if (isDone) {
      props.handler("");
    }
  }, [value]);

  return (
    <>
      <IonHeader class="question-header ion-no-border">
        <IonBadge color="light" className="header-badge">
          {props.questionCount + " / 10"}
        </IonBadge>
      </IonHeader>
      <IonContent className="question-text ion-padding">
        <h1>Find the right translation for selected word:</h1>
      </IonContent>
      <div className=" footer-wrapper">
        <IonTitle className="footer-timer">{value}</IonTitle>
        <IonFooter className="footer">
          <IonTitle className="footer-text">{selectedQuestion.word}</IonTitle>
          <IonToolbar className="footer-toolbar">
            <IonTitle className="option-text">Options:</IonTitle>
            {selectedQuestion.Options.map((option) => {
              return (
                <IonToolbar
                  key={randomString()}
                  onClick={HandleClick}
                  className="options"
                  color="light"
                >
                  {option}
                </IonToolbar>
              );
            })}
          </IonToolbar>
        </IonFooter>
      </div>
    </>
  );
}
