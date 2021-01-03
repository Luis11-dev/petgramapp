import React from 'react'
import { View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Category } from '../Category'
import { PhotoCard } from '../PhotoCard'
import { StyledFlatList, StylesViewPhotocard } from './styles'
import {photos} from '../../../api/db.json'


export const ListOfPhotoCards = () => {
    return (
       /*  <StylesViewPhotocard>
            <StyledFlatList
                data={photos}
                renderItem={({ item }) => (<PhotoCard src={item.src} />)}
                keyExtractor={({id}) => id.toString()}
            />
        </StylesViewPhotocard> */
        
         <ScrollView>
             {[1,2,3,4].map(item => <PhotoCard key={item}/>)}
             {/* {[1,2,3,4].map(item => <Category key={item}/>)} */} 
             
         </ScrollView>
         


    )
}