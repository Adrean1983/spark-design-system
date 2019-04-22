import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkLink from '../SprkLink/SprkLink';
import SprkButton from '../SprkButton/SprkButton';

const SprkPromo = props => {
  const {
    title,
    subtitle,
    additionalClasses,
    additionalClassesContent,
    cta,
    ctaText,
    ctaHref,
    ctaAnalytics,
    ctaIdString,
    imgSrc,
    imgAlt,
    imgLinkHref,
    imgLinkAnalytics,
    imgLinkIdString,
    additionalClassesImgLink,
    idString,
    isFlag,
    mediaRev,
    hasBorder,
    children,
    ...other
  } = props;

  return (
    <div
      className={classnames(
        'sprk-c-Promo',
        'sprk-o-Stack',
        { 'sprk-c-Promo--flag': isFlag },
        { 'sprk-c-Promo--bordered': hasBorder },
        additionalClasses,
      )}
      data-id={idString}
      {...other}
    >
      {imgSrc &&
        isFlag &&
        !mediaRev && (
          <SprkLink
            variant="plain"
            href={imgLinkHref}
            additionalClasses={classnames(
              'sprk-o-Stack__item--fourth@s',
              'sprk-o-Stack__item',
              additionalClassesImgLink,
            )}
            analyticsString={imgLinkAnalytics}
            idString={imgLinkIdString}
          >
            <img
              className="sprk-c-Promo__image--flag"
              alt={imgAlt}
              src={imgSrc}
            />
          </SprkLink>
        )}

      {imgSrc &&
        !mediaRev &&
        !isFlag && (
          <SprkLink
            variant="plain"
            href={imgLinkHref}
            additionalClasses={classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack__item--half@s',
              additionalClassesImgLink,
            )}
            analyticsString={imgLinkAnalytics}
            idString={imgLinkIdString}
          >
            <img className="sprk-c-Promo__image" alt={imgAlt} src={imgSrc} />
          </SprkLink>
        )}

      <div
        className={classnames(
          'sprk-c-Promo__content',
          'sprk-o-Stack__item',
          'sprk-o-Stack',
          'sprk-o-Stack--large',
          { 'sprk-o-Stack__item--three-fourths@s': isFlag },
          { 'sprk-o-Stack__item--half@s': imgSrc },
          additionalClassesContent,
        )}
      >
        {title && (
          <h3
            className="
            sprk-b-TypeDisplayFive
            sprk-o-Stack__item
            sprk-c-Promo__title"
          >
            {title}
          </h3>
        )}

        {subtitle && (
          <div className="sprk-c-Promo__subtitle sprk-o-Stack__item">
            {subtitle}
          </div>
        )}

        <div
          className="
          sprk-b-TypeBodyTwo
          sprk-o-Stack__item
          sprk-c-Promo__childrenContainer"
        >
          {children}
        </div>

        {cta === 'button' && (
          <div className="sprk-o-Stack__item">
            <SprkButton
              element="a"
              href={ctaHref}
              analyticsString={ctaAnalytics}
              idString={ctaIdString}
            >
              {ctaText}
            </SprkButton>
          </div>
        )}

        {cta === 'link' && (
          <div className="sprk-o-Stack__item">
            <SprkLink
              variant="base"
              href={ctaHref}
              analyticsString={ctaAnalytics}
              idString={ctaIdString}
            >
              {ctaText}
            </SprkLink>
          </div>
        )}
      </div>

      {isFlag &&
        imgSrc &&
        mediaRev && (
          <SprkLink
            variant="plain"
            href={imgLinkHref}
            additionalClasses={classnames(
              'sprk-o-Stack__item--fourth@s',
              'sprk-o-Stack__item',
              additionalClassesImgLink,
            )}
            analyticsString={imgLinkAnalytics}
            idString={imgLinkIdString}
          >
            <img
              className="sprk-c-Promo__image--flag"
              alt={imgAlt}
              src={imgSrc}
            />
          </SprkLink>
        )}

      {!isFlag &&
        imgSrc &&
        mediaRev && (
          <SprkLink
            variant="plain"
            href={imgLinkHref}
            additionalClasses={classnames(
              'sprk-o-Stack__item',
              'sprk-o-Stack__item--half@s',
              additionalClassesImgLink,
            )}
            analyticsString={imgLinkAnalytics}
            idString={imgLinkIdString}
          >
            <img className="sprk-c-Promo__image" alt={imgAlt} src={imgSrc} />
          </SprkLink>
        )}
    </div>
  );
};

SprkPromo.propTypes = {
  // The children that will be rendered inside the content portion of the promo
  children: PropTypes.node,
  // The text to appear in the title section
  title: PropTypes.string,
  // The text to appear in the subtitle section
  subtitle: PropTypes.string,
  // Any additional classes (space-delimited string) to apply to the root
  // element of the Promo
  additionalClasses: PropTypes.string,
  // Any additional classes (space-delimited string) to apply to the content
  // element of the Promo
  additionalClassesContent: PropTypes.string,
  // The type of element to use for the Promo Call-to-Action. If this property
  // is omitted, no Call-to-Action will be rendered.
  cta: PropTypes.oneOf(['button', 'link']),
  // The text to include in the Call-to-Action.
  ctaText: PropTypes.string,
  // The URL to navigate to when the Call-to-Action is clicked.
  ctaHref: PropTypes.string,
  // The string to use for the data-analytics attribute on the Call-to-Action
  ctaAnalytics: PropTypes.string,
  // The string to use for the data-id attribute on the Call-to-Action
  ctaIdString: PropTypes.string,
  // The source location of the Promo image. If this propterty is omitted, no
  // image will be rendered.
  imgSrc: PropTypes.string,
  // The alt text property for the image
  imgAlt: PropTypes.string,
  // The URL to navigate to when the image is clicked.
  imgLinkHref: PropTypes.string,
  // The string to use for the data-analytics attribute on the image link.
  imgLinkAnalytics: PropTypes.string,
  // The string to use for the data-id attribute on the image link.
  imgLinkIdString: PropTypes.string,
  // Any additional classes (space-delimited string) to apply to the image link.
  additionalClassesImgLink: PropTypes.string,
  // The string to use for the data-id property on the root Promo element.
  idString: PropTypes.string,
  // If provided, the Promo will render as the Flag variant.
  isFlag: PropTypes.bool,
  // If provided, the Promo will be rendered in reverse horizontal order
  // (content on the left, image on the right)
  mediaRev: PropTypes.bool,
  // If provided, the Promo will be rendered with the sprk-c-Promo--bordered
  // class.
  hasBorder: PropTypes.bool,
};

export default SprkPromo;
