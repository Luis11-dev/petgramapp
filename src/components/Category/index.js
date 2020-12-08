import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { StyledImage, StyledView } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
    return (

        <StyledView >
            <StyledImage
                source={{
                    uri: cover
                }}
            />
            <Text>{emoji}</Text>
        </StyledView>
    )
}


