/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect, useState, createRef} from 'react';
import {Divider, IconButton} from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';
// import { FormattedMessage, useIntl } from "gatsby-plugin-react-intl";
import initState from '../../utils/init-state';
import SearchIcon from '/img/icons/search-icon.svg';
import useStyles from './styles.searchDialog';

function App({classNames, styles}) {
  const router = useRouter();
  const {t} = useTranslation('main');

  const [search, setSearch] = useState(initState.String);
  const [history, setHistory] = useState(initState.Arr);
  const [rank, setRank] = useState(initState.Arr);
  const [expanded, setExpanded] = useState(initState.Bool);

  // const { formatMessage } = useIntl();

  const inputRef = createRef();

  useEffect(() => {
    const localHistory = localStorage.getItem('searchHistory');
    const rankHistory = localStorage.getItem('rankHistory');
    if (localHistory) {
      setHistory(JSON.parse(localHistory));
    }
    if (rankHistory) {
      setRank(JSON.parse(rankHistory));
    }
  }, []);

  useEffect(() => {
    if (expanded) {
      inputRef.current.focus();
    }
  }, [expanded]);

  const onSearchInputChange = (e) => setSearch(e.target.value);

  const onSearchKeyDown = (e) =>
    e.key === 'Enter' && router.push(`/search?q=${search}`);

  const toggleExpandOpen = () => setExpanded(true);

  const toggleExpandClose = () => setExpanded(false);

  const handleSearchClick = () =>
    !expanded ? toggleExpandOpen() : router.push(`/search?q=${search}`);

  const handleEscapeKey = (e) => e.key === 'Escape' && toggleExpandClose();

  const classes = useStyles();

  const searchPlaceholder = t('common.search');

  return (
    <>
      <ClickAwayListener onClickAway={toggleExpandClose}>
        <div
          onKeyDown={handleEscapeKey}
          style={styles.container || {}}
          className={`${classNames.container || ''} ${classes.wrapper} ${
            expanded ? classes.wrapperExpanded : ''
          }`}>
          <div className={classes.searchBoxContainer}>
            <IconButton className={classes.iconBox} onClick={handleSearchClick}>
              <img
                src={'/assets/icons/search-icon.svg'}
                alt="search icon"
                width={20}
                height={20}
              />
            </IconButton>
            <input
              onChange={onSearchInputChange}
              onKeyDown={onSearchKeyDown}
              ref={inputRef}
              placeholder={searchPlaceholder}
              type="search"
              className={classes.inputs}
            />
            {search !== '' && expanded && (
              <>
                <Divider />
                <div className={classes.suggestionBox}>
                  {history.length !== 0 && (
                    <>
                      <div className={classes.p2}>
                        {t('common.recent-pages')}
                      </div>
                      <div>
                        {history.map((v) => (
                          <a href={v.url} key={v.title}>
                            <a>
                              <div className={classes.result}>
                                <p style={{margin: 0}}>{v.title}</p>
                              </div>
                            </a>
                          </a>
                        ))}
                      </div>
                      <Divider style={{marginTop: '20px'}} />
                    </>
                  )}
                  {rank.length !== 0 && (
                    <>
                      <div className={classes.p2}>
                        {t('common.most-visited-pages')}
                      </div>
                      <div>
                        {rank.slice(0, 5).map((v) => (
                          <a href={v.url} key={v.title}>
                            <a>
                              <div className={classes.result}>
                                <p style={{margin: 0}}>{v.title}</p>
                              </div>
                            </a>
                          </a>
                        ))}
                      </div>
                      <Divider style={{marginTop: '20px'}} />
                    </>
                  )}
                  <a href={`/search?q=${search}`}>
                    <a>
                      <div
                        className={classes.result}
                        style={{padding: '10px 36px'}}>
                        <p className={classes.allResulta}>
                          {t('common.all-result-for')}
                          &nbsp;
                          {`"${search}"`}
                        </p>
                      </div>
                    </a>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}

App.propTypes = {
  classNames: PropTypes.instanceOf(Object),
  styles: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  classNames: {},
  styles: {},
};

export default App;
