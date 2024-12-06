import { camelCase } from "lodash";
import { sprintf } from "@wordpress/i18n";
import fontOptions from "../../utils/googlefonts";
import { loadGoogleFont } from "../../utils/font";
import RbeaRangeControl from "../../utils/components/rbea-range-control";
import RbeaColorControl from "../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../utils/components/rbea-tab-radio-control";
import textDecorationIcons from "./text-decoration-icons";

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody, Dashicon, TabPanel } = wp.components;


// Extend component
const { Component, Fragment } = wp.element;
import "./editor.scss";

const TypographyHelperControl = (props) => {
    const getAttrName = attrName => camelCase(sprintf(props.attrNameTemplate, attrName));
    var advancedControls;
    advancedControls = (
        <TypographyControl
            title={props.attrNameTemplate}
            showColorControlTab={false}
            showColorWithHoverControlTab={false}
            onChangeFontSizeMobile={value => props.setAttributes({ [getAttrName('FontSizeMobile')]: value })}
            onChangeFontSizeTablet={value => props.setAttributes({ [getAttrName('FontSizeTablet')]: value })}
            onChangeFontSize={value => props.setAttributes({ [getAttrName('FontSize')]: value })}
            onChangeBottomSpacing={value => props.setAttributes({ [getAttrName('BottomSpacing')]: value })}
            onChangeBottomSpacingMobile={value => props.setAttributes({ [getAttrName('BottomSpacingMobile')]: value })}
            onChangeBottomSpacingTablet={value => props.setAttributes({ [getAttrName('BottomSpacingTablet')]: value })}
            onChangeTypographyColor={value => props.setAttributes({ [getAttrName('TypographyColor')]: value })}
            onChangeFontFamily={value => props.setAttributes({ [getAttrName('FontFamily')]: value })}
            onChangeFontWeight={value => props.setAttributes({ [getAttrName('FontWeight')]: value })}
            onChangeLineHeight={value => props.setAttributes({ [getAttrName('LineHeight')]: value })}
            onChangeLetterSpacing={value => props.setAttributes({ [getAttrName('LetterSpacing')]: value })}
            onChangeTextTransform={value => props.setAttributes({ [getAttrName('TextTransform')]: value })}
            onChangeTextDecoration={value => props.setAttributes({ [getAttrName('TextDecoration')]: value })}
            onChangeTextColor={value => props.setAttributes({ [getAttrName['Color']]: value })}
            {...props}
        />
    );


    return (
        <div className="responsive-block-editor-addons-typography-settings">
            {advancedControls}
        </div>
    );
}
class TypographyControl extends Component {
    constructor() {
        super(...arguments);
    }

    render() {

        // Font Weight Options
        const fontWeightOptions = [
            {
                value: "100",
                label: __("100", "responsive-block-editor-addons"),
            },
            {
                value: "200",
                label: __("200", "responsive-block-editor-addons"),
            },
            {
                value: "300",
                label: __("300", "responsive-block-editor-addons"),
            },
            {
                value: "400",
                label: __("400", "responsive-block-editor-addons"),
            },
            {
                value: "500",
                label: __("500", "responsive-block-editor-addons"),
            },
            {
                value: "600",
                label: __("600", "responsive-block-editor-addons"),
            },
            {
                value: "700",
                label: __("700", "responsive-block-editor-addons"),
            },
            {
                value: "800",
                label: __("800", "responsive-block-editor-addons"),
            },
            {
                value: "900",
                label: __("900", "responsive-block-editor-addons"),
            },
        ];
        const textTransformOptions = [
            {
                value: "uppercase",
                label: __("HEADING", "responsive-block-editor-addons"),
            },
            {
                value: "lowercase",
                label: __("heading", "responsive-block-editor-addons"),
            },
            {
                value: "capitalize",
                label: __("Heading", "responsive-block-editor-addons"),
            },
        ];

        // Text Decoration Options
        const textDecorationOptions = [
            {
                value: "underline",
                label: __("Underline", "responsive-block-editor-addons"),
                icon: textDecorationIcons.underline,
            },
            {
                value: "overline",
                label: __("Overline", "responsive-block-editor-addons"),
                icon: textDecorationIcons.overline,
            },
            {
                value: "line-through",
                label: __("Line Through", "responsive-block-editor-addons"),
                icon: textDecorationIcons.line_through,
            },
        ];

        var advancedControls;
        advancedControls = (
            <PanelBody
                title={this.props.title}
                initialOpen={false}
            >
                <Fragment>
                    {(this.props.showColorControl == true || this.props.showColorControlTab == true) && (
                        <RbeaColorControl
                            label={__("Content Color", "responsive-block-editor-addons")}
                            colorValue={this.props.values.color}
                            onChange={this.props.onChangeTypographyColor}
                            resetColor={() => setAttributes({ [this.props.values.color]: "" })}
                        />
                    )}
                    <SelectControl
                        label={__("Font Family", "responsive-block-editor-addons")}
                        options={fontOptions}
                        value={this.props.values.family}
                        onChange={this.props.onChangeFontFamily}
                    />
                    <TabPanel
                        className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "desktop",
                                title: <Dashicon icon="desktop" />,
                                className:
                                    " responsive-desktop-tab  responsive-responsive-tabs",
                            },
                            {
                                name: "tablet",
                                title: <Dashicon icon="tablet" />,
                                className:
                                    " responsive-tablet-tab  responsive-responsive-tabs",
                            },
                            {
                                name: "mobile",
                                title: <Dashicon icon="smartphone" />,
                                className:
                                    " responsive-mobile-tab  responsive-responsive-tabs",
                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;

                            if ("mobile" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <RbeaRangeControl
                                            label={__(
                                                "Font Size",
                                                "responsive-block-editor-addons"
                                            )}
                                            min={0}
                                            max={500}
                                            value={this.props.values.sizeMobile}
                                            onChange={this.props.onChangeFontSizeMobile}
                                        />
                                    </Fragment>
                                );
                            } else if ("tablet" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <RbeaRangeControl
                                            label={__(
                                                "Font Size",
                                                "responsive-block-editor-addons"
                                            )}
                                            min={0}
                                            max={500}
                                            value={this.props.values.sizeTablet}
                                            onChange={this.props.onChangeFontSizeTablet}
                                        />
                                    </Fragment>
                                );
                            } else {
                                tabout = (
                                    <Fragment>
                                        <RbeaRangeControl
                                            label={__(
                                                "Font Size",
                                                "responsive-block-editor-addons"
                                            )}
                                            min={0}
                                            max={500}
                                            value={this.props.values.size}
                                            onChange={this.props.onChangeFontSize}
                                        />
                                    </Fragment>
                                );
                            }

                            return <div>{tabout}</div>;
                        }}
                    </TabPanel>
                    <SelectControl
                        label={__("Font Weight", "responsive-block-editor-addons")}
                        options={fontWeightOptions}
                        value={this.props.values.weight}
                        onChange={this.props.onChangeFontWeight}
                    />
                    <RbeaRangeControl
                        label={__("Line Height", "responsive-block-editor-addons")}
                        value={this.props.values.height}
                        onChange={this.props.onChangeLineHeight}
                        min={0}
                        max={100}
                        step={0.0001}
                        allowReset
                    />
                    {this.props.showLetterSpacing == true && (
                        <RbeaRangeControl
                            label={__("Letter Spacing", "responsive-block-editor-addons")}
                            value={this.props.values.spacing}
                            onChange={this.props.onChangeLetterSpacing}
                            min={0}
                            max={10}
                            step={0.1}
                        />
                    )
                    }
                    {this.props.showTextTransform == true && (
                        <RbeaTabRadioControl
                            label={__("Text Transform", "responsive-block-editor-addons")}
                            value={this.props.values.transform}
                            onChange={this.props.onChangeTextTransform}
                            options={textTransformOptions}
                        />
                    )
                    }
                    {this.props.showTextDecoration == true && (
                        <RbeaTabRadioControl
                            label={__(
                                "Text Decoration",
                                "responsive-block-editor-addons"
                            )}
                            options={textDecorationOptions}
                            value={this.props.values.textDecoration}
                            onChange={this.props.onChangeTextDecoration}
                            hasIcon={true}
                            optionHasBorder={true}
                        />
                    )}
                    {this.props.showTextBottomSpacing == true && (
                        <TabPanel
                            className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "desktop",
                                    title: <Dashicon icon="desktop" />,
                                    className:
                                        " responsive-desktop-tab  responsive-responsive-tabs",
                                },
                                {
                                    name: "tablet",
                                    title: <Dashicon icon="tablet" />,
                                    className:
                                        " responsive-tablet-tab  responsive-responsive-tabs",
                                },
                                {
                                    name: "mobile",
                                    title: <Dashicon icon="smartphone" />,
                                    className:
                                        " responsive-mobile-tab  responsive-responsive-tabs",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;

                                if ("mobile" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <RbeaRangeControl
                                                label={__(
                                                    "Bottom Spacing",
                                                    "responsive-block-editor-addons"
                                                )}
                                                min={0}
                                                max={500}
                                                value={this.props.values.bottomSpacingMobile}
                                                onChange={this.props.onChangeBottomSpacingMobile}
                                            />
                                        </Fragment>
                                    );
                                } else if ("tablet" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            <RbeaRangeControl
                                                label={__(
                                                    "Bottom Spacing",
                                                    "responsive-block-editor-addons"
                                                )}
                                                min={0}
                                                max={500}
                                                value={this.props.values.bottomSpacingTablet}
                                                onChange={this.props.onChangeBottomSpacingTablet}
                                            />
                                        </Fragment>
                                    );
                                } else {
                                    tabout = (
                                        <Fragment>
                                            <RbeaRangeControl
                                                label={__(
                                                    "Bottom Spacing",
                                                    "responsive-block-editor-addons"
                                                )}
                                                min={0}
                                                max={500}
                                                value={this.props.values.bottomSpacing}
                                                onChange={this.props.onChangeBottomSpacing}
                                            />
                                        </Fragment>
                                    );
                                }
                                return <div>{tabout}</div>;
                            }}
                        </TabPanel>
                    )
                    }
                </Fragment>
            </PanelBody>
        );


        return (
            <div className="responsive-block-editor-addons-typography-settings">
                {advancedControls}
            </div>
        );
    }
}

export default TypographyHelperControl;
