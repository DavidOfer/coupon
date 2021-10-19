import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../styles/LightTheme';

const AdminHeaderPanel = () => {
    return (
        <NavLink to='/admin' title="Admin Panel">
            <AdminPanelSettingsIcon sx={{ color: theme.colors.icons, fontSize: theme.size.icons }} />
        </NavLink>
    );
}
export default AdminHeaderPanel;