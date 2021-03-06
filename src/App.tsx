import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistedStore} from './store';
import Router from './router';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <View style={styles.wrapper}>
                    <Router />
                </View>
            </PersistGate>
        </Provider>
    );
};

export default App;
