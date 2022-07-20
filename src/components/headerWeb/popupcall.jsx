/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Backdrop, IconButton, Grid} from '@material-ui/core';
// import { FormattedMessage } from "gatsby-plugin-react-intl";
import CancelIcon from '@material-ui/icons/Cancel';
import CallIcon from '/img/icons/call-icon.svg';
import MailIcon from '/img/icons/mail-icon.svg';
import useStyles from './styles.popupcall';

function App({open, close}) {
  const {t} = useTranslation('main');

  const classes = useStyles();

  const handleClose = () => close();

  return (
    <Backdrop invisible open={open} className={classes.backDrop}>
      <div className={classes.dialog}>
        <Grid container>
          <Grid item lg={6} md={6} style={{borderRight: '1px solid #E0E0E0'}}>
            <div className={classes.menuBox}>
              <div>
                <div className={classes.imgIconWrapper}>
                  <img
                    className={classes.iconImg}
                    alt="phone"
                    src={'/assets/icons/call-icon.svg'}
                  />
                </div>
                <div className={classes.link}>
                  <span className={classes.label}>
                    {t('common.call-us-at')}
                  </span>
                </div>
                <div>
                  <a href="tel:+622127088011">
                    <a>
                      <span className={classes.link}>+62 (21) 2708 8011</span>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6}>
            <div className={classes.menuBox}>
              <div>
                <div className={classes.imgIconWrapper}>
                  <img
                    className={classes.iconImg}
                    alt="mail"
                    src={'/assets/icons/mail-icon.svg'}
                  />
                </div>
                <div className={classes.link}>
                  <span className={classes.label}>Email Sales</span>
                </div>
                <div>
                  <a href="mailto:support@bigbox.co.id">
                    <a>
                      <span className={classes.link}>support@bigbox.co.id</span>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </Grid>

          <div className={classes.closeIcon}>
            <IconButton onClick={handleClose} className={classes.icon}>
              <CancelIcon style={{fontSize: '32px'}} />
            </IconButton>
          </div>
        </Grid>
      </div>
    </Backdrop>
  );
}

export default App;
