/**
 * External dependencies
 */
import classnames from "classnames";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

/**
 * Internal dependencies
 */
import {
  GalleryClasses,
  GalleryStyles,
} from "../../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { RichText } from "@wordpress/block-editor";

const save = ({ attributes, className }) => {
  const {
    captions,
    gutter,
    gutterMobile,
    gutterTablet,
    linkTo,
    lightbox,
    rel,
    target,
    columnsize,
    customHeight,
    customWidth,
    images, // No longer using useMemo for memoizing images
    block_id
  } = attributes;

  const innerClasses = classnames(...GalleryClasses(attributes), {
    "has-gutter": gutter > 0,
    "has-lightbox": lightbox,
  });

  const masonryClasses = classnames({
    [`has-gutter-${gutter}`]: gutter > 0,
    [`has-gutter-mobile-${gutterMobile}`]: gutterMobile > 0,
    [`has-gutter-tablet-${gutterTablet}`]: gutterTablet > 0,
  });

  const masonryStyles = {
    ...GalleryStyles(attributes),
  };

  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  const appendClass = `block-${block_id}`;
  const outerClasses = classnames(
    className,
    appendClass
  );

  return (
      <div className={outerClasses}>
        <div className={innerClasses}>
          <Masonry
            className={masonryClasses}
            columnsCount={columnsize}
            style={masonryStyles}
          >
            {sortedImages.map((image, index) => {
              let href;

              switch (linkTo) {
                case "media":
                  href = image.url;
                  break;
                case "attachment":
                  href = image.link;
                  break;
              }

              // If an image has a custom link, override the linkTo selection.
              if (image.imgLink) {
                href = image.imgLink;
              }

              if (lightbox) {
                href = "";
              }

              const img = (
                <img
                  style={{ width: customWidth, height: customHeight }}
                  src={image.url}
                  alt={image.alt}
                  data-id={image.id}
                  data-imglink={image.imgLink}
                  data-link={image.link}
                  data-order={image.order !== undefined ? image.order : index}
                  className={image.id ? `wp-image-${image.id}` : null}
                />
              );

              return (
                <li
                  key={image.id || image.url}
                  className="responsive-block-editor-addons-gallery--item"
                >
                  <figure className="responsive-block-editor-addons-gallery--figure">
                    {href && linkTo === "custom" ? (
                      <a href={href} target={target} rel={rel}>
                        {img}
                      </a>
                    ) : (
                      img
                    )}
                    {captions && image.caption && image.caption.length > 0 && (
                      <RichText.Content
                        tagName="figcaption"
                        className="responsive-block-editor-addons-gallery--caption"
                        value={image.caption}
                      />
                    )}
                  </figure>
                </li>
              );
            })}
          </Masonry>
        </div>
      </div>
  );
};

export default save;
