import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItemDivider, IonItem, IonIcon,IonLabel,IonInput, IonButton, IonCheckbox, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { logoFacebook } from 'ionicons/icons';
import { useHistory } from 'react-router-dom'; 
import { RouteComponentProps } from 'react-router-dom';


const Home: React.FC = () => {
  const history = useHistory(); // Add useHistory  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Facebook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
      <IonItem>
        <IonInput label='Username' labelPlacement='floating' type='text'></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label='Password' labelPlacement='floating' type='password'></IonInput>
      </IonItem>  

      <br></br> 
      <IonList lines='none'>
        <IonItem>
      <IonCheckbox checked = {true} alignment='center'>Remember me</IonCheckbox>       
        </IonItem>
        </IonList>      
      <br></br>
      <IonButton expand='block' fill='outline' size='small' color='primary' onClick={(e) => {e.preventDefault(); history.push('/new');}}>Login
      <IonIcon slot='start' icon={logoFacebook}></IonIcon>
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
