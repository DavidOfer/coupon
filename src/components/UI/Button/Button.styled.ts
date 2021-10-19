import styled from 'styled-components'
import { CustomButton } from './CustomButton'

export const Button = styled(CustomButton)`
   background: #3D94F6;
   background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
   -webkit-border-radius: 26px;
   -moz-border-radius: 26px;
   border-radius: 10px;
   color: #FFFFFF;
   font-family: Open Sans;
   font-size: 1.5rem;
   font-weight: 400;
   padding: 3px;
   -webkit-box-shadow: 1px 1px 20px 0 #000000;
   -moz-box-shadow: 1px 1px 20px 0 #000000;
   box-shadow: 1px 1px 5px 0 #000000;
   text-shadow: 1px 1px 20px #000000;
   border: solid #000070 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;

&:hover {
  background: #000070;
   border: solid #000070 1px;
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 10px;
   text-decoration: none;
}
`
