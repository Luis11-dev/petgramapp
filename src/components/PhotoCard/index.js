import React from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { StyledImage, StyledPhotoCardContainer, StyledTextPhotocardContainer, StyleImageView } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    console.log('esto es el src: ', src)
    return (
        
        <StyledPhotoCardContainer>

            <Pressable>
                <StyleImageView>
                    <StyledImage
                        source={{
                            uri: src

                        }}
                    />

                    {/* <StyledImage 
                        source={require('C:/Users/LuisGarcia/source/repos/React/ReactNative/petgramapp/src/assets/Guapa.jpg')}
                    /> */}
                </StyleImageView>
            </Pressable>

            <StyledTextPhotocardContainer>
                <Pressable>
                    <Icon name='heart-outline' size={30} />
                </Pressable>
                <Text>{likes} likes!</Text>
                {/* <Text>Te adoro x 100000000000 </Text> */}
            </StyledTextPhotocardContainer>

        </StyledPhotoCardContainer>
    )
}

/* const styled = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 100,
        overflow: 'hidden',
        paddingTop: 56.25,
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        position: 'relative',
        width: 100

    },

    row: {
        flexDirection: 'row'
    },

    coverImage: {
        width: 100,
        height: 100
    }
}) */