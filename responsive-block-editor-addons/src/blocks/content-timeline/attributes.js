const ITEM_COUNT = 5;
const { __ } = wp.i18n;
const items = [];
const date_arr = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  items.push({
    time_heading: __("Timeline Heading ", "responsive-block-editor-addons") + i,
    time_desc: __(
      "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
    ),
  });
  var j = i - 1;
  var today = new Date("1/1/2019");
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear() - j;

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = mm + "/" + dd + "/" + yyyy;
  var p = { title: today };

  date_arr.push({
    title: today,
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  timelinAlignment: {
    type: "string",
    default: "center",
  },
  timelineItems: {
    type: "array",
    default: items,
  },
  dateFormat: {
    type: "string",
    default: "F j, Y",
  },
  headingTag: {
    type: "string",
    default: "h4",
  },
  t_date: {
    type: "array",
    default: date_arr,
  },
  displayPostDate: {
    type: "boolean",
    default: true,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  dateBottomspace: {
    type: "number",
    default: 5,
  },
  itemBorderStyle: {
    type: "string",
    default: "none",
  },
  itemBorderColor: {
    type: "string",
  },
  itemBorderWidth: {
    type: "number",
    default: 1,
  },
  itemBorderRadius: {
    type: "number",
    default: 2,
  },
  itemTopRadius: {
    type: "number",
    default: 0,
  },
  itemRightRadius: {
    type: "number",
    default: 0,
  },
  itemBottomRadius: {
    type: "number",
    default: 0,
  },
  itemLeftRadius: {
    type: "number",
    default: 0,
  },
  itemTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  itemRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  itemBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  itemLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  itemTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  itemRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  itemBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  itemLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  itemIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  itemIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  itemPadding: {
    type: "number",
    default: 20,
  },
  horizontalSpace: {
    type: "number",
    default: 0,
  },
  verticalSpace: {
    type: "number",
    default: 15,
  },
  headingBottomMargin: {
    type: "number",
    default: 15,
  },
  horizontalSpaceMobile: {
    type: "number",
  },
  verticalSpaceMobile: {
    type: "number",
  },
  headingBottomMarginMobile: {
    type: "number",
  },
  horizontalSpaceTablet: {
    type: "number",
  },
  verticalSpaceTablet: {
    type: "number",
  },
  headingBottomMarginTablet: {
    type: "number",
  },
  dateLineHeight: {
    type: "number",
    default: 1,
  },
  contentFontFamily: {
    type: "string",
  },
  headingFontFamily: {
    type: "string",
  },
  dateFontFamily: {
    type: "string",
  },
  dateFontWeight: {
    type: "string",
    default: "400",
  },
  dateFontSize: {
    type: "number",
    default: 16,
  },
  headingLineHeight: {
    type: "number",
    default: 1,
  },
  headingFontWeight: {
    type: "string",
    default: "400",
  },
  headingFontSize: {
    type: "number",
    default: 20,
  },
  dateColor: {
    type: "string",
  },
  headingColor: {
    type: "string",
  },
  contentColor: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
    default: "#eee",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  contentLineHeight: {
    type: "number",
    default: 2,
  },
  contentFontSize: {
    type: "number",
    default: 16,
  },
  contentFontWeight: {
    type: "string",
    default: "400",
  },
  opacity: {
    type: "number",
    default: 100,
  },
  separatorColor: {
    type: "string",
    default: "#eee",
  },
  iconColor: {
    type: "string",
    default: "#333",
  },
  separatorBg: {
    type: "string",
    default: "#eee",
  },
  separatorBorder: {
    type: "string",
    default: "#eee",
  },
  separatorFillColor: {
    type: "string",
    default: "#61ce70",
  },
  iconFocus: {
    type: "string",
    default: "#fff",
  },
  iconBgFocus: {
    type: "string",
    default: "#61ce70",
  },
  borderFocus: {
    type: "string",
    default: "#5cb85c",
  },
  separatorwidth: {
    type: "number",
    default: 3,
  },
  borderwidth: {
    type: "number",
    default: 0,
  },
  connectorBgsize: {
    type: "number",
    default: 35,
  },
  iconSize: {
    type: "number",
    default: 20,
  },
  icon: {
    type: "string",
    default: "fa fa-calendar-alt",
  },
  stack: {
    type: "string",
    default: "mobile",
  },
  arrowlinAlignment: {
    type: "string",
    default: "center",
  },
  dateFontSizeMobile: {
	type: "number",
  },
  dateFontSizeTablet: {
	type: "number",
  },
  headingFontSizeMobile: {
	type: "number",
  },
  headingFontSizeTablet: {
	type: "number",
  },
  contentFontSizeMobile: {
	type: "number",
  },
  contentFontSizeTablet: {
	type: "number",
  },
  hideWidget: {
    type: "boolean",
    default: false,
  },
  hideWidgetTablet: {
    type: "boolean",
    default: false,
  },
  hideWidgetMobile: {
    type: "boolean",
    default: false,
  },
  z_index: {
    type: "number",
  },
  z_indexTablet: {
    type: "number",
  },
  z_indexMobile: {
    type: "number",
  },
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  blockTopPadding: {
    type: "number",
    default: '',
  },
  blockTopPaddingMobile: {
    type: "number",
    default: '',
  },
  blockTopPaddingTablet: {
    type: "number",
    default: '',
  },
  blockBottomPadding: {
    type: "number",
    default: '',
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  blockLeftPadding: {
    type: "number",
    default: '',
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  blockRightPadding: {
    type: "number",
    default: '',
  },
  blockRightPaddingMobile: {
    type: "number",
    default: '',
  },
  blockRightPaddingTablet: {
    type: "number",
    default: '',
  },
  blockTopMargin: {
    type: "number",
    default: '',
  },
  blockTopMarginMobile: {
    type: "number",
    default: '',
  },
  blockTopMarginTablet: {
    type: "number",
    default: '',
  },
  blockBottomMargin: {
    type: "number",
    default: '',
  },
  blockBottomMarginMobile: {
    type: "number",
    default: '',
  },
  blockBottomMarginTablet: {
    type: "number",
    default: '',
  },
  blockLeftMargin: {
    type: "number",
    default: '',
  },
  blockLeftMarginMobile: {
    type: "number",
    default: '',
  },
  blockLeftMarginTablet: {
    type: "number",
    default: '',
  },
  blockRightMargin: {
    type: "number",
    default: '',
  },
  blockRightMarginMobile: {
    type: "number",
    default: '',
  },
  blockRightMarginTablet: {
    type: "number",
    default: '',
  },
  blockIsTypographyColorValueUpdated: {
    type: "boolean",
    default: false,
  },
  contentTypographyColor: {
    type: "string",
    default: '',
  },
  headingTypographyColor: {
    type: "string",
    default: '',
  },
  dateTypographyColor: {
    type: "string",
    default: '',
  }
};
export default attributes;
