/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import {Grid, Fade} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import { FormattedMessage } from "gatsby-plugin-react-intl";
import Button from '../button';
import initState from '../../utils/init-state';
import data from './data';
import useStyles from './styles.mdHeaderDropdown';

const Phone =
  'https://static.bigbox.co.id/web-files/images/icons/call-blue.png';

const ExpandIcon = () => {
  const style = {fontSize: '18px'};
  return <i style={style} className="fa fa-caret-down" />;
};

function App(props) {
  const {t} = useTranslation('main');
  const [expanded, setExpanded] = useState(initState.Bool);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div>
      <Fade in={props.isOpen}>
        <div className={classes.container}>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Accordion
                square
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <AccordionSummary
                  className={classes.accrodionBox}
                  expandIcon={<ExpandIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <div className={classes.title}>
                    {t('header.why-bigbox.index')}
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.accrodionBox}>
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <div className={classes.t1}>
                        {t('header.why-bigbox.banner-text')}
                      </div>
                      <div className={classes.st1}>
                        {t('header.why-bigbox.banner-sub-text')}
                      </div>
                      <div style={{marginBottom: '36px'}}>
                        <a href="/choosing-bigbox">
                          <a>
                            <span className={classes.a1}>
                              {t('common.learn-more')}
                            </span>
                          </a>
                        </a>
                      </div>
                      {data.contentWb.map((v) => (
                        <a href={v.link} key={v.title}>
                          <a>
                            <div className={`${classes.c1} ${v.class}`}>
                              {t(v.title)}
                            </div>
                          </a>
                        </a>
                      ))}
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}>
                <AccordionSummary
                  className={classes.accrodionBox}
                  expandIcon={<ExpandIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header">
                  <div className={classes.title}>
                    {t('header.solutions.index')}
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.accrodionBox}>
                  <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                      <div
                        className={classes.t2}
                        style={{marginBottom: '36px'}}>
                        {t(data.solutionContent.title)}
                      </div>
                      {data.solutionContent.content.map((v) => (
                        <a href={v.url} key={v.title}>
                          <a>
                            <div className={`${classes.c1} ${v.class}`}>
                              {t(v.title)}
                            </div>
                          </a>
                        </a>
                      ))}
                      <div
                        className={classes.t2}
                        style={{marginBottom: '36px', marginTop: '48px'}}>
                        {t(data.businessContent.title)}
                      </div>
                      {data.businessContent.content.map((v) => (
                        <div key={v.title} className={classes.c1}>
                          {t(v.title)}
                        </div>
                      ))}
                      <div style={{marginTop: '40px', marginBottom: '40px'}}>
                        <a href="/solutions">
                          <a>
                            <Button outlined>
                              {t('header.solutions.see-all-solutions')}
                            </Button>
                          </a>
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}>
                <AccordionSummary
                  className={classes.accrodionBox}
                  expandIcon={<ExpandIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header">
                  <div className={classes.title}>
                    {t('header.products.index')}
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.accrodionBox}>
                  <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                      <div
                        className={classes.t2}
                        style={{marginBottom: '36px'}}>
                        {t(data.bigDataPlatformContent.title)}
                      </div>
                      {data.bigDataPlatformContent.content.map((v) => (
                        <a href={v.url} key={v.title}>
                          <a>
                            <div className={`${classes.c1} ${v.class}`}>
                              {t(v.title)}
                            </div>
                          </a>
                        </a>
                      ))}
                      <div
                        className={classes.t2}
                        style={{marginBottom: '36px', marginTop: '48px'}}>
                        {t(data.apiManagementContent.title)}
                      </div>
                      {data.apiManagementContent.content.map((v) =>
                        v.url.includes('https') ? (
                          <a href={v.url} key={v.title}>
                            <a>
                              <div
                                key={v.title}
                                className={`${classes.c1} ${v.class}`}>
                                {t(v.title)}
                              </div>
                            </a>
                          </a>
                        ) : (
                          <a href={v.url} key={v.title}>
                            <a>
                              <div
                                key={v.title}
                                className={`${classes.c1} ${v.class}`}>
                                {t(v.title)}
                              </div>
                            </a>
                          </a>
                        ),
                      )}
                      <div
                        className={classes.t2}
                        style={{marginBottom: '36px', marginTop: '48px'}}>
                        {t(data.aiMachineLearningContent.title)}
                      </div>
                      {data.aiMachineLearningContent.content.map((v) => (
                        <a href={v.url} key={v.title}>
                          <a>
                            <div className={`${classes.c1} ${v.class}`}>
                              {t(v.title)}
                            </div>
                          </a>
                        </a>
                      ))}
                      <div
                        className={classes.t2}
                        style={{marginBottom: '36px', marginTop: '48px'}}>
                        {t(data.analyticsContent.title)}
                      </div>
                      {data.analyticsContent.content.map((v) => (
                        <a href={v.url} key={v.title}>
                          <a>
                            <div className={`${classes.c1} ${v.class}`}>
                              {t(v.title)}
                            </div>
                          </a>
                        </a>
                      ))}
                      <div className={classes.buttonWrapper}>
                        <a href="/products">
                          <a>
                            <Button btnClassLabel="see-all-products" outlined>
                              {t('header.products.see-all-products')}
                            </Button>
                          </a>
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.buttonBox}>
              <a href="/contact-us">
                <a>
                  <Button outlined btnClassLabel="contact-us">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <img
                        src={Phone}
                        style={{width: '24px', height: '24px'}}
                        alt="contact-us"
                      />
                      <span>&nbsp; {t('common.contact-us')}</span>
                    </div>
                  </Button>
                </a>
              </a>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </div>
  );
}

export default App;
