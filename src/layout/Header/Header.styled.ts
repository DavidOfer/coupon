import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
background-color: ${props=>props.theme.colors?.header};
padding: 40px 0;
.NavLinkFlex{
    justify-content: center;
    min-height: 2rem;
}
.NavLinkFlex>a{
    margin: auto 40px;
    @media(max-width:${(props)=>props.theme.mobile})
{
    margin-top:5px;
}
}
`;

export const Nav= styled.nav`
display:flex;
align-items:center;
position:relative;
margin-bottom: 20px;

@media(max-width:${(props)=>props.theme.mobile})
{
    flex-direction: column;
}
`;

export const Logo = styled.img`
margin-right: 60px;
height:120px;
width:120px;
@media(max-width:${(props)=>props.theme.mobile})
{
    margin-right:0;
    margin-bottom: 40px;
}
`;

export const Title = styled.div`
font-size: 5rem;
font-family: sans-serif;
font-weight: 700;
color:${(props)=>props.theme.colors.main};
`;

export const UserPanel = styled.div`
position: absolute;
right: 0;
bottom:0;
@media(max-width:${(props)=>props.theme.mobile})
{
    position: relative;
}
`;
export const StyledNavLink = styled(NavLink)`
color: ${(props)=>props.theme.colors.main};
text-decoration: none;
&:hover,
&:active,
&.active {
  color: ${(props)=>props.theme.colors.main};
  padding-bottom: 0.25rem;
  border-bottom: 4px solid ${(props)=>props.theme.colors.main};
}
`;
