function initializeflexContainer15885142771() {
    flexContainer15885142771 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "15%",
        "id": "flexContainer15885142771",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexContainer15885142771.setDefaultUnit(kony.flex.DP);
    var imgNews = new kony.ui.Image2({
        "centerX": "12.81%",
        "centerY": "45.45%",
        "height": "85%",
        "id": "imgNews",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslImage08be8eaec7c0941",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 10],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblTitle = new kony.ui.Label({
        "height": "28%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "25%",
        "right": "7%",
        "skin": "CopyslLabel0cf9679339ab343",
        "text": "Label",
        "top": "0%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "pasteboardType": constants.PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var richTextDesc = new kony.ui.RichText({
        "height": "72.0%",
        "id": "richTextDesc",
        "isVisible": true,
        "left": "25%",
        "right": "8%",
        "skin": "CopyslRichText0fd39a122f53943",
        "text": "RichText",
        "top": "28.0%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContainer15885142771.add(
    imgNews, lblTitle, richTextDesc);
}