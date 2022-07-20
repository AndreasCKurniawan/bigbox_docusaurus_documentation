import { makeStyles } from '@material-ui/core';

export default function useClasses(state) {
  const useStyles = makeStyles((theme) => {
    const desktop = theme.breakpoints.up('lg');
    return {
      arrow: {
        fontSize: '14px',
      },
      p1: {
        fontSize: '15px',
        fontWeight: 500,
        lineHeight: '20px',
      },
      p2: {
        fontSize: '14px',
        lineHeight: '24px',
        color: '#5F6368',
        fontFamily: "'Roboto', sans-serif",
        margin: '6px 0',
      },
      contentBox: {
        padding:
          state.solutions === 0 ? '25px 40px 10px 0' : '25px 34px 20px 0',
        cursor: 'pointer',
        '&:hover div': {
          color: '#026DE1',
        },
      },
      t1: {
        fontSize: '28px',
        lineHeight: '34px',
        fontWeight: '400',
        color: '#232528',
        marginBottom: '25px',
      },
      button: {
        textTransform: 'none',
        borderColor: '#026DE1',
        color: '#026DE1',
        width: '214px',
        height: '43px',
        alignItems: 'center',
        alignContent: 'center',
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: 600,
        '&:hover': {
          boxShadow: '0px 2px 2px rgba(2, 109, 225, 0.2)',
          background: '#E8F0FE',
        },
      },
      closeIcon: {
        padding: 0,
        alignItems: 'flex-start',
        marginRight: '60px',
        '&:hover': {
          backgroundColor: 'unset',
        },
      },
      icon: {
        color: '#232528',
        '&:hover': {
          color: '#026DE1',
        },
      },
      img: {
        width: '21px',
        height: '40px',
        objectFit: 'contain',
        objectPosition: 'center',
      },
      headerDropdownContainer: {
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        marginTop: '64.1px',
        zIndex: 9999,
        width: '100%',
        height: '84vh',
        boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.15)',
        [desktop]: {
          marginTop: '65px',
        },
      },
      title: {
        fontSize: '32px',
        lineHeight: '40px',
        color: '#232528',
        marginBottom: '24px',
        [desktop]: {
          lineHeight: '42px',
          fontSize: '34px',
        },
      },
      subtitle: {
        fontSize: '12px',
        lineHeight: '20px',
        color: '#5f6368',
        fontFamily: "'Roboto', sans-serif",
        margin: '6px 0',
        [desktop]: {
          fontSize: '14px',
          lineHeight: '24px',
        },
      },
      title1: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        color: '#232528',
        [desktop]: {
          fontSize: '15px',
        },
      },
      textBox: {
        height: '44px',
        margin: '0 0 5px 0',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '60px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#F2F2F2',
        },
      },
      wbLeft: {
        // padding: '45px 125px 0px 60px',
        paddingTop: '45px',
        paddingRight: '125px',
      },
      wbRight: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxHeight: '450px',
      },
      wbLinkWrapper: {
        margin: '13px 0px',
      },
      wbT2: {
        lineHeight: '25px',
        color: '#5F6368',
        paddingRight: '20px',
        marginTop: '5px',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '14px',
      },
      wbT3: {
        fontFamily: "'Roboto', sans-serif",
        textTransform: 'uppercase',
        fontSize: '14px',
        color: '#5F6368',
        paddingTop: '22px',
      },
      wbT4: {
        fontSize: '15px',
        fontWeight: 500,
        marginBottom: '5px',
        lineHeight: '20px',
        color: '#232528',
        cursor: 'pointer',
        '&:hover': {
          color: '#026DE1',
        },
      },
      wbT5: {
        lineHeight: '20px',
        fontSize: '14px',
        color: '#5F6368',
        fontFamily: "'Roboto', sans-serif",
      },
      wbMr: {
        color: '#0078B3',
        fontSize: '14px',
        lineHeight: '20px',
        fontFamily: "'Roboto', sans-serif",
      },
      leftSidebar: {
        color: '#7F7F7F',
        padding: '24px 0 0 0',
        borderRight: '1px solid #dadada',
        width: '23%',
      },
      slT2: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '17px',
        width: '180px',
      },
      rightMenu: {
        color: '#7F7F7F',
        padding: '35px 0 0 35px',
        width: '77%',
      },
      sidebarBtnWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
      },
    };
  });

  const classes = useStyles();

  return classes;
}
