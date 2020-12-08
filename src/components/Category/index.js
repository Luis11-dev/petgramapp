import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { StyledImage, StyledView, StyledText } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }, key) => {
    return (
        <StyledView >
            <StyledImage
                source={{
                    uri: cover
                }}
            />
            <StyledText>{emoji}</StyledText>
        </StyledView>

    )
}

/* const styles = StyleSheet.create({
    card: {
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        borderRadius: 50
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },

}) */


