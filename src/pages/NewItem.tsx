import { IonBackButton, IonButtons, IonIcon,IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { logoFacebook, logOut ,bug} from 'ionicons/icons';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonBackButton icon={logOut} defaultHref="/home"></IonBackButton> 
          </IonButtons>
          <IonTitle>Logged In!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Facebook is experiencing issues. Please try after sometime</p>
        <IonIcon icon={bug}></IonIcon>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
