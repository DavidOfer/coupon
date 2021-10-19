import { Route, Switch, Redirect } from 'react-router-dom'
import Cart from '../components/Cart/Cart';
import AdminCompanies from '../components/pages/Admin/AdminCompanies';
import AdminCustomers from '../components/pages/Admin/AdminCustomers';
import AdminOneCompany from '../components/pages/Admin/AdminOneCompany';
import AdminOneCustomer from '../components/pages/Admin/AdminOneCustomer';
import AdminPanel from '../components/pages/Admin/AdminPanel';
import CompanyCoupons from '../components/pages/Company/CompanyCoupons';
import CompanyProfile from '../components/pages/Company/CompanyProfile';
import CustomerCoupons from '../components/pages/Customer/CustomerCoupons';
import Profile from '../components/pages/Customer/Profile';
import Header from '../layout/Header/Header'
import Footer from './Footer/Footer';
import { useAppSelector } from '../components/types/TypedReduxSelectors';
import Main from '../components/pages/Unrestricted/Main';
import Login from '../components/pages/Unrestricted/Login';
import AvailableCoupons from '../components/pages/Unrestricted/AvailableCoupons';
import CouponDetails from '../components/pages/Unrestricted/CouponDetails';
import NotFound from '../components/pages/Unrestricted/NotFound';
import About from '../components/pages/Unrestricted/About';
import ContactUs from '../components/pages/Unrestricted/ContactUs';
import { Container } from '@mui/material';
import { theme } from '../styles/LightTheme';

const Layout = () => {
    const isCartVisible = useAppSelector(state => state.ui.cartIsVisible);
    const clientType = useAppSelector(state => state.auth.clientType);
    return (
        <>
            <Header />
            {isCartVisible && <Cart />}
            <Container sx={{paddingTop:"30px",color:`${theme.colors.main}`, marginTop:"30px",
             maxWidth:"100%",width:"1300px",textAlign:"center", padding:"0"}}>
                <Switch>
                    <Route path='/' exact>
                        <Main />
                    </Route>
                    <Route path='/login' exact>
                        <Login />
                    </Route>
                    <Route path='/coupons' exact>
                        <AvailableCoupons />
                    </Route>
                    <Route path='/about' exact>
                        <About/>
                    </Route>
                    <Route path='/contactus' exact>
                        <ContactUs/>
                    </Route>
                    <Route path='/coupons/:couponId'>
                        <CouponDetails />
                    </Route>
                    <Route path='/admin/' exact>
                        {clientType === "ROLE_ADMIN" ? <AdminPanel /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path='/admin/companies' exact>
                        {clientType === "ROLE_ADMIN" ? <AdminCompanies /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path='/admin/customers' exact>
                        {clientType === "ROLE_ADMIN" ? <AdminCustomers /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/findCustomer" exact>
                        {clientType === "ROLE_ADMIN" ? <AdminOneCustomer /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/findCompany" exact>
                        {clientType === "ROLE_ADMIN" ? <AdminOneCompany /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path='/company/' exact>
                        {clientType === "ROLE_COMPANY" ? <CompanyCoupons /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path='/companyProfile/' exact>
                        {clientType === "ROLE_COMPANY" ? <CompanyProfile /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path='/profile' exact>
                        {clientType === "ROLE_CUSTOMER" ? <Profile /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path='/myCoupons' exact>
                        {clientType === "ROLE_CUSTOMER" ? <CustomerCoupons /> :
                            <Redirect to="/" />}
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </>
    );
}
export default Layout;