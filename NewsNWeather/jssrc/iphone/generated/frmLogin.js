function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var FlexContainer032c82512e8644c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer032c82512e8644c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "right": "4%",
        "skin": "CopyslFbox05180010d309949",
        "top": "39%",
        "zIndex": 1
    }, {}, {});
    FlexContainer032c82512e8644c.setDefaultUnit(kony.flex.DP);
    var Label0064ac6611f674c = new kony.ui.Label({
        "height": "70%",
        "id": "Label0064ac6611f674c",
        "isVisible": true,
        "left": "16%",
        "skin": "CopyslLabel01fdafaf5acf04a",
        "top": "15%",
        "width": "2px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "pasteboardType": constants.PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxUserName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtBoxUserName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "17%",
        "placeholder": "Email Address",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0d2c58ab453e547",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "83%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Image02f90233e7cae4d = new kony.ui.Image2({
        "height": "50%",
        "id": "Image02f90233e7cae4d",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "user_icon.png",
        "top": "25%",
        "width": "12%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    FlexContainer032c82512e8644c.add(
    Label0064ac6611f674c, txtBoxUserName, Image02f90233e7cae4d);
    var CopyFlexContainer01ad200c89c3d48 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFlexContainer01ad200c89c3d48",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "right": "4%",
        "skin": "CopyslFbox05180010d309949",
        "top": "51%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer01ad200c89c3d48.setDefaultUnit(kony.flex.DP);
    var CopyLabel039580db47fbd4d = new kony.ui.Label({
        "height": "70%",
        "id": "CopyLabel039580db47fbd4d",
        "isVisible": true,
        "left": "16%",
        "skin": "CopyslLabel01fdafaf5acf04a",
        "top": "15%",
        "width": "2px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "pasteboardType": constants.PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtBoxPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "17%",
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0d2c58ab453e547",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "83%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonRequired": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyImage0af066160e23940 = new kony.ui.Image2({
        "height": "50%",
        "id": "CopyImage0af066160e23940",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "login_pass_icon.png",
        "top": "25%",
        "width": "12%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    CopyFlexContainer01ad200c89c3d48.add(
    CopyLabel039580db47fbd4d, txtBoxPassword, CopyImage0af066160e23940);
    var Button0f90174f2e6c441 = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue02096ba0a10044a",
        "height": "50dp",
        "id": "Button0f90174f2e6c441",
        "isVisible": true,
        "left": "4%",
        "onClick": AS_Button_cb408411a357401598922fcab306bd29,
        "right": "5%",
        "skin": "CopyslButtonGlossBlue02096ba0a10044a",
        "text": "Login",
        "top": "76.55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var chkBoxRemeber = new kony.ui.CheckBoxGroup({
        "height": "10%",
        "id": "chkBoxRemeber",
        "isVisible": true,
        "left": "3.69%",
        "masterData": [
            ["cbg1", "Remember Me"]
        ],
        "right": "-1%",
        "skin": "CopyslCheckBoxGroup0448053d6a8dd49",
        "top": "62.41%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    frmLogin.add(
    FlexContainer032c82512e8644c, CopyFlexContainer01ad200c89c3d48, Button0f90174f2e6c441, chkBoxRemeber);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "CopyslForm098010c034e5f4d",
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
    frmLogin.info = {
        "kuid": "aa8f5a29a9e14562b45df5374ad7f454"
    };
};