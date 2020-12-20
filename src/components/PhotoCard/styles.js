import styled from 'styled-components/native'

export const StyleImageView = styled.View`
    border-radius: 10px;
    /*display: block; react native no soporta la propiedad display block, todas actuan como flex que es como block */
    display: flex;
    height: 0;
    /* align-items: stretch; probar si funciona*/
    /* overflow: hidden; */
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const StyledImage = styled.Image`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    /* object-fit: cover; */
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 10px;
`

