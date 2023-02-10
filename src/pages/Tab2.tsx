import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Haptics } from '@capacitor/haptics';

type App = {
    package: {
        name:	string,
        scope:	string,
        version:	string,
        description:	string,
        keywords: [],	
        date:	string,
        links: {
            npm:	string,
            homepage:	string,
            repository:	string,
            bugs:	string,
        }	
        publisher: {
            username:	string,
            email:	string,
        }	
        maintainers: [],
    },	
    score: {
        final:	number,
        detail: {
            quality:	number,
            popularity:	number,
            maintenance: number
        }	
    },	
    searchScore: number
}

const Tab2: React.FC = () => {
    const [presentAlert] = useIonAlert();
    const [data, setData] = useState<App[]>()
    const [position, setPosition] = useState({latitude: 0, longitude: 0})
    const [newPosition, setNewPosition] = useState<Position | null>(null)

    const vibs = async () => {
        await Haptics.vibrate();
    }

    useEffect(() => {
        const getCurrentPosition = async () => {
            const { coords } = await Geolocation.getCurrentPosition();
            setPosition({ latitude: coords.latitude, longitude: coords.longitude})
        };
        getCurrentPosition()

        fetch('https://api.npms.io/v2/search?q=react&size=250')
        .then(response => response.json())
        .then(data => setData(data.results));
    }, []);


    useEffect(() => {
        const watch = Geolocation.watchPosition({enableHighAccuracy: true}, (newPos) => {
            setNewPosition(newPos);
        });

        // return () => {
        //     Geolocation.clearWatch({ id: watch as unknown as string });
        // };
    }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="test2">
            <p>{newPosition?.coords.latitude}</p>
            <p>{newPosition?.coords.longitude}</p>
        </div>
        <div id="btns-container" onClick={() =>{vibs()}}>
            <IonButton
                onClick={() =>
                    presentAlert({
                    header: 'Alert',
                    subHeader: 'Important message',
                    message: `your current position is: ${position.latitude} ${position.longitude}`,
                    buttons: ['OK'],
                    })
                }
                >
                Click Me
            </IonButton>
            <IonButton shape="round" color="warning">Vibrate!!!</IonButton>
        </div>
        <IonItem>
            <IonLabel position="floating">Default input</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
        </IonItem>

        <IonItem fill="solid">
            <IonLabel position="floating">Solid input</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
        </IonItem>

        <IonItem fill="outline">
            <IonLabel position="floating">Outline input</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
        </IonItem>
        <h2>All React libs on NPM:</h2>
        {data?.map(item => {
            return (
                <div className='react-app-container' key={item.package.name}>
                    <img src="https://picsum.photos/400/100" alt="" />
                    <h3>{item.package.name}</h3>
                    <p>{item.package.description}</p>
                    <p>{item.score.final}</p>
                </div>
            )
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
