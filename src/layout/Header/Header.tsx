import { Logo, Nav, StyledHeader, StyledNavLink, Title, UserPanel } from "./Header.styled";
import { Flex } from "../../components/UI/CustomFlex/Flex.styled";
import { Container } from "../../components/UI/CustomContainer/Container.styled";
import { theme } from "../../styles/LightTheme";
import { NavLink } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import Logout from "../../components/Logout/Logout";
import { useAppSelector } from "../../components/types/TypedReduxSelectors";
import AdminHeaderPanel from "../../components/HeaderPanels/AdminHeaderPanel/AdminHeaderPanel";
import CompanyHeaderPanel from "../../components/HeaderPanels/CompanyHeaderPanel/CompanyHeaderPanel";
import CustomerHeaderPanel from "../../components/HeaderPanels/CustomerHeaderPanel/CustomerHeaderPanel";


const Header = () => {
    const isLogged = useAppSelector((state) => state.auth.isLogged);
    const clientType = useAppSelector((state) => state.auth.clientType);
    const myImg = "https://eu.backendlessappcontent.com/773FCF88-3816-D877-FF10-70C59A25EA00/FCB55ACA-51B6-403D-93D0-60DA653C05F3/files/img/ofer.png";
    let userPanelContent;
    switch (clientType) {
        case "ROLE_ADMIN":
            userPanelContent = <AdminHeaderPanel/>
            break;
        case "ROLE_COMPANY":
            userPanelContent = <CompanyHeaderPanel/>
            break;
        case "ROLE_CUSTOMER":
            userPanelContent = <CustomerHeaderPanel/>
            break;
        default:
            userPanelContent = "";
    }
    return (
        <StyledHeader >
            <Container>
                <Nav>
                    <NavLink to='/'>
                        <Logo src={myImg} alt='' />
                    </NavLink>
                    <Title>
                        MyCoupon
                    </Title>
                    <UserPanel>
                        {userPanelContent}
                        {isLogged ?
                            <Logout /> :
                            <NavLink to='/login' title="Login">
                                <LoginIcon sx={{ color: theme.colors.main, fontSize: theme.size.icons }} />
                            </NavLink>}
                    </UserPanel>
                </Nav>
                <Flex className="NavLinkFlex">
                    <StyledNavLink to='/coupons'>
                        Coupons
                    </StyledNavLink>
                    <StyledNavLink to='/e'>
                        Placeholder
                    </StyledNavLink>
                    <StyledNavLink to='/about'>
                        About
                    </StyledNavLink>
                    <StyledNavLink to='/contactus'>
                        Contact us
                    </StyledNavLink>
                </Flex>

            </Container>
        </StyledHeader>
    );
}
export default Header;