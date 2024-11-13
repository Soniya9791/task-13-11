import React from "react";
import "../07-Welcome/Welcome.css";
import image from "../../assets/image.png";
import { IonContent, IonPage } from "@ionic/react";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <div className="main">
        <p className="text">Welcome</p>
      </div>
    </IonPage>
  );
};

export default Welcome;
