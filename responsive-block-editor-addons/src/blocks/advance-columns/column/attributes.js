const attributes = {
    width: {
        type: "number",
    },
    topPadding: {
        type: "number",
    },
    bottomPadding: {
        type: "number",
    },
    leftPadding: {
        type: "number",
    },
    rightPadding: {
        type: "number",
    },
    leftMargin: {
        type: "number",
    },
    rightMargin: {
        type: "number",
    },
    topMargin: {
        type: "number",
    },
    bottomMargin: {
        type: "number",
    },
    topPaddingTablet: {
        type: "number",
    },
    bottomPaddingTablet: {
        type: "number",
    },
    leftPaddingTablet: {
        type: "number",
    },
    rightPaddingTablet: {
        type: "number",
    },
    leftMarginTablet: {
        type: "number",
    },
    rightMarginTablet: {
        type: "number",
    },
    topMarginTablet: {
        type: "number",
    },
    bottomMarginTablet: {
        type: "number",
    },
    topPaddingMobile: {
        type: "number",
    },
    bottomPaddingMobile: {
        type: "number",
    },
    leftPaddingMobile: {
        type: "number",
    },
    rightPaddingMobile: {
        type: "number",
    },
    leftMarginMobile: {
        type: "number",
    },
    rightMarginMobile: {
        type: "number",
    },
    topMarginMobile: {
        type: "number",
    },
    bottomMarginMobile: {
        type: "number",
    },
    block_id: {
        type: "string",
    },
    blockBorderStyle: {
        type: "string",
        default: "none",
    },
    blockBorderWidth: {
        type: "number",
        default: 1,
    },
    blockBorderRadius: {
        type: "number",
    },
    blockTopRadius: {
        type: "number",
        default: 0,
    },
    blockRightRadius: {
        type: "number",
        default: 0,
    },
    blockBottomRadius: {
        type: "number",
        default: 0,
    },
    blockLeftRadius: {
        type: "number",
        default: 0,
    },
    blockTopRadiusTablet: {
        type: "number",
        default: 0,
    },
    blockRightRadiusTablet: {
        type: "number",
        default: 0,
    },
    blockBottomRadiusTablet: {
        type: "number",
        default: 0,
    },
    blockLeftRadiusTablet: {
        type: "number",
        default: 0,
    },
    blockTopRadiusMobile: {
        type: "number",
        default: 0,
    },
    blockRightRadiusMobile: {
        type: "number",
        default: 0,
    },
    blockBottomRadiusMobile: {
        type: "number",
        default: 0,
    },
    blockLeftRadiusMobile: {
        type: "number",
        default: 0,
    },
    blockIsRadiusControlConnected: {
        type: "boolean",
        default: false,
    },
    blockIsRadiusValueUpdated: {
        type: "boolean",
        default: false,
    },
    blockBorderColor: {
        type: "string",
    },
    boxShadowColor: {
        type: "string",
    },
    boxShadowHOffset: {
        type: "number",
        default: 0,
    },
    boxShadowVOffset: {
        type: "number",
        default: 0,
    },
    boxShadowBlur: {
        type: "number",
        default: 0,
    },
    boxShadowSpread: {
        type: "number",
        default: 0,
    },
    boxShadowPosition: {
        type: "string",
        default: "outset",
    },
    hoverboxShadowColor: {
        type: "string",
    },
    hoverboxShadowHOffset: {
        type: "number",
        default: 0,
    },
    hoverboxShadowVOffset: {
        type: "number",
        default: 0,
    },
    hoverboxShadowBlur: {
        type: "number",
        default: 6,
    },
    hoverboxShadowSpread: {
        type: "number",
        default: 1,
    },
    hoverboxShadowPosition: {
        type: "string",
        default: "outset",
    },
    opacity: {
        type: "number",
        default: 20,
    },
    colorLocation1: {
        type: "number",
        default: 0,
    },
    colorLocation2: {
        type: "number",
        default: 100,
    },
    gradientDirection: {
        type: "number",
        default: 90,
    },
    hovercolorLocation1: {
        type: "number",
        default: 0,
    },
    hovercolorLocation2: {
        type: "number",
        default: 100,
    },
    hovergradientDirection: {
        type: "number",
        default: 90,
    },
    backgroundImage: {
        type: "string",
        default: '',
    },
    backgroundImagePosition: {
        type: "string",
        default: "center center",
    },
    backgroundImageSize: {
        type: "string",
        default: "cover",
    },
    backgroundImageRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundAttachment: {
        type: "string",
        default: "scroll",
    },
    backgroundHoverImage: {
        type: "string",
    },
    backgroundImageHoverPosition: {
        type: "string",
    },
    backgroundImageHoverAttachment: {
        type: "string",
    },
    backgroundImageHoverSize: {
        type: "string",
    },
    backgroundImageHoverRepeat: {
        type: "string",
    },
    backgroundImageHoverRepeat: {
        type: "string",
    },
    backgroundImageColor: {
        type: "string",
    },
    overlayType: {
        type: "string",
        default: "color",
    },
    gradientOverlayColor1: {
        type: "string",
    },
    gradientOverlayColor2: {
        type: "string",
    },
    gradientOverlayType: {
        type: "string",
        default: "linear",
    },
    gradientOverlayLocation1: {
        type: "number",
        default: 0,
    },
    gradientOverlayLocation2: {
        type: "number",
        default: 100,
    },
    gradientOverlayAngle: {
        type: "number",
        default: 0,
    },
    gradientOverlayPosition: {
        type: "string",
        default: "center center",
    },
    backgroundType: {
        type: "string",
    },
    backgroundColor: {
        type: "string",
    },
    backgroundColorHover: {
        type: "string",
        default: " ",
    },
    backgroundColor1: {
        type: "string",
    },
    backgroundColor2: {
        type: "string",
        default: "#fff",
    },
    hoverbackgroundColor1: {
        type: "string",
    },
    hoverbackgroundColor2: {
        type: "string",
        default: "#fff",
    },
    backgroundPosition: {
        type: "string",
        default: "empty",
    }, // For compatibility with v1.3.2.
    backgroundRepeat: {
        type: "string",
        default: "empty",
    }, // For compatibility with v1.3.2.
    backgroundSize: {
        type: "string",
        default: "empty",
    }, // For compatibility with v1.3.2.
    columnTopPadding: {
        type: "number",
        default: 0,
    },
    columnRightPadding: {
        type: "number",
        default: 0,
    },
    columnBottomPadding: {
        type: "number",
        default: 0,
    },
    columnLeftPadding: {
        type: "number",
        default: 0,
    },
    columnTopPaddingTablet: {
        type: "number",
        default: 0,
    },
    columnRightPaddingTablet: {
        type: "number",
        default: 0,
    },
    columnBottomPaddingTablet: {
        type: "number",
        default: 0,
    },
    columnLeftPaddingTablet: {
        type: "number",
        default: 0,
    },
    columnTopPaddingMobile: {
        type: "number",
        default: 0,
    },
    columnRightPaddingMobile: {
        type: "number",
        default: 0,
    },
    columnBottomPaddingMobile: {
        type: "number",
        default: 0,
    },
    columnLeftPaddingMobile: {
        type: "number",
        default: 0,
    },
    columnIsPaddingControlConnected: {
        type: "boolean",
        default: false,
    },

    columnTopMargin: {
        type: "number",
        default: 0,
    },
    columnRightMargin: {
        type: "number",
        default: 0,
    },
    columnBottomMargin: {
        type: "number",
        default: 0,
    },
    columnLeftMargin: {
        type: "number",
        default: 0,
    },
    columnTopMarginTablet: {
        type: "number",
        default: 0,
    },
    columnRightMarginTablet: {
        type: "number",
        default: 0,
    },
    columnBottomMarginTablet: {
        type: "number",
        default: 0,
    },
    columnLeftMarginTablet: {
        type: "number",
        default: 0,
    },
    columnTopMarginMobile: {
        type: "number",
        default: 0,
    },
    columnRightMarginMobile: {
        type: "number",
        default: 0,
    },
    columnBottomMarginMobile: {
        type: "number",
        default: 0,
    },
    columnLeftMarginMobile: {
        type: "number",
        default: 0,
    },
    columnIsMarginControlConnected: {
        type: "boolean",
        default: false,
    },
    newSpacingValuesUpdated: {
        type: "boolean",
        default: false,
    },
};

export default attributes;