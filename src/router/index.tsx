import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import EventsList from 'pages/EventsList';
import EventPage from 'pages/Event';

import routes from './constants/routes';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<Record<RootStackParamList, undefined>>();

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.eventsList}>
                <Stack.Screen name={routes.eventsList} component={EventsList} />
                <Stack.Screen name={routes.event} component={EventPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
