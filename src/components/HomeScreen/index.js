import React from 'react'
import { View } from 'react-native'
import { ListOfCategories } from '../ListOfCategories'
import { PhotoCard } from '../PhotoCard'

export const HomeScreen = () => {

    return (
        <View>
            <View>
                <ListOfCategories />
            </View>
            <View>
                <PhotoCard />
            </View>
        </View>

    )
}