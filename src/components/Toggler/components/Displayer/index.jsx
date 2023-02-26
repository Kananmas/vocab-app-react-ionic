//Hooks
import { useEffect, useState } from "react";
//Utilities
import randomString from "../../../../utilis/random.string.utilis";
import { getFromLocalStorage } from "../../../../utilis/get.from.localstorage.utilis";
// ionic components
import {
  IonHeader,
  IonPage,
  IonToolbar,
  IonContent,
  IonList,
  IonText,
  IonRow,
  IonGrid,
  useIonToast,
  IonLabel,
  IonItemDivider,
  IonButton, useIonAlert,
} from "@ionic/react";
//styles
import "./index.css";

export default function Displayer() {
  let [mistakes, setMistakes] = useState([]);
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


  const [presentAlert] = useIonAlert();
  const displayScore = score - mistakes.length * 10

  let x = mistakes.map(mistake => {
    return mistake.chosenword
  })
  const yy = 10
  const xx = mistakes.map(mistake => {
    return { value: `${mistake.chosenword}` }
  })
  const [present] = useIonToast();




  return (
    <>

      <IonPage className="end-page">
        <IonHeader class="end-page-header ion-no-border">
          <IonToolbar className="end-page-title">
            <IonText >
              <h1>Done!</h1>
              <p>You can try again tomorrow, Good Luck!</p>

            </IonText>
          </IonToolbar>
        </IonHeader>
        <IonToolbar className="end-page-score">
          {<IonButton className="BTN" mode="ios" key={randomString()}
            onClick={() =>
              presentAlert({
                header: `${displayScore > 50 ? "Good Job!" : "Try Harder!"}`,
                message: `Your Score : ${displayScore}`,
                buttons: ["OK!"],
                mode:"ios"
              })
            }
          >
            Your Score!
          </IonButton>}
        </IonToolbar>

        <IonItemDivider className="end-page-score">
          <IonLabel className="end-page-score">
            Your Mistake! Practice Them
          </IonLabel>
        </IonItemDivider>
        <IonContent className="end-page-content">
          <IonList inset={true}>

            <IonGrid>
              <IonRow className="wrong-answer-item">
                {mistakes.map(mistake => {
                  return (
                    <IonButton className="BTN" expand="block" key={randomString()}
                      onClick={() =>
                        presentAlert({
                          header: `${mistake.chosenword}`,

                          message: `${mistake.trueAnswer}`,
                          buttons: ["Got It!"],
                          mode:"ios"

                        })
                      }
                    >
                      {mistake.chosenword}
                    </IonButton>
                  )
                })}
              </IonRow>
            </IonGrid>

          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
}
