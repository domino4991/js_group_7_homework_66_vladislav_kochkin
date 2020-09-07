import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(5)
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toolbarLink: {
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        fontSize: '16px',
        padding: theme.spacing(2),
        marginLeft: theme.spacing(4),
        transition: '0.5s',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark
        }
    },
    active: {
        backgroundColor: theme.palette.primary.dark,
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6">
                            Posts
                        </Typography>
                        <div>
                            <NavLink to="/" exact className={classes.toolbarLink} activeClassName={classes.active}>Posts</NavLink>
                            <NavLink to="/about" exact className={classes.toolbarLink} activeClassName={classes.active}>About</NavLink>
                            <NavLink to="/contacts" exact className={classes.toolbarLink} activeClassName={classes.active}>Contacts</NavLink>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;