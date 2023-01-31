//Hooks
import { useEffect, useState } from "react";
import { useIonAlert } from "@ionic/react";
//Utilities
import { getFromLocalStorage } from "../../../../utilis/get.from.localstorage.utilis";
//Components
import { IonAlert, IonButton, IonContent } from "@ionic/react";

export default function Displayer() {
  let [mistakes, setMistakes] = useState([]);
  let [showAlert, setShowAlert] = useState(false);
  let score = 100;

  useEffect(() => {
    //it there was no quizdDate in localStorage in sets today date in local storage
    //and finds the wrong answers in local storage
    let date = getFromLocalStorage("quizDate");

    if (!date) {
      localStorage.setItem("quizDate", new Date().toDateString());
    }

    let mistakesList = getFromLocalStorage("Mistakes");

    if (mistakesList) {
      const payload = JSON.parse(mistakesList);
      setMistakes(payload);
    }
  }, []);

  const CreateMessage = () => {
    let result = [];
    mistakes.map((mistake) =>
      result.push(` <div>${mistake.chosenword} is ${mistake.trueAnswer}<div> `)
    );
    return result.join("");
  };

  return (
    <div className="score">
      <h1 className="grade">Score: {score - mistakes.length * 10} </h1>

      <IonButton onClick={() => setShowAlert(true)}>
        See your mistakes
      </IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Alert"
        subHeader="Important message"
        message={CreateMessage()}
        buttons={["OK"]}
      />
    </div>
  );
}
