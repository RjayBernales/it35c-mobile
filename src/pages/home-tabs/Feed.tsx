import { IonContent, IonHeader, IonMenu, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, IonIcon, IonMenuToggle, IonButton, IonMenuButton, IonButtons ,  IonItem, IonLabel, IonList} from '@ionic/react';

const Feed: React.FC =()=>{

    const games = [
        { name: 'Pokemon XYZ' },
        { name: 'Tetris 2' },
        { name: 'The Legend of Zelda' },
        { name: 'Pac-Man' },
        { name: 'Mortal Kombat' },
        { name: 'Final Fantasy' },
        { name: 'Pokemon White' },
        { name: 'GTA IV' },
        { name: 'Left 4 Dead' },
        { name: 'Super Mario Bros 3' },
        { name: 'Dr. Mario' },
        { name: 'Barbarians Palace' },
        { name: 'Ben 10' },
        { name: 'Train 3' }
    ]
  return(

    
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>
                        Feed
                    </IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>

                <IonList>
                    {games.map((item, index) => (
                        <IonItem key={index}>
                            <IonLabel>{item.name}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
        </IonContent>
    </IonPage>

  );
};

export default Feed;