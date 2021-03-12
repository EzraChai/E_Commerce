import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    grow:{
      flexGrow:6,
    },
    cartActions: {
        display:'flex',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        flexGrow:6,
        alignItems: 'center',
    },
}));