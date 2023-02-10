import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../style/img/boat.png';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'


const Tab3: React.FC = () => {
    const position: LatLngExpression = [44.65797876847762, -1.1452388763427737];
    const position2: LatLngExpression = [42.65797876847762, -2.1452388763427737];
    const position3: LatLngExpression = [43.65797876847762, 0.1452388763427737];
    const position4: LatLngExpression = [40.65797876847762, -3.1452388763427737];
    const position5: LatLngExpression = [41.65797876847762, -4.1452388763427737];
    const position6: LatLngExpression = [39.65797876847762, -5.1452388763427737];
    const position7: LatLngExpression = [38.65797876847762, -6.1452388763427737];
    const position8: LatLngExpression = [37.65797876847762, -7.1452388763427737];
    const position9: LatLngExpression = [41.65797876847762, -7.1452388763427737];
    const position10: LatLngExpression = [41.65797876847762, -8.1452388763427737];

    useEffect(() =>{
        let DefaultIcon = L.icon({
            iconUrl: icon
        });
        
        L.Marker.prototype.options.icon = DefaultIcon;
    }, [])

    // trigger a 'window-resize' event when Page has finished, 
    // rendering and animating, so leaflet map can read a 
    // consistent height value
    useIonViewDidEnter(() => {
        window.dispatchEvent(new Event('resize'));
    });
    
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Tab 3</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
            </IonHeader>
            <ExploreContainer name="Tab 3 page" />
            <MapContainer center={position} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} />
            </MapContainer>
            <MapContainer center={position2} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position2} />
            </MapContainer>
            <MapContainer center={position3} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position3} />
            </MapContainer>
            <MapContainer center={position4} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position4} />
            </MapContainer>
            <MapContainer center={position5} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position5} />
            </MapContainer>
            <MapContainer center={position6} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position6} />
            </MapContainer>
            <MapContainer center={position7} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position7} />
            </MapContainer>
            <MapContainer center={position8} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position8} />
            </MapContainer>
            <MapContainer center={position9} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position9} />
            </MapContainer>
            <MapContainer center={position10} zoom={12} className='map' scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position10} />
            </MapContainer>
        </IonContent>
        </IonPage>
    );
};

export default Tab3;
