function initializetempLocalNews() {
    flxLocalNews = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "CopyslFbox02fb6207bba9e4b",
        "height": "66dp",
        "id": "flxLocalNews",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0343cf52988f942"
    }, {}, {});
    flxLocalNews.setDefaultUnit(kony.flex.DP);
    var imgNews = new kony.ui.Image2({
        "id": "imgNews",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "20%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {});
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "left": "21%",
        "skin": "CopyslLabel0ea9a1e0f50d54c",
        "text": "Migrants die as boat sinks off Turkey ...",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0px",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var richTextDesc = new kony.ui.RichText({
        "id": "richTextDesc",
        "isVisible": true,
        "left": "21%",
        "skin": "CopyslRichText0532f1151b50648",
        "text": "At least 24 migrants have died off the Turkish coast trying to reach the Greek island of Lesbos, Turkish media say.",
        "top": "61px",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLocalNews.add(
    imgNews, lblTitle, richTextDesc);
}