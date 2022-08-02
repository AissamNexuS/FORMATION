import * as React from 'react';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native';
import styles from './MapStyles';
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: 42.882004, longitude: 740.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421
            }} />
        </SafeAreaView>
    );
}

