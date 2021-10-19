import styled from "styled-components";
import CustomCard from "./CustomCard";

export const StyledCard = styled(CustomCard)`
  min-height: ${(props) => (props.minHeight?props.minHeight:"")};
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
