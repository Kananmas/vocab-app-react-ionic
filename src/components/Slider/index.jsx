//Components
import { IonSlides, IonSlide, IonButton } from "@ionic/react";
import { Link } from "react-router-dom";
//Styles
import "./index.css";

export default function Slider() {
  return (
    <IonSlides>
      <IonSlide className="Slide-section">
        <div className="section">
          <h1>Welcome to GoodVocab</h1>
          <p>
            this is a vocabulary app designed for learning english words for all
            persian speakers
          </p>
        </div>
      </IonSlide>
      <IonSlide className="Slide-section">
        <div className="section">
          <h1>How to use?</h1>
          <p>
            in this app, you will take a quiz right after opening the app after
            finishing quiz you will see your score and your mistakes
          </p>
        </div>
      </IonSlide>
      <IonSlide className="Slide-section">
        <div className="section">
          <h1>Click here to start</h1>
          <IonButton color="success" routerLink="/Quiz">
            Let`s Go!
          </IonButton>
        </div>
      </IonSlide>
    </IonSlides>
  );
}
