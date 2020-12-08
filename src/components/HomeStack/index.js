import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListOfCategories } from '../ListOfCategories/index';



const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={ListOfCategories} />
        </Stack.Navigator>

    )
}
