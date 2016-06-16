function addWidgetsfrmBrowser() {
    frmBrowser.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "height": "7%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0%",
        "skin": "CopysknLblKonyThemeTitle07688a2990a8d45",
        "text": "News",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var browserNews = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "height": "93%",
        "id": "browserNews",
        "isVisible": true,
        "left": "0%",
        "text": "Browser",
        "top": "7%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    var btnBack = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "5%",
        "id": "btnBack",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_8ab4d11d9014430c89b90cc0c95722cf,
        "skin": "CopysknKonyThemeMenuButton0ead636ba3b674c",
        "top": "1%",
        "width": "8%",
        "zIndex": 5
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
        "onClick": AS_Button_d3a21809c23144c2aa25bc5db05df295,
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
    frmBrowser.add(
    lblTitle, browserNews, btnBack, Button09883d4a5c77342);
};

function frmBrowserGlobals() {
    frmBrowser = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowser,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmBrowser",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "CopyslForm00e7d4b145dd848",
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
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmBrowser.info = {
        "notesId": "9a0ef5c3353349929f74ebc187242e33",
        "kuid": "9a0ef5c3353349929f74ebc187242e33"
    };
};