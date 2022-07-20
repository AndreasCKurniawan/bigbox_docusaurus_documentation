import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const tabletHd = theme.breakpoints.up('md');
  const tablet = theme.breakpoints.up('sm');
  return {
    title: {
      fontWeight: '500',
      fontSize: '34px',
      lineHeight: '41px',
      letterSpacing: '0.04em',
      textAlign: 'center',
      color: 'white',
    },
    inputs: {
      width: '100%',
      border: 'none',
      height: '100%',
      display: 'none',
      outline: 'none !important',
      borderRadius: '4px',
      paddingLeft: '40px',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: '20px',
    },
    iconBox: {
      position: 'absolute',
      height: '40px',
      width: '40px',
      fontSize: '24px',
      color: 'white',
      display: 'inline',
      cursor: 'pointer',
      padding: 0,
      borderRadius: '4px',
    },
    iconSearch: {
      color: '#606469',
    },
    btTitle: {
      color: 'white',
      textTransform: 'uppercase',
      fontSize: '13px',
      lineHeight: '15px',
    },
    container: {
      padding: '40px 40px 40px 210px',
    },
    searchBoxContainer: {
      //  border:"1px solid black",
      borderRadius: '4px',
      zIndex: 2,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    result: {
      marginBottom: '10px',
      padding: '0 0 0 36px',
      fontWeight: '400',
      fontSize: '13px',
      lineHeight: '17px',
      height: '30px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: '#5F6368',
      '&:hover': {
        backgroundColor: '#FAFAFA',
      },
    },
    close: {
      color: 'white',
      cursor: 'pointer',
    },
    suggestionBox: {
      backgroundColor: 'white',
      borderRadius: '0 4px',
      boxShadow: '0px 0px 3px rgba(153, 153, 153, 0.45)',
    },
    p2: {
      fontSize: '10px',
      fontWeight: '500',
      color: '#5F6368',
      padding: '30px 10px 10px 36px',
    },
    allResultLink: {
      color: '#026DE1',
      fontWeight: '500',
    },
    icon: {
      transition: 'none',
      width: '42px',
      height: '42px',
      '&:hover': {
        background: '#F2F2F2',
        borderRadius: '4px',
      },
    },
    wrapper: {
      width: '40px',
      height: '40px',
      position: 'relative',
      transition: 'all ease 200ms',
    },
    wrapperExpanded: {
      width: '78vw',
      [tablet]: {
        width: '500px',
      },
      [tabletHd]: {
        width: '546px',
      },
      '& > div': {
        boxShadow: '0px 0px 3px rgba(153, 153, 153, 0.45)',
      },
      '& input': {
        display: 'inline',
      },
    },
  };
});

export default useStyles;
