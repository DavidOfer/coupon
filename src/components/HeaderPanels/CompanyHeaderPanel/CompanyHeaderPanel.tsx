import { NavLink } from 'react-router-dom';
import { theme } from '../../../styles/LightTheme';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CompanyHeaderPanel = () => {
    return (
        <>
            <NavLink to='/company' title="Coupons Panel">
                <AccountBalanceWalletIcon sx={{ color: theme.colors.icons, fontSize: theme.size.icons }} />
            </NavLink>
            <NavLink to='/companyProfile' title="Profile">
                <AccountCircleIcon sx={{ color: theme.colors.icons, fontSize: theme.size.icons }} />
            </NavLink>
        </>
    );
}
export default CompanyHeaderPanel;