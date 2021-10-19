import styled from "styled-components";

export const ImageDiv = styled.div`

width:250px;
height:140px;
position: absolute;
right: 20px;
top:20px;
@media(max-width:${(props) => props.theme.mobile})
{
    position: relative;
    margin-bottom: 30px;
}
   
`;