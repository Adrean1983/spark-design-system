import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkDividers = (props) => {
  const { element, additionalClasses, idString, ...other } = props;
  const classNames = classnames(
    'sprk-c-Divider',
    additionalClasses
  )
  const TagName = element;
  return (
    <TagName className={classNames} data-id={idString} {...other}></TagName>
  );
}

SprkDividers.propTypes = {
  // The element that will be rendered - required
  element: PropTypes.oneOf(['span', 'div']).isRequired,
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the element
  additionalClasses: PropTypes.string
};

export default SprkDividers;