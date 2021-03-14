import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: '0',
        paddingTop: '56.25%'
    },
    title: {
        fontSize:40,
    },
    toolbar: theme.mixins.toolbar,
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between"
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));