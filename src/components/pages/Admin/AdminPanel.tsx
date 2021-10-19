import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom";

const AdminPanel = () => {
    const history = useHistory();
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:'auto' }}>

            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>{history.push("/admin/companies")}}>
                            <ListItemIcon>
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Edit/Add Companies" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>{history.push("/admin/customers")}}>
                            <ListItemIcon>
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Edit/Add Customers" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>{history.push("/admin/findCompany")}}>
                            <ListItemIcon>
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Find Company" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>{history.push("/admin/findCustomer")}}>
                            <ListItemIcon>
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Find Customer" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}
export default AdminPanel