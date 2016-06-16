function addWidgetsfrmNews() {
    frmNews.setDefaultUnit(kony.flex.DP);
    var flexMenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flexMenuContainer.setDefaultUnit(kony.flex.DP);
    var SegNewsOptions = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "Label026fe6344457c4d": "Top Stories"
        }, {
            "Label026fe6344457c4d": "World"
        }, {
            "Label026fe6344457c4d": "U.S."
        }, {
            "Label026fe6344457c4d": "Business"
        }, {
            "Label026fe6344457c4d": "Technology"
        }, {
            "Label026fe6344457c4d": "Entertainment"
        }, {
            "Label026fe6344457c4d": "Sports"
        }, {
            "Label026fe6344457c4d": "Science"
        }, {
            "Label026fe6344457c4d": "Health"
        }, {
            "Label026fe6344457c4d": "Local"
        }],
        "groupCells": false,
        "id": "SegNewsOptions",
        "isVisible": true,
        "left": "5%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_b3f9ec99700e4fc99bbbfab9abe13cce,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFBox005bd0cb50d4044,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "7%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Label026fe6344457c4d": "Label026fe6344457c4d"
        },
        "width": "95%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    flexMenuContainer.add(
    SegNewsOptions);
    var flexNewsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "93%",
        "id": "flexNewsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0cc9f892b7bb142",
        "top": "7%",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    flexNewsContainer.setDefaultUnit(kony.flex.DP);
    var segmentNews = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgNews": "imagedrag.png",
            "lblTitle": "Migrants die as boat sinks off Turkey ...",
            "richTextDesc": "At least 24 migrants have died off the Turkish coast trying to reach the Greek island of Lesbos, Turkish media say."
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segmentNews",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_b85eadc5f5bb42f9887691a50c215eab,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxLocalNews,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewConfig": {
            "coverflowConfig": {}
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxLocalNews": "flxLocalNews",
            "imgNews": "imgNews",
            "lblTitle": "lblTitle",
            "richTextDesc": "richTextDesc"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    flexNewsContainer.add(
    segmentNews);
    var lblFrmNewsTitle = new kony.ui.Label({
        "height": "7.0%",
        "id": "lblFrmNewsTitle",
        "isVisible": true,
        "left": "0.0%",
        "skin": "CopysknLblKonyThemeTitle0e03339c387ae45",
        "text": "Title",
        "top": "0.0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "pasteboardType": constants.PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnMenu = new kony.ui.Button({
        "height": "3.0%",
        "id": "btnMenu",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_78bceff7184d42cb92cbb823c0709dde,
        "skin": "sknKonyThemeMenuButton",
        "top": "2.0%",
        "width": "6%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": false
    });
    var Button09883d4a5c77342 = new kony.ui.Button({
        "focusSkin": "slButtonGlossBlue",
        "height": "7%",
        "id": "Button09883d4a5c77342",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_b1c12d4408f948cc9f0a9a72e08bb8e5,
        "skin": "slButtonGlossBlue",
        "top": "0dp",
        "width": "13%",
        "zIndex": 20
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": false
    });
    frmNews.add(
    flexMenuContainer, flexNewsContainer, lblFrmNewsTitle, btnMenu, Button09883d4a5c77342);
};

function frmNewsGlobals() {
    frmNews = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNews,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmNews",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "sknKonyThemeFormNews",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "maxZoomScale": 1,
        "minZoomScale": 1,
        "needsIndicatorDuringPostShow": false,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "zoomScale": 1
    });
    frmNews.info = {
        "kuid": "1a5bbffa97404c958035782cad0d55b1"
    };
};