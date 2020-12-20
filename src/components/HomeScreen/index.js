import React from 'react'
import { View } from 'react-native'
import { ListOfCategories } from '../ListOfCategories'
import { PhotoCard } from '../PhotoCard'
import { StyledCategoriesContainer, StyledViewContainer } from './styles'

export const HomeScreen = () => {

    return (
        <StyledViewContainer>
            <StyledCategoriesContainer>
                <ListOfCategories />
            </StyledCategoriesContainer>
            <View>
                <PhotoCard />
            </View>
        </StyledViewContainer>

    )
}