import classnames from "classnames";
import attributes from "../attributes";
import DeprecatedAdvancedColumnsSave from "./deprecated-advanced-column";

const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

const deprecated = [
    {
        attributes,
        supports: {
            align: ["wide", "full"],
        },
        migrate: function( attributes, innerBlocks ) {
            return [
                attributes,
                innerBlocks,
            ];
        },
        save: function (props) {
            const {
                setAttributes,
            } = props;

            return (
                <DeprecatedAdvancedColumnsSave {...props} />
            )
        },
    },
    {
        attributes,
        save: function (props) {
            // Setup the attributes
            const {
                attributes: {
                    columns,
                    columnGap,
                    contentWidth,
                    stack,
                    overlayType,
                    gradientOverlayType,
                    block_id,
                    align,
                    backgroundType,
                },
                setAttributes,
            } = props;

            return (
                <div
                    className={classnames(
                        backgroundType == "image" ? "background-type-image" : "",
                        `block-${block_id}`,
                        "responsive-block-editor-addons-advanced-column-outer-wrap",
                        `${align}`
                    )}
                >
                    <div
                        className={classnames(
                            "responsive-block-editor-addons-advanced-column",
                            `align${align}`
                        )}
                    >
                        <div
                            className={classnames(
                                "responsive-columns-wrap",
                                "responsive-block-editor-addons-block-columns",
                                `responsive-columns__gap-${columnGap}`,
                                `responsive-columns__stack-${stack}`,
                                `responsive-columns__content-width-${contentWidth}`,
                                `overlay-type-${overlayType}`,
                                `${gradientOverlayType}`
                            )}
                        >
                            <div
                                className={classnames(
                                    "responsive-columns-inner-wrap",
                                    `responsive-columns-columns-${columns}`
                                )}
                            >
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
    },

];

export default deprecated;
