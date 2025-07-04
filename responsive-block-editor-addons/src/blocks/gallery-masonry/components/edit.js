/**
 * External dependencies
 */
import classnames from "classnames";
import filter from "lodash/filter";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import EditorStyles from "./editor-styles";

/**
 * Internal dependencies
 */
import { icon } from "./icon";
import Inspector from "./inspector";
import GalleryImage from "../../../utils/components/block-gallery/gallery-image";
import GalleryPlaceholder from "../../../utils/components/block-gallery/gallery-placeholder";
import { GalleryClasses } from "../../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { withNotices } from "@wordpress/components";

/**
 * Block consts
 */
const masonryOptions = {
  transitionDuration: 0,
  percentPosition: true,
};

class GalleryMasonryEdit extends Component {
  constructor() {
    super(...arguments);

    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onMoveForward = this.onMoveForward.bind(this);
    this.onMoveBackward = this.onMoveBackward.bind(this);
    this.setImageAttributes = this.setImageAttributes.bind(this);
    this.state = {
      selectedImage: null,
      migrationDone: true, // Add a state variable to track migration
    };
  }

  componentDidMount() {
    if (
      this.props.wideControlsEnabled === true &&
      !this.props.attributes.align 
    ) {
      this.props.setAttributes({
        align: "",
      });
    }
    if (!this.state.migrationDone) {
      this.handleSizeMigration(this.props.attributes.gridSize);
      // Update the state to indicate that migration has been done
      this.setState({
        migrationDone: true,
      });
    }
     // Assigning block_id in the attribute.
     this.props.setAttributes({ block_id: this.props.clientId });
 
     // Pushing Style tag for this block css.
     const $style = document.createElement("style");
     $style.setAttribute(
       "id",
       "responsive-block-editor-addons-advanced-gallery-masonry-style-" +
         this.props.clientId
     );
     document.head.appendChild($style);

     const images = this.props.attributes.images;

     if (images && images.length > 0) {
      const sortedImages = [...images].sort((a, b) => a.order - b.order);
      // Only update if order was wrong.
      if (!this.isSorted(images)) {
        this.props.setAttributes({ images: sortedImages });
      }
    }
  }

  isSorted(images) {
    for (let i = 1; i < images.length; i++) {
      if (images[i-1].order > images[i].order) {
        return false;
      }
    }
    return true;
  }

  componentDidUpdate(prevProps) {
    // Deselect images when deselecting the block.
    if (!this.props.isSelected && prevProps.isSelected) {
      this.setState({
        selectedImage: null,
        captionSelected: false,
      });
    }
  }

  onSelectImage(index) {
    // console.log( 'onSelectImage', index );
    return () => {
      if (this.state.selectedImage !== index) {
        this.setState({
          selectedImage: index,
        });
      }
    };
  }

  onMove(oldIndex, newIndex) {
    const images = [...this.props.attributes.images];
    
    // Get the image being moved
    const movedImage = images[oldIndex];
    
    // Remove from old position
    images.splice(oldIndex, 1);
    
    // Insert at new position
    images.splice(newIndex, 0, movedImage);
    
    // Update order properties for all images
    const updatedImages = images.map((img, index) => ({
      ...img,
      order: index // Reset order to match new position
    }));
    
    this.setState({ selectedImage: newIndex });
    this.props.setAttributes({ images: updatedImages });
  }

  onMoveForward(oldIndex) {
    return () => {
      if (oldIndex === this.props.attributes.images.length - 1) {
        return;
      }
      this.onMove(oldIndex, oldIndex + 1);
    };
  }

  onMoveBackward(oldIndex) {
    return () => {
      if (oldIndex === 0) {
        return;
      }
      this.onMove(oldIndex, oldIndex - 1);
    };
  }

  onRemoveImage(index) {
    return () => {
      const images = filter(
        this.props.attributes.images,
        (_img, i) => index !== i
      )
      .map((img, newIndex) => ({
        ...img,
        order: newIndex // Reassign order after removal.
      }));
      
      this.setState({ selectedImage: null });
      this.props.setAttributes({ images });
    };
  }

  setImageAttributes(index, attributes) {
    const {
      attributes: { images },
      setAttributes,
    } = this.props;
    if (!images[index]) {
      return;
    }
    setAttributes({
      images: [
        ...images.slice(0, index),
        {
          ...images[index],
          ...attributes,
        },
        ...images.slice(index + 1),
      ],
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.attributes.gutter <= 0) {
      this.props.setAttributes({
        radius: 0,
      });
    }
    var element = document.getElementById(
      "responsive-block-editor-addons-advanced-gallery-masonry-style-" +
        this.props.clientId
    );
  
    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }
  handleSizeMigration(size) {
    // Map old size options to columnsize
    if (size === 'lrg' ) {
      this.setNumberOfColumns(2);
    } else if (size === 'xlrg') {
      this.setNumberOfColumns(3);
    }
  }
  setNumberOfColumns(value) {
    this.setState({ columns: value });
    this.props.setAttributes({ columnsize: value });
  }
  render() {
    const {
      attributes,
      className,
      editorSidebarOpened,
      isSelected,
      noticeUI,
      pluginSidebarOpened,
      publishSidebarOpened,
    } = this.props;

    const {
      align,
      captions,
      gutter,
      gutterMobile,
      gutterTablet,
      images,
      linkTo,
      lightbox,
      columnsize,
      customHeight,
      customWidth,
      block_id,
    } = attributes;
    const hasImages = !!images.length;

    const sidebarIsOpened =
      editorSidebarOpened || pluginSidebarOpened || publishSidebarOpened;

    const innerClasses = classnames(
      ...GalleryClasses(attributes),
      sidebarIsOpened,
      {
        [`align${align}`]: align,
        "has-gutter": gutter > 0,
        "has-lightbox": lightbox,
        [`link-type-${linkTo}`]: linkTo && !lightbox,
      }
    );

    const masonryClasses = classnames( {
      [`has-gutter-${gutter}`]: gutter > 0,
      [`has-gutter-null`]: gutter === 0,
      [`has-gutter-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-gutter-tablet-${gutterTablet}`]: gutterTablet > 0,
    });

    const masonryGalleryPlaceholder = (
      <Fragment>
        {!hasImages ? noticeUI : null}
        <GalleryPlaceholder
          {...this.props}
          label={__("Image", "responsive-block-editor-addons")}
          icon={icon}
          gutter={gutter}
        />
      </Fragment>
    );

    if (!hasImages) {
      return masonryGalleryPlaceholder;
    }

    const appendClass = `block-${block_id}`
    const outerClasses = classnames(
      className,
      appendClass
    )
  const sortedImages = [...images].sort((a, b) => a.order - b.order);
    return (
      <Fragment key="div-block" >
        <style id={`responsive-block-editor-addons-advanced-gallery-masonry-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        {isSelected && <Inspector {...this.props} />}
        {noticeUI}
        <div className={outerClasses}>
          <div className={innerClasses}>
          <Masonry
              className={masonryClasses}
              columnsCount={columnsize}
            >

              {sortedImages.map((img, index) => {
                const ariaLabel = sprintf(
                  /* translators: %1$d is the order number of the image, %2$d is the total number of sortedImages */
                  __(
                    "image %1$d of %2$d in gallery",
                    "responsive-block-editor-addons"
                  ),
                  index + 1,
                  sortedImages.length
                );

                return (
                  <li
                  key={`img-${img.id}`}
                    className="responsive-block-editor-addons-gallery--item"
                    
                  >
                    <GalleryImage
                    key={`img-${img.id}`}
                  caption={img.caption}
                  lightbox={lightbox}
                  url={img.url}
                      alt={img.alt}
                      id={img.id}
                      imgLink={img.imgLink}
                      linkTo={linkTo}
                      isFirstItem={index === 0}
                      isLastItem={index + 1 === sortedImages.length}
                      isSelected={
                        isSelected && this.state.selectedImage === index
                      }
                      onMoveBackward={this.onMoveBackward(index)}
                      onMoveForward={this.onMoveForward(index)}
                      onRemove={this.onRemoveImage(index)}
                      onSelect={this.onSelectImage(index)}
                      setAttributes={(attrs) =>
                        this.setImageAttributes(index, attrs)
                      }

                      aria-label={ariaLabel}
                      captions={captions}
                      supportsCaption={true}
                      customHeight={customHeight}  
                      customWidth={customWidth}
                    />
                  </li>
                );
              })}
            </Masonry>
          </div>
          {masonryGalleryPlaceholder}
        </div>
      </Fragment>
    );
  }
}

export default compose([
  withSelect((select) => ({
    editorSidebarOpened: select("core/edit-post").isEditorSidebarOpened(),
    pluginSidebarOpened: select("core/edit-post").isPluginSidebarOpened(),
    publishSidebarOpened: select("core/edit-post").isPublishSidebarOpened(),
    wideControlsEnabled: select("core/editor").getEditorSettings().alignWide,
  })),
  withNotices,
])(GalleryMasonryEdit);
