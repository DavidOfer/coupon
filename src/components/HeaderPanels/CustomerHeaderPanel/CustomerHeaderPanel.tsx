import { NavLink } from 'react-router-dom';
import { theme } from '../../../styles/LightTheme';
import CartButton from '../../Cart/CartButton/CartButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CustomerHeaderPanel = () => {
    return (
        <>
            <NavLink to='/profile' title="Profile">
                <AccountCircleIcon sx={{ color: theme.colors.main, fontSize: theme.size.icons }} />
            </NavLink>
            <CartButton />
        </>
    );
}
export default CustomerHeaderPanel;