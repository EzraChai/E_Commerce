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
        ["@media (max-width:1410px)"]:{
            margin:"7% 2%",
        },
        ["@media (max-width:1200px)"]:{
            margin:"10% 2%",
        },
        ["@media (max-width:800px)"]:{
            margin:"12% 2%",
        },
        ["@media (max-width:450px)"]:{
            margin:"18% 2%",
        },
    },
    back:{
        margin:"5% 2.2%",
        position:"fixed",
        padding:"15px 10px",
        borderRadius:"15%",
        zIndex:"1",
        ["@media (max-width:1410px)"]:{
            margin:"68px 12px",
        }
    },
    title:{
        textAlign: "center",
        padding:"20px 0",
        fontWeight:300,
        fontFamily: "'Nunito', sans-serif",
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