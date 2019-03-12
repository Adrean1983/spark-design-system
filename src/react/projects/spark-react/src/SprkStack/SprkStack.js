import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStack = (props) => {
  const {
    children,
    itemSpacing,
    splitAt,
    additionalClasses,
    idString,
    ...other
  } = props;

  const classNames = classnames('sprk-o-Stack', additionalClasses, {
    'sprk-o-Stack--tiny': itemSpacing === 'tiny',
    'sprk-o-Stack--small': itemSpacing === 'small',
    'sprk-o-Stack--medium': itemSpacing === 'medium',
    'sprk-o-Stack--large': itemSpacing === 'large',
    'sprk-o-Stack--huge': itemSpacing === 'huge',
    'sprk-o-Stack--misc-a': itemSpacing === 'misc-a',
    'sprk-o-Stack--misc-b': itemSpacing === 'misc-b',
    'sprk-o-Stack--misc-c': itemSpacing === 'misc-c',
    'sprk-o-Stack--misc-d': itemSpacing === 'misc-d',
    'sprk-o-Stack--split@xxs': splitAt === 'extraTiny',
    'sprk-o-Stack--split@xs': splitAt === 'tiny',
    'sprk-o-Stack--split@s': splitAt === 'small',
    'sprk-o-Stack--split@m': splitAt === 'medium',
    'sprk-o-Stack--split@l': splitAt === 'large',
    'sprk-o-Stack--split@xl': splitAt === 'huge',
  });

  return (
    <div className={classNames} data-id={idString} {...other}>
      {children}
    </div>
  );
};

SprkStack.defaultProps = {
  children: '',
  splitAt: '',
  itemSpacing: '',
  idString: '',
  additionalClasses: '',
};

SprkStack.propTypes = {
  children: PropTypes.node,
  // If set, will switch the flex-direction from column to row at this point
  splitAt: PropTypes.oneOf([
    'extraTiny',
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    '',
  ]),
  // Value determines the spacing between the items
  itemSpacing: PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    'misc-a',
    'misc-b',
    'misc-c',
    'misc-d',
    '',
  ]),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
};

export default SprkStack;
