import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="loader"></div>
        <IonCard>
            <img alt="Silhouette of mountains" src="https://picsum.photos/1920/1080" />
            <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img alt="Silhouette of mountains" src="https://picsum.photos/1920/1200" />
            <IonCardHeader>
                <IonCardTitle>Card 2 Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img alt="Silhouette of mountains" src="https://picsum.photos/1920/1300" />
            <IonCardHeader>
                <IonCardTitle>Card 3 Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img alt="Silhouette of mountains" src="https://picsum.photos/1920/1400" />
            <IonCardHeader>
                <IonCardTitle>Card 4 Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
