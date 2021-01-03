import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
/* import { FlatList } from 'react-native' */
import { Category } from '../Category'
import { StyledFlatList, StyledListView, StyledScrollView } from './styles'
import {categories} from '../../../api/db.json'

export const ListOfCategories = () => {
    
    /* const [category, setCategory] = useState([]); */
    /* const renderItem = (category) => {category.map(category => <StyledListView><Category {...category} /></StyledListView>) } */
    const renderItem = ({item}) => (<StyledListView><Category {...item} /></StyledListView>)
    return (
        //Es mejor usar flatlist para renderizar listas
        /* <StyledScrollView horizontal={true} scrollEnabled={true}>
            {
                categories.map(category => <StyledListView><Category {...category} /></StyledListView>)
            }
        </StyledScrollView> */

        //con FlatList
        
        <StyledFlatList
            data={categories}            
            renderItem={renderItem}
            keyExtractor={({id}) => id.toString()}  /* convertí el Id a string para eliminar una advertencia que me salía */
            horizontal={true}
            /* scrollEnabled={true} */
        />
        
    )
}