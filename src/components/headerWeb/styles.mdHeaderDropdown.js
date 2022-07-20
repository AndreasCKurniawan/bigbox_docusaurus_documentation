import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const desktop = theme.breakpoints.up('lg');
  // const tabletHd= theme.breakpoints.up('md');
  const tablet = theme.breakpoints.up('sm');

  return {
    container: {
      backgroundColor: 'white',
      position: 'fixed',
      top: 0,
      marginTop: '56px',
      zIndex: 9999,
      width: '100%',
      height: '93vh',
      overflowY: 'scroll',
    },
    inputs: {
      width: '88%',
      height: '42px',
      display: 'inline',
      boxShadow: '4px 4px 8px rgba(153, 153, 153, 0.18)',
      border: '1px solid #E0E0E0',
      [tablet]: {
        width: '94%',
      },
    },
    iconBox: {
      position: 'absolute',
      height: '41px',
      width: '42px',
      backgroundColor: 'red',
      fontSize: '24px',
      color: 'white',
      display: 'inline',
    },
    searchBox: {
      padding: '30px 24px',
      borderBottom: '1px solid #E0E0E0',
    },
    title: {
      fontSize: '1em',
      fontWeight: '500',
      color: '#5F6368',
      fontFamily: " 'Montserrat', sans-serif",
    },
    accrodionBox: {
      padding: '15px 24px',
      border: 'none',
      [tablet]: {
        padding: '15px 30px',
      },
    },
    buttonBox: {
      padding: '24px',
    },
    button: {
      borderColor: '#026DE1',
      color: '#026DE1',
      height: '44px',
      textTransform: 'none',
      width: '100%',
      fontFamily: " 'Montserrat', sans-serif",
      fontWeight: '600',
      lineHeight: '20px',
      letterSpacing: '0.04em',
      fontSize: '14px',
      '&:hover': {
        [desktop]: {
          boxShadow: '0px 2px 2px rgba(2, 109, 225, 0.2)',
          backgroundColor: '#E8F0FE',
        },
      },
    },
    t1: {
      color: '#5F6368',
      fontSize: '28px',
      lineHeight: '42px',
      marginBottom: '8px',
    },
    st1: {
      fontWeight: 300,
      fontSize: '14px',
      lineHeight: '22px',
      color: '#7F7F7F',
      marginBottom: '10px',
    },
    c1: {
      fontSize: '14px',
      lineHeight: '17px',
      margin: '28px 0',
      fontWeight: '500',
      color: '#026DE1',
      cursor: 'pointer',
    },
    a1: {
      fontSize: '14px',
      color: '#0078B3',
      lineHeight: '17px',
    },
    t2: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.04em',
      color: '#5F6368',
    },
    buttonWrapper: {
      width: '80%',
      marginTop: '50px',
      marginBottom: '50px',
    },
  };
});

export default useStyles;
