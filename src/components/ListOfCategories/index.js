import React from 'react'
import { ScrollView, View } from 'react-native'
/* import { FlatList } from 'react-native' */
import { Category } from '../Category'
import { StyledScrollView, StyledListView } from './styles'

export const ListOfCategories = () => {
    return (
        <StyledScrollView horizontal={true}>
            {
                [1, 2, 3, 4].map(category => <StyledListView><Category key={category} /></StyledListView>)
            }
        </StyledScrollView>
    )
}