import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const desktop = theme.breakpoints.up('lg');
  return {
    dialog: {
      background: 'white',
      width: '900px',
      height: '366px',
      boxShadow: '4px 4px 16px rgba(153, 153, 153, 0.45)',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      [desktop]: {
        width: '1000px',
        height: '400px',
      },
    },
    backDrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    button: {
      textTransform: 'none',
      backgroundColor: 'white',
      fontWeight: '600',
      fontSize: '14px',
      borderRadius: '6px',
      lineHeight: '20px',
      letterSpacing: '0.04em',
      fontFamily: 'inherit',
      width: '222px',
      height: '44px',
      borderColor: '#026DE1',
      color: '#026DE1',
      '&:hover': {
        boxShadow: '0px 2px 2px rgba(2, 109, 225, 0.2)',
        background: '#E8F0FE',
      },
    },
    p1: {
      fontWeight: '500',
      fontSize: '32px',
      lineHeight: '49px',
      textAlign: 'center',
      margin: 0,
    },
    iconImg: {
      width: '55px',
      height: '55px',
      padding: 0,
    },
    link: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '43px',
      textAlign: 'center',
      color: '#026de1',
    },
    closeIcon: {
      // marginBottom: '418px',
      position: 'absolute',
      right: '0.25em',
      top: '0.25em',
    },
    menuBox: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '44px',
    },
    imgIconWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '26px',
    },
    label: {
      color: '#5F6368',
      fontWeight: 500,
    },
  };
});

export default useStyles;
