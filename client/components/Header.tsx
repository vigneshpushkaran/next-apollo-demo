import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useUser } from '@auth0/nextjs-auth0'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    const { user } = useUser();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Demo - PS
                    </Typography>
                    <Button href="/" color="inherit">Home</Button>
                    <Button href="/search" color="inherit">Search</Button>
                    {!user ? <Button href="/api/auth/login" color="inherit">Login</Button> :
                        <Button href="/api/auth/logout" color="inherit">Logout</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header