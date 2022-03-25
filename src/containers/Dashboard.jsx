import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { PAGE_PATHS } from '../utils/constants';
//drawwer Coding
import { Button, AppBar, Toolbar, Typography, IconButton, Drawer, Divider } from '@material-ui/core'
//sidebar
import { List, ListItem, ListItemText, CssBaseline, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import User from './User';

//Drawer Coding
const draweWidth = 250;
//external styling
const styles = makeStyles((theme) => ({
    menubutton: {
        marginRight: theme.spacing(),
    },
    heading: {
        marginRight: 'auto',
    },
    contant: {
        padding: theme.spacing(7),
    },
    contentShift: {
        marginLeft: draweWidth,
    },
    drawer: {
        width: "250px",
        marginLeft: "10px",
        color: "black",
    },
    link: {
        textDecoration: "none",
        fontSize: "19px",
        color: "black"
    },
    appbar: {
        // backgroundColor:"#f3f3f3",
        //transition
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            ///duration
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    appbarshift: {
        width: ` calc(100% - ${draweWidth}px)`,
        marginLeft: draweWidth,
        //transition
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            ///duration
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}
))
//main function
function Dashboard() {
    //drawer Coidng
    const classes = styles(); //calling  Function of external styling
    const [open, setOpen] = useState()//sidebar hide & show

    //This is Dashbord Coding
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    useEffect(() => {
        if (!loggedInUser) {
            navigate(PAGE_PATHS.login)
        }
    }, [])

    if (!loggedInUser) {
        return <p></p>
    }
    //here is end previous coding
    //start Drawer coding

    return (
        <div className='reg_container'>
            {/* This is Drawer Coding */}
            <CssBaseline />
            {/* Drawer & List /Sidebar */}
            <Drawer open={open} onClose={() => setOpen(false)} variant='persistent'>
                <List disablePadding className={classes.drawer}>
                    <ListItem button>
                        {/* <ListItemText  primary="User"></ListItemText> */}
                        <ListItemText ><Link to="#" className={classes.link}>Users</Link> </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Categories"></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Product"></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Product"></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            {/* AppBar */}
            <AppBar position='static' className={classNames(classes.appbar, { [classes.appbarshift]: open })}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menubutton} color="inherit"
                        onClick={() => setOpen(!open)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.heading}>Dashboard</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {/* Main */}
            <main className={classNames(classes.contant, {
                [classes.contentShift]: open
            })}>
                <Typography variant='h4'>
                    <div className="reg_box">
                        <p className='reg_success'>Welcome {loggedInUser.name}</p><User /> 
                        {/* <User /> */}
                  
                    </div>
                </Typography>
                <Typography >
                    {/* <User /> */}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam assumenda cumque? Consequatur consectetur voluptatum dolorem exercitationem, voluptatibus a libero, ea vero voluptatem ipsum nisi hic assumenda cumque magni, dolores mollitia quo! Quia aspernatur consequatur, quasi ut nostrum fuga minus et, vitae reprehenderit repudiandae quisquam! Sint, quasi. */}
                </Typography>
            </main>
        </div>
    )
}
export default Dashboard
