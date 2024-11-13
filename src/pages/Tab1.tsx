import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/01-Home/Home';
import './Tab1.css';
import Home from '../components/01-Home/Home';

const Tab1: React.FC = () => {
  return (
    <IonPage>
    <Home/>
    </IonPage>
  );
};

export default Tab1;
