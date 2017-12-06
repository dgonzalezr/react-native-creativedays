import React, { PureComponent } from 'react';
import firebase from 'firebase';
import { AppNavigator } from './src/app/config';

class App extends PureComponent {
    componentWillMount() {
        // Firebase configuration
        const config = {
            apiKey: 'AIzaSyDuhU-mGrM6O59n0I9BpHqHTfMUdtHWrQU',
            authDomain: 'authentication-16893.firebaseapp.com',
            databaseURL: 'https://authentication-16893.firebaseio.com',
            projectId: 'authentication-16893',
            storageBucket: 'authentication-16893.appspot.com',
            messagingSenderId: '457170400123'
        };
        // Avoid the app to crash when switching
        // to another app on Android (since firebase will be initialized already)
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render() {
        return <AppNavigator />;
    }
}

export default App;
