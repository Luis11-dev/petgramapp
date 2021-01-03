import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListOfCategories } from '../ListOfCategories/index';
import { HomeScreen } from '../HomeScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Petgram' component={HomeScreen} />
        </Stack.Navigator>

    )
}
