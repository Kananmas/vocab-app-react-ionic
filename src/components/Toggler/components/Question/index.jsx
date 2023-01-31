import randomString from "../../../../utilis/random.string.utilis";
//hooks
import { useSelector } from "react-redux";
import { useTimer } from "../../../../hooks/timer.hook";
import { useEffect } from "react";
//components
import { IonText, IonItemDivider, IonItemGroup } from "@ionic/react";
//icons
import { ClockCircleOutlined } from "@ant-design/icons";

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
    <IonText>
      <IonItemGroup>
        <h3 className="question-counter">{props.questionCount + " / 10"}</h3>
        <IonItemDivider color="tertiary">
          <h2>Find the right translation for selected word:</h2>
        </IonItemDivider>
        <h2 className="question-word">{selectedQuestion.word}</h2>
      </IonItemGroup>
      <div className="question">
        <div className="button-group">
          {selectedQuestion.Options.map((option) => {
            return (
              <div key={randomString()}>
                <button onClick={HandleClick}>{option}</button>
              </div>
            );
          })}
        </div>
        <div className="timer">
          <ClockCircleOutlined style={{ fontSize: "22px" }} />
          <h4>{value}</h4>
        </div>
      </div>
    </IonText>
  );
}
