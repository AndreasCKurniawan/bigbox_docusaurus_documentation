/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import axios from 'axios';
import styles from './styles.module.css';
import ThumbsComponents from '../../components/icons/thumbs';
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
export default function TOC({className, ...props}) {
  const [hoverState, setHoverState] = useState('');
  const [active, setActive] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleClickFeedback = async (data) => {
    setActive(data);
    setSubmitted(true);
    await axios.post('http://localhost:3001/api/docs', {
      feedback: data == 'yes' ? 'positive' : 'negative',
      page: window.location.href,
    });
  };

  const activeColor = '#0549cf';

  return (
    <div className="tocContainer" style={{}}>
      <div
        className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}
        style={{maxHeight: '40vh'}}>
        <TOCItems
          {...props}
          linkClassName={LINK_CLASS_NAME}
          linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
          style={{maxHeight: '40vh'}}
        />
      </div>

      <div
        className="feedbackContainer"
        style={submitted ? {opacity: 0} : null}>
        <p className="feedbackTitle">
          {submitted
            ? 'Thanks For Your Feedback'
            : 'Was This Article Helpfull?'}
        </p>

        <div className="feedbackOptionsContainer">
          <div
            className="feedbackYes feedbackOptionContainer "
            onClick={() => handleClickFeedback('yes')}>
            <ThumbsComponents color={active == 'yes' ? activeColor : null} />
            <span
              className="feedbackText"
              style={active == 'yes' ? {color: activeColor} : null}>
              Yes
            </span>
          </div>

          <div
            className="feedbackNo feedbackOptionContainer"
            onClick={() => handleClickFeedback('no')}>
            <ThumbsComponents
              flip
              color={active == 'no' ? activeColor : null}
            />
            <span
              className="feedbackText"
              style={active == 'no' ? {color: activeColor} : null}>
              No
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
