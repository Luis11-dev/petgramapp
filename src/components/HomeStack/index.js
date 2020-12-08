import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

export const HomeStack = () => {
    <Stack.Navigator>
        <Stack.Screen name='Home' component='Category/index.js'/>
    </Stack.Navigator>
}