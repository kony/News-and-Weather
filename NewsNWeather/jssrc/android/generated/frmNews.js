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
    }, {});
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
            "coverflowConfig": {
                "isCircular": true,
                "projectionAngle": 60
            }
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
        "dockSectionHeaders": false
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
        "textCopyable": false
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
    }, {});
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
    }, {});
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
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};