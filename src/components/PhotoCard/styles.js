import styled from 'styled-components/native'

export const StyledPhotoCardContainer = styled.View`
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    /* background: red;  */
    padding-top: 8px;
    width: 100%;
    height: 100%;
    /* border: solid black;   */    
`

export const StyleImageView = styled.View`
    border-radius: 10px;
    /*display: block; react native no soporta la propiedad display block, todas actuan como flex que es como block */
    display: flex;
    height: 250px; /*debo ponerle un tamaño ya que no se como reemplazar el object-fit: cover en react native*/
    /* align-items: stretch; probar si funciona*/
    overflow: hidden;
    /* padding: 56.25% 0 0 0; le quito esta relación por lo mismo del object-fit */
    position: relative;
    width: 100%;
    border: solid blue;
`

export const StyledImage = styled.Image`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    /* object-fit: cover; */
    position: absolute;
    top: 0;
    width: 100%;
    /* border-radius: 50px; */
`

export const StyledTextPhotocardContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* height: 100%; */
    width: 100%;
    padding: 8px 0 8px 8px;
   /*  border: solid green; */
   /* & svg {
       margin-right: 4px;
   }  React Native no parece reconocer este elemento SVG*/
    
`

