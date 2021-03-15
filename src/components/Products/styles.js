import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    button:{
        margin:"5% 2.2%",
        zIndex:1,
        position:"fixed",
        padding:"15px 10px",
        borderRadius:"15%",
        ["@media (max-width:800px)"]:{
            margin:"11% 1%",
        }
    },
    title:{
        textAlign: "center",
        padding:"20px 0",
        fontWeight:400,
        fontFamily:"'Noto Sans SC', sans-serif",
        marginTop: "80px",
        ["@media (max-width:800px)"]:{
            fontSize:"30px",
            padding:"10px 0",
            marginTop: "70px",
        }
    },
    root: {
        flexGrow: 1,
    },
}));