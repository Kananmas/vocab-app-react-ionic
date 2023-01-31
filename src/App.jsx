//Components
import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Toggler from "./components/Toggler";
import Slider from "./components/Slider";
//Store
import { store } from "./Store/store";
//react-redux
import { Provider } from "react-redux";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

export default function App() {
  return (
    <Provider store={store}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/dashboard" component={Slider} />
          <Route path="/Quiz" component={Toggler} />
          <Redirect exact from="/" to="/dashboard" />
        </IonRouterOutlet>
      </IonReactRouter>
    </Provider>
  );
}
