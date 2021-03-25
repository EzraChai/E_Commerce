import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        fontWeight:"600",
        textDecoration: 'none',
        fontFamily: "'Nunito', sans-serif",
        "@media (max-width:800px)": {
            fontWeight:"400",
            fontSize:"16px",
        }
    },
    image: {
        borderWidth:"1px",
        borderColor:"black",
        marginRight: '10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    goBackButton:{
        margin: "5% 4%",
        position: "fixed",
        padding: "15px 10px",
        borderRadius: "15%",
        zIndex: "4",
        "@media (max-width:1200px)":{
            margin: "10% 4%",
        },
        "@media (max-width:800px)":{
            margin: "12% 4%",
        },
        "@media (max-width:600px)":{
            margin: "15% 4%",
        },
        "@media (max-width:450px)":{
            margin: "20% 4%",
        },



    }
}));

