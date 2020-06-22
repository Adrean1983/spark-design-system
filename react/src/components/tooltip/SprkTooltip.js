import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../icons/SprkIcon';
import uniqueId from 'lodash/uniqueId';

class SprkTooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: this.props.isDefaultOpen || false
    }

    this.toggle = this.toggle.bind(this);
    this.handleWindowKeydown = this.handleWindowKeydown.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);

    this.triggerRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleWindowKeydown);
    window.addEventListener('click', this.handleWindowClick);

    this.triggerRef.current.addEventListener('mouseover', (e) => {
      this.setPositioningClass();
    });

    this.triggerRef.current.addEventListener('focus', (e) => {
      this.setPositioningClass();
    });

    this.setPositioningClass();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleWindowKeydown);
    window.removeEventListener('click', this.handleWindowClick);
  }

  setPositioningClass() {
    var trigger = this.triggerRef.current;

    const elemX = trigger.getBoundingClientRect().left;
    const elemY = trigger.getBoundingClientRect().top;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (elemX > viewportWidth / 2) {
      if (elemY > viewportHeight / 2) {
        this.setState({ position: 'topleft' })
      } else {
        this.setState({ position: 'bottomleft' })
      }
    } else {
      if (elemY > viewportHeight / 2) {
        this.setState({ position: 'topright' })
      } else {
        this.setState({ position: 'bottomright' })
      }
    }
  }

  handleWindowKeydown(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      this.setState({
        isToggled: false
      })
    }
  }

  handleWindowClick(e) {
    if (this.state.isToggled) {
      if (!this.tooltipRef.current.contains(e.target)
        && !this.triggerRef.current.contains(e.target)) {
        this.setState({
          isToggled: false
        });
      }
    }
  }

  toggle() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }))
  }

  render() {
    const {
      children,
      idString,
      triggerIconType,
      iconAdditionalClasses,
      additionalClasses,
      analyticsString,
      isDefaultOpen,
      id,
      ...other
    } = this.props;

    return (
      <span {...other} className='sprk-c-Tooltip__container'>
        <button
          ref={this.triggerRef}
          onClick={this.toggle}
          className={classnames({
            'sprk-c-Tooltip__trigger': true,
            'sprk-c-Tooltip--toggled': this.state.isToggled,
          })}
          aria-expanded={this.state.isToggled ? 'true' : 'false'}
          aria-labelledby={id}
          data-analytics={analyticsString}
          data-id={idString}
        >
          <SprkIcon iconName={triggerIconType} additionalClasses={iconAdditionalClasses} />
        </button>
        <span
          ref={this.tooltipRef}
          className={classnames(
            'sprk-c-Tooltip',
            additionalClasses,
            {
              'sprk-c-Tooltip--top-left': this.state.position === 'topleft',
              'sprk-c-Tooltip--top-right': this.state.position === 'topright',
              'sprk-c-Tooltip--bottom-left': this.state.position === 'bottomleft',
              'sprk-c-Tooltip--bottom-right': this.state.position === 'bottomright',
            }
          )}
          id={id}
        >
          {children}
        </span>
      </span>
    );
  }
}

SprkTooltip.defaultProps = {
  triggerIconType: 'question-filled',
  id: uniqueId('sprk_tooltip_'),
};

SprkTooltip.propTypes = {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * tooltip element.
   */
  additionalClasses: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the trigger element.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * svg icon.
   */
  iconAdditionalClasses: PropTypes.string,
  /**
   * Optional: the unique ID to use for the tooltip element.
   * If an ID is not provided, a unique ID will be created
   * automatically.
   */
  id: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Whether or not the tooltip is toggled open when the component renders.
   */
  isDefaultOpen: PropTypes.bool,
  /**
   * The icon to use for the trigger element.
   */
  triggerIconType: PropTypes.string,
};

export default SprkTooltip;
