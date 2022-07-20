import React, {useState, useEffect} from 'react';
import {
  Hidden,
  IconButton,
  makeStyles,
  Grid,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import initState from '../../utils/init-state';
import MdDropDown from './mdHeaderDropdown';
import Dropdown from './headerDropdown';
import Popupcall from './popupcall';
import SearchDialog from './searchDialog';

const useStyles = makeStyles((theme) => {
  const tabletHd = theme.breakpoints.up('md');
  return {
    icon: {
      // marginRight:"15px",
      transition: 'none',
      width: '42px',
      height: '42px',
      '&:hover': {
        background: '#F2F2F2',
        borderRadius: '4px',
      },
    },
    header: {
      padding: '0 2% 0 3%',
      borderBottom: '0.2px solid #e6e6e6',
      boxShadow: '-1px -3px 11px 0px rgba(0, 0, 0, 0.4)',
      backgroundColor: 'white',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up(1400)]: {
        paddingLeft: '60px',
        paddingRight: '60px',
      },
    },
    linkHover: {
      fontFamily: "'Montserrat', sans-serif",
      textDecoration: 'none',
      fontSize: '0.875em',
      fontWeight: 500,
      lineHeight: '17px',
      cursor: 'pointer',
    },
    linkHoverWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100px',
      height: '64px',
      color: '#5F6368',
      textAlign: 'center',
      cursor: 'pointer',
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: '16px solid transparent',
      borderBottom: '16px solid #dadada',
      borderRight: '16px solid transparent',
      position: 'absolute',
      top: '49px',
      zIndex: 9,
      '&:after': {
        content: "''",
        width: 0,
        height: 0,
        borderLeft: '15px solid transparent',
        borderBottom: '15px solid white',
        borderRight: '15px solid transparent',
        position: 'absolute',
        top: '1px',
        left: '-15px',
      },
    },
    selectForm: {
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #484850',
      },
      '& .MuiOutlinedInput-input': {
        paddingTop: '8px !important',
        paddingBottom: '8px !important',
      },
      '& .MuiSelect-selectMenu': {
        fontFamily: "'Montserrat', sans-serif !important",
        fontWeight: '500 !important',
        fontSize: '14px !important',
        color: '#5F6368 !important',
        lineHeight: '17px !important',
      },
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
    emptySpace: {
      paddingTop: '56px',
      [tabletHd]: {
        paddingTop: '65px',
      },
    },
    searchContainer: {
      position: 'absolute',
      right: '45px',
    },
  };
});

function App() {
  const [isOpen, setIsOpen] = useState(initState.Bool);
  const [isMdOpen, setIsMdOpen] = useState(initState.Bool);
  const [content, setContent] = useState(initState.String);
  const [popUpOpen, setPopUpOpen] = useState(initState.Bool);

  const classes = useStyles();

  const onHoverMenu = (name) => {
    setIsOpen(true);
    setContent(name);
  };

  const onLeaveMenu = () => {
    setIsOpen(false);
    setContent((prev) => prev);
  };

  const closePopUpCall = () => {
    return setPopUpOpen(false);
  };

  const closeDropdown = () => {
    if (content) {
      setContent('');
    }
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  // const onWbMouseEnter = () => onHoverMenu('whyBigbox');

  return (
    <>
      <AppBar elevation={0} color="inherit" className={classes.header}>
        <div className="item">
          <Toolbar className={classes.toolbar}>
            <Grid container alignItems="center">
              <Grid item lg={2} md={2} sm={4} xs={4}>
                <a href="/" className={classes.logoContainer}>
                  <a>
                    <img
                      src="/assets/images/logo.png"
                      alt="Bigbox Logo"
                      width={102}
                      height={37}
                    />
                  </a>
                </a>
              </Grid>
              <Hidden smDown>
                <Grid
                  item
                  lg={4}
                  md={5}
                  style={{display: 'flex', alignItems: 'center'}}>
                  <Grid container>
                    <Grid item>
                      <div
                        className={classes.linkHoverWrapper}
                        onMouseEnter={() => onHoverMenu('whyBigbox')}
                        onMouseLeave={onLeaveMenu}>
                        <span
                          style={{
                            color:
                              content === 'whyBigbox' && isOpen && '#026DE1',
                          }}
                          className={classes.linkHover}>
                          {t('header.why-bigbox.index')}
                        </span>
                        {content === 'whyBigbox' && isOpen && (
                          <div className={classes.triangle} />
                        )}
                      </div>
                    </Grid>
                    <Grid item>
                      <div
                        className={classes.linkHoverWrapper}
                        onMouseEnter={() => onHoverMenu('solutions')}
                        onMouseLeave={onLeaveMenu}>
                        <span
                          style={{
                            color:
                              content === 'solutions' && isOpen && '#026DE1',
                          }}
                          className={classes.linkHover}>
                          {t('header.solutions.index')}
                        </span>
                        {content === 'solutions' && isOpen && (
                          <div className={classes.triangle} />
                        )}
                      </div>
                    </Grid>
                    <Grid item>
                      <div
                        className={classes.linkHoverWrapper}
                        onMouseEnter={() => onHoverMenu('products')}
                        onMouseLeave={onLeaveMenu}>
                        <span
                          style={{
                            color:
                              content === 'products' && isOpen && '#026DE1',
                          }}
                          className={classes.linkHover}>
                          {t('header.products.index')}
                        </span>
                        {content === 'products' && isOpen && (
                          <div className={classes.triangle} />
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden smDown>
                <Grid
                  item
                  lg={6}
                  md={5}
                  sm={6}
                  className={classes.iconContainer}>
                  <SearchDialog styles={{container: {marginRight: '15px'}}} />
                  <IconButton
                    style={{marginRight: '15px'}}
                    disableRipple
                    onClick={() => setPopUpOpen(true)}
                    className={classes.icon}
                    edge="start">
                    <img
                      src={'/img/icons/call-icon.svg'}
                      alt="icon-call"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                  {/* <FormControl
                    variant="outlined"
                    classes={{ root: classes.selectForm }}
                  >
                    <Select
                      defaultValue="en"
                      value={locale}
                      onChange={(e) => changeLocale(e.target.value)}
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="id">Indonesia</MenuItem>
                    </Select>
                  </FormControl> */}
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={8}
                  xs={8}
                  style={{
                    display: 'flex',
                    flexDireection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <div className={classes.searchContainer}>
                    <SearchDialog styles={{container: {marginRight: '15px'}}} />
                  </div>
                  <IconButton
                    className={classes.icon}
                    disableRipple
                    edge="start"
                    onClick={() => {
                      setIsMdOpen((prev) => !prev);
                    }}>
                    {isMdOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </div>
      </AppBar>
      <div className={classes.emptySpace} />
      <Dropdown
        close={closeDropdown}
        isOpen={isOpen}
        content={content}
        open={openDropdown}
      />
      <MdDropDown isOpen={isMdOpen} />
      <Popupcall open={popUpOpen} close={closePopUpCall} />
    </>
  );
}

export default App;
