import styled from "styled-components";
import { CustomContainer } from './CustomContainer'

export const Container  = styled(CustomContainer)`
width: ${props=>props.width?props.width:"1300px"};
max-width: 100%;
padding : 0px;
margin: 0 auto;
text-align: center;
position: relative;
`;