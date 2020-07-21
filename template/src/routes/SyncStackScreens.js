import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import Home from '../screen/Home';

export default () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
};
