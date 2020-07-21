import React from 'react';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {DarkColors} from '../styles/DarkColors';
import {LightColors} from '../styles/LightColors';
import {store, persistor} from '../store';

// NAVIGATION
import SyncStackScreens from './SyncStackScreens';

export default () => {
    const scheme = useColorScheme();

    return (
        <AppearanceProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer
                        theme={scheme === 'dark' ? DarkColors : LightColors}>
                        <SyncStackScreens />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </AppearanceProvider>
    );
};
