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
        fontSize: 34,
        ["@media (max-width:800px)"]: {
            fontSize: 30,
        },
        fontWeight: '400',
        fontFamily: "'Noto Sans SC', sans-serif",
    },
    toolbar: theme.mixins.toolbar,
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        ["@media (max-width:800px)"]: {
            display:"block",
        }
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
    space:{
        padding:"0 60px",
        ["@media (max-width:800px)"]:{
            padding:"0 5px",
        }
    },
    smallPic:{
        width: "108px",
        height: "108px",
        ["@media (max-width:800px)"]: {
            width: "72px", height: "72px"
        }
    }
}));