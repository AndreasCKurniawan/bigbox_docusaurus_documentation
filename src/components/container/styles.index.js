import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const tabletHd = theme.breakpoints.up('md');
  const tablet = theme.breakpoints.up('sm');
  return {
    root: {
      maxWidth: '1366px',
      width: '100%',
      margin: 'auto',
      boxSizing: 'border-box',
      paddingLeft: '24px',
      paddingRight: '24px',
      [tablet]: {
        paddingLeft: '44px',
        paddingRight: '44px',
      },
      [tabletHd]: {
        paddingLeft: '60px',
        paddingRight: '60px',
      },
    },
  };
});

export default useStyles;
