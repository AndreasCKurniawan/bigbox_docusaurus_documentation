/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const Button = (props) => {
  const {
    fullWidth,
    className,
    style,
    type,
    onClick,
    children,
    btnClassLabel,
    outlined,
    disabled,
    rounded,
    autoWidth,
    color,
    ariaLabel,
    ariaHidden,
    name,
  } = props;

  const useStyle = makeStyles((theme) => {
    const tabletHd = theme.breakpoints.up('md');
    const tablet = theme.breakpoints.up('sm');

    const backgroundColor = outlined
      ? 'transparent'
      : disabled
      ? 'rgba(0, 0, 0, 0.12) !important'
      : color || '#026DE1';

    const colors =
      color ||
      (outlined ? '#026DE1' : disabled ? 'rgba(0, 0, 0, 0.12)' : 'white');

    const border = outlined ? `1px solid ${color || '#026DE1'}` : 'none';

    return {
      root: {
        minWidth: fullWidth ? '100%' : autoWidth ? 'auto' : '196px',
        [tablet]: {
          minHeight: '40px',
          minWidth: fullWidth ? '100%' : autoWidth ? 'auto' : '210px',
        },
        [tabletHd]: {
          minHeight: '44px',
        },
        textTransform: 'none',
        backgroundColor,
        fontWeight: '600',
        fontSize: '14px',
        borderRadius: rounded ? '20px' : '6px',
        lineHeight: '20px',
        letterSpacing: '0.04em',
        fontFamily: 'inherit',
        minHeight: '38px',
        color: colors,
        border,
        '&:hover': {
          boxShadow: '0px 2px 2px rgba(2, 109, 225, 0.2)',
        },
      },
    };
  });

  const classes = useStyle();

  return (
    <>
      <button
        style={style}
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${classes.root} ${className}`}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        name={name}
      >
        <span className={btnClassLabel || 'label'}>{children}</span>
      </button>
    </>
  );
};

Button.propTypes = {
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
  type: PropTypes.string,
  onClick: PropTypes.func,
  btnClassLabel: PropTypes.string,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  autoWidth: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaHidden: PropTypes.bool,
  name: PropTypes.string,
};

Button.defaultProps = {
  fullWidth: false,
  className: '',
  style: {},
  type: 'button',
  onClick: null,
  btnClassLabel: null,
  outlined: false,
  disabled: false,
  autoWidth: false,
  rounded: false,
  color: null,
  ariaLabel: null,
  ariaHidden: null,
  name: null,
};

export default Button;
