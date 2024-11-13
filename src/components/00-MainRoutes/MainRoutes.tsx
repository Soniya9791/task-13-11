import {
  IonIcon,
  IonRouterOutlet,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import { Redirect, Route, useLocation } from "react-router";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import {
  appsOutline,
  appsSharp,
  cartOutline,
  cartSharp,
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import SplashScreen from "../../pages/SplashScreen/SplashScreen";
import GetStart from "../../pages/GetStart";
import Login from "../05-Login/Login";
import Otp from "../06-Otp/Otp";
import Welcome from "../07-Welcome/Welcome";

const MainRoutes: React.FC = () => {
  const location = useLocation();

  // Check if the active tab is one of the specified paths
  const showTabBar = ["/tab1", "/tab2", "/tab3", "/tab4"].includes(
    location.pathname
  );

  return (
    <div>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/splashscreen">
            <SplashScreen />
          </Route>
          <Route path="/getstart">
            <GetStart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/otp">
            <Otp />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        {showTabBar && (
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon
                aria-hidden="true"
                icon={location.pathname === "/tab1" ? homeSharp : homeOutline}
              />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon
                aria-hidden="true"
                icon={location.pathname === "/tab2" ? appsSharp : appsOutline}
              />
              <IonLabel>Categories</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon
                aria-hidden="true"
                icon={
                  location.pathname === "/tab3" ? personSharp : personOutline
                }
              />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon
                aria-hidden="true"
                icon={location.pathname === "/tab4" ? cartSharp : cartOutline}
              />
              <IonLabel>Cart</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </div>
  );
};

export default MainRoutes;
