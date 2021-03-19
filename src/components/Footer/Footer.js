import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Paper} from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" style={{color:"white"}} color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/NagaworldINT">
                TY Studio · Concept Tee
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        backgroundColor:"#222222",
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        textAlign: 'center',
        /*backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[1000],*/
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <CssBaseline/>
                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <Copyright/>
                    </Container>
                </footer>
            </Paper>

        </div>
    );
}