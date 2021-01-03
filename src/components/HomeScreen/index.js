import React from 'react'
import { View } from 'react-native'
import { ListOfCategories } from '../ListOfCategories'
import { ListOfPhotoCards } from '../ListOfPhotoCards'
import { PhotoCard } from '../PhotoCard'
import { StyledCategoriesContainer, StyledViewContainer } from './styles'

export const HomeScreen = () => {

    return (
        <StyledViewContainer>
            <StyledCategoriesContainer>
                <ListOfCategories />
            </StyledCategoriesContainer>
            <View>
                <ListOfPhotoCards />
                {/* <PhotoCard /> */}
            </View>
        </StyledViewContainer>

    )
}