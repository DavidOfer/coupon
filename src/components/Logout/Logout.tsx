import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { adminCompaniesActions } from '../../store/adminCompaniesSlice';
import { adminCustomersActions } from '../../store/adminCustomersSlice';
import { authActions } from '../../store/authSlice';
import { cartActions } from '../../store/cartSlice';
import { companyCouponsActions } from '../../store/CompanyCouponsSlice';
import { theme } from '../../styles/LightTheme';



const Logout = ()=>{
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        dispatch(authActions.logOut());
        dispatch(adminCompaniesActions.clearState());
        dispatch(adminCustomersActions.clearState());
        dispatch(companyCouponsActions.clearState());
        dispatch(cartActions.clearCart());
    }
    return(
        <NavLink to='/' onClick={logoutHandler} title="Logout">
            <LogoutIcon sx={{ color: theme.colors.main, fontSize: 35 }}/>
        </NavLink>
    );
}
export default Logout;