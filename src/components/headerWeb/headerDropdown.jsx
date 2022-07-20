/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import { FormattedMessage } from "gatsby-plugin-react-intl";
import Button from '../button';
import Container from '../container';
import data from './data';
import useStyles from './styles.headerDropdown';
import initState from '../../utils/init-state';

function App(props) {
  const {t} = useTranslation('main');
  // const [solutions, setSolutions] = useState(initInt);
  // const [products, setProducts] = useState(initInt);
  // const [contentTitle, setContentTitle] = useState(initString);
  const [state, setState] = useState({
    solutions: 0,
    products: 0,
    contentTitle: '',
  });
  const [productTabTitle, setProductTabTitle] = useState(initState.String);
  const [productTabData, setProductTabData] = useState(initState.Arr);

  const classes = useStyles(state);

  useEffect(() => {
    switch (state.products) {
      case 0:
        setProductTabTitle(data.bigDataPlatformContent.title);
        setProductTabData(data.bigDataPlatformContent.content);
        break;
      case 1:
        setProductTabTitle(data.apiManagementContent.title);
        setProductTabData(data.apiManagementContent.content);
        break;
      case 2:
        setProductTabTitle(data.aiMachineLearningContent.title);
        setProductTabData(data.aiMachineLearningContent.content);
        break;
      case 3:
        setProductTabTitle(data.analyticsContent.title);
        setProductTabData(data.analyticsContent.content);
        break;
      default:
        setProductTabTitle(data.bigDataPlatformContent.title);
        setProductTabData(data.bigDataPlatformContent.content);
        break;
    }
  }, [state.products]);

  const whyBigbox = () => (
    <div
      className={classes.headerDropdownContainer}
      onMouseEnter={props.open}
      onMouseLeave={props.close}>
      <Container>
        <Grid container>
          <Grid item lg={6} md={6}>
            <div className={classes.wbLeft}>
              <div className={classes.title}>
                {t('header.why-bigbox.banner-text')}
              </div>
              <p className={classes.wbT2}>
                {t('header.why-bigbox.banner-sub-text')}
              </p>
              <a href="/choosing-bigbox">
                <a>
                  <span className={`${classes.wbMr} choosing-bigbox`}>
                    {t('common.learn-more')}
                    ...
                  </span>
                </a>
              </a>
            </div>
          </Grid>
          <Grid item lg={6}>
            <p className={classes.wbT3}>{t('header.why-bigbox.index')}</p>
            <div className={classes.wbRight}>
              {data.contentWb.map((v) => (
                <div key={v.title} className={classes.wbLinkWrapper}>
                  <a href={v.link}>
                    <a>
                      <span className={`${classes.wbT4} ${v.class}`}>
                        {t(v.title)}
                      </span>
                    </a>
                  </a>
                  <div className={classes.wbT5}>{t(v.subtitle)}</div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

  const solutions = () => (
    <div
      className={classes.headerDropdownContainer}
      onMouseEnter={props.open}
      onMouseLeave={props.close}
      style={{display: 'flex', overflow: 'auto'}}>
      <div className={classes.leftSidebar}>
        {data.solutionCat.map((v, k) => (
          <div
            onMouseEnter={() => {
              setState((prevState) => ({...prevState, solutions: k}));
            }}
            key={v.name}
            style={{
              backgroundColor: state.solutions === k ? '#F2F2F2' : null,
            }}
            className={classes.textBox}>
            <p
              style={{
                margin: 0,
                color: state.solutions === k ? '#232528' : null,
              }}
              className={classes.slt2}>
              {t(v.name)}
            </p>
            {state.solutions === k && (
              <ArrowForwardIosIcon
                style={{
                  color: state.solutions === k ? '#232528' : null,
                  fontSize: '14px',
                }}
              />
            )}
          </div>
        ))}
        <div className={classes.sidebarBtnWrapper}>
          <a href="/solutions">
            <a>
              <Button outlined>
                {t('header.solutions.see-all-solutions')}
              </Button>
            </a>
          </a>
        </div>
      </div>
      <div className={classes.rightMenu}>
        <div className={classes.t1}>
          {t(
            state.solutions === 0
              ? data.solutionContent.title
              : data.businessContent.title,
          )}
        </div>
        <Grid container>
          {state.solutions === 0
            ? data.solutionContent.content.map((v) => (
                <Grid item lg={3} md={3} key={v.title}>
                  <a href={v.url}>
                    <a>
                      <Grid container className={classes.contentBox}>
                        <Grid item lg={1} md={1}>
                          <img
                            className={`${classes.img} ${v.class}`}
                            src={v.logo}
                            alt={`logo${v.title}`}
                          />
                        </Grid>
                        <Grid item lg={11} md={11}>
                          <div style={{marginLeft: '14px'}}>
                            <div className={`${classes.title1} ${v.class}`}>
                              {t(v.title)}
                            </div>
                            <p className={`${classes.subtitle} ${v.class}`}>
                              {t(v.description)}
                            </p>
                          </div>
                        </Grid>
                      </Grid>
                    </a>
                  </a>
                </Grid>
              ))
            : data.businessContent.content.map((v) => (
                <Grid
                  item
                  lg={3}
                  md={3}
                  key={v.title}
                  className={classes.contentBox}>
                  <a href={v.url}>
                    <a>
                      <span className={v.class}>
                        <div className={`${classes.title1} ${v.class}`}>
                          {t(v.title)}
                        </div>
                        <p className={`${classes.subtitle} ${v.class}`}>
                          {t(v.description)}
                        </p>
                      </span>
                    </a>
                  </a>
                </Grid>
              ))}
        </Grid>
      </div>
    </div>
  );

  const products = () => {
    return (
      <div
        className={classes.headerDropdownContainer}
        onMouseEnter={props.open}
        onMouseLeave={props.close}
        style={{display: 'flex'}}>
        <div className={classes.leftSidebar}>
          {data.productsCat.map((v, k) => (
            <div
              onMouseEnter={() => {
                setState((prevState) => ({...prevState, products: k}));
              }}
              key={v.name}
              style={{
                backgroundColor: state.products === k ? '#F2F2F2' : null,
              }}
              className={classes.textBox}>
              <p
                style={{
                  margin: 0,
                  color: state.products === k ? '#232528' : null,
                }}
                className={classes.slT2}>
                {t(v.name)}
              </p>
              {state.products === k && (
                <ArrowForwardIosIcon
                  className={classes.arrow}
                  style={{color: state.products === k ? '#232528' : null}}
                />
              )}
            </div>
          ))}
          <div className={classes.sidebarBtnWrapper}>
            <a href="/products">
              <a>
                <Button outlined btnClassLabel="see-all-products">
                  {t('header.products.see-all-products')}
                </Button>
              </a>
            </a>
          </div>
        </div>
        <div className={classes.rightMenu}>
          <div className={classes.t1}>{t(productTabTitle)}</div>
          <Grid container>
            {productTabData.map((v) => (
              <Grid
                key={v.title}
                item
                lg={3}
                md={3}
                className={classes.contentBox}>
                {v.url.includes('https') ? (
                  <a href={v.url}>
                    <a>
                      <span className={v.class}>
                        <div className={`${classes.title1} ${v.class}`}>
                          {t(v.title)}
                        </div>
                        <p className={`${classes.subtitle} ${v.class}`}>
                          {t(v.description)}
                        </p>
                      </span>
                    </a>
                  </a>
                ) : (
                  <a href={v.url}>
                    <a>
                      <span className={v.class}>
                        <div className={`${classes.title1} ${v.class}`}>
                          {t(v.title)}
                        </div>
                        <p className={`${classes.subtitle} ${v.class}`}>
                          {t(v.description)}
                        </p>
                      </span>
                    </a>
                  </a>
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  };
  return (
    <div style={{display: props.isOpen ? 'block' : 'none'}}>
      {props.content === 'products'
        ? products()
        : props.content === 'solutions'
        ? solutions()
        : whyBigbox()}
    </div>
  );
}

export default App;
