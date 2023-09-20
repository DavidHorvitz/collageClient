import React from 'react'
import { ListItemText, IconButton, ListItemIcon, Drawer, Divider, List, Toolbar, ListItem, ListItemButton, Button, Tooltip } from '@mui/material';
import { tableNavbarItems, addNavbarItems } from '../Navbar/consts/navbaritems';
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            anchor="left"
        >
            <Tooltip title="Back to the Home page">
                <Button onClick={() => navigate("/")} sx={{ height: 70 }} variant="outlined" endIcon={<KeyboardDoubleArrowRightOutlinedIcon color='secondary' />}>
                    Home
                </Button>
            </Tooltip>
            <Divider />
            <div className='bg-gray-100'>
                {tableNavbarItems.map((item, index) => (
                    <ListItemButton
                    button="true" // or button={false} depending on your use case
                    // button={true} // or button={false} depending on your use case
                        key={item.id}
                        onClick={() => navigate(item.route)}
                    >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
                <Divider />
                {addNavbarItems.map((item, index) => (
                    <ListItemButton
                    // button={true} // or button={false} depending on your use case
                    button="true" // or button={false} depending on your use case

                        key={item.id}
                        onClick={() => navigate(item.route)}
                    >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </div>
        </Drawer>
    );
};

export default Navbar;
