import styled from 'styled-components/native'

export const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;  
    
    /* padding-top: 50px; */
`
export const StyledImage = styled.Image`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    height: auto;
    overflow: hidden;
    /* object-fit: cover; */
    width: 75px;
    height: 75px;       
`
export const StyledText = styled.Text`
    text-align: center;
`