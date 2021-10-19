import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 100%;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;

& ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
& li {
    margin-left: 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
  
& a {
    text-decoration: none;
    color: #4039b9;
  }
  
  & a:hover,
  & a:active,
  & a.active {
    color: #080424;
  }
`;