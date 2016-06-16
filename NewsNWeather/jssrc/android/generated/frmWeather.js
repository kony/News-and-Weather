function addWidgetsfrmWeather() {
    frmWeather.setDefaultUnit(kony.flex.DP);
    var frmLocalHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "frmLocalHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    frmLocalHeader.setDefaultUnit(kony.flex.DP);
    var lblLocalTitle = new kony.ui.Label({
        "height": "100%",
        "id": "lblLocalTitle",
        "isVisible": true,
        "left": "40%",
        "skin": "sknLblKonyThemeTitle",
        "text": "Local",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Button09883d4a5c77342 = new kony.ui.Button({
        "bottom": "10%",
        "focusSkin": "slButtonGlossBlue",
        "height": "50%",
        "id": "Button09883d4a5c77342",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslButtonGlossBlue0d4c4b6b4e65046",
        "top": "10%",
        "width": "10%",
        "zIndex": 50
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmLocalHeader.add(
    lblLocalTitle, Button09883d4a5c77342);
    var btnMenu = new kony.ui.Button({
        "height": "3.0%",
        "id": "btnMenu",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_8083a286c6354450ada6cd1ef79a9e7f,
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
    var flxNewsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "93%",
        "id": "flxNewsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "7%",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    flxNewsContainer.setDefaultUnit(kony.flex.DP);
    var lblFrmWeatherTitle = new kony.ui.Label({
        "height": "5%",
        "id": "lblFrmWeatherTitle",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel02f7069ee8bed4c",
        "text": "Local Weather",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxcScrlWthr = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "120dp",
        "horizontalScrollIndicator": true,
        "id": "flxcScrlWthr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxcScrlWthr.setDefaultUnit(kony.flex.DP);
    var flxcWthr1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxcWthr1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    flxcWthr1.setDefaultUnit(kony.flex.DP);
    var lblDay1 = new kony.ui.Label({
        "id": "lblDay1",
        "isVisible": true,
        "left": "16dp",
        "skin": "sknLblKonyThemeDay",
        "text": "Mon",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCloud1 = new kony.ui.Image2({
        "id": "imgCloud1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "http://openweathermap.org/img/w/04d.png",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinTemp1 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMinTemp1",
        "isVisible": true,
        "skin": "CopynoSkinLabel0029febf1f27e4e",
        "text": "-7.49 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMaxTemp1 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMaxTemp1",
        "isVisible": true,
        "text": "5.47 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "101dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxcWthr1.add(
    lblDay1, imgCloud1, lblMinTemp1, lblMaxTemp1);
    var CopyflxcWthr0e13997cc19ce41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxcWthr0e13997cc19ce41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "21%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyflxcWthr0e13997cc19ce41.setDefaultUnit(kony.flex.DP);
    var lblDay2 = new kony.ui.Label({
        "id": "lblDay2",
        "isVisible": true,
        "left": "16dp",
        "skin": "sknLblKonyThemeDay",
        "text": "Tue",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCloud2 = new kony.ui.Image2({
        "id": "imgCloud2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "http://openweathermap.org/img/w/04d.png",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinTemp2 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMinTemp2",
        "isVisible": true,
        "skin": "CopynoSkinLabel0029febf1f27e4e",
        "text": "-3.57 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMaxTemp2 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMaxTemp2",
        "isVisible": true,
        "text": "2.83 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "101dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxcWthr0e13997cc19ce41.add(
    lblDay2, imgCloud2, lblMinTemp2, lblMaxTemp2);
    var CopyflxcWthr0540b17a3c52f46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxcWthr0540b17a3c52f46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "42%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyflxcWthr0540b17a3c52f46.setDefaultUnit(kony.flex.DP);
    var lblDay3 = new kony.ui.Label({
        "id": "lblDay3",
        "isVisible": true,
        "left": "16dp",
        "skin": "sknLblKonyThemeDay",
        "text": "Wed",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCloud3 = new kony.ui.Image2({
        "id": "imgCloud3",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "http://openweathermap.org/img/w/04d.png",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinTemp3 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMinTemp3",
        "isVisible": true,
        "skin": "CopynoSkinLabel0029febf1f27e4e",
        "text": "-3.84 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMaxTemp3 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMaxTemp3",
        "isVisible": true,
        "text": "8.14 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "101dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxcWthr0540b17a3c52f46.add(
    lblDay3, imgCloud3, lblMinTemp3, lblMaxTemp3);
    var CopyflxcWthr021adb54e6b354e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxcWthr021adb54e6b354e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "63%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyflxcWthr021adb54e6b354e.setDefaultUnit(kony.flex.DP);
    var lblDay4 = new kony.ui.Label({
        "id": "lblDay4",
        "isVisible": true,
        "left": "16dp",
        "skin": "sknLblKonyThemeDay",
        "text": "Thurs",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCloud4 = new kony.ui.Image2({
        "id": "imgCloud4",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "http://openweathermap.org/img/w/04d.png",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinTemp4 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMinTemp4",
        "isVisible": true,
        "skin": "CopynoSkinLabel0029febf1f27e4e",
        "text": "-4.27 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMaxTemp4 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMaxTemp4",
        "isVisible": true,
        "text": "4.17 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "101dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxcWthr021adb54e6b354e.add(
    lblDay4, imgCloud4, lblMinTemp4, lblMaxTemp4);
    var CopyflxcWthr054803412f8ed42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxcWthr054803412f8ed42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "84%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyflxcWthr054803412f8ed42.setDefaultUnit(kony.flex.DP);
    var lblDay5 = new kony.ui.Label({
        "id": "lblDay5",
        "isVisible": true,
        "left": "16dp",
        "skin": "sknLblKonyThemeDay",
        "text": "Fri",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCloud5 = new kony.ui.Image2({
        "id": "imgCloud5",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "http://openweathermap.org/img/w/04d.png",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinTemp5 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMinTemp5",
        "isVisible": true,
        "skin": "CopynoSkinLabel0029febf1f27e4e",
        "text": "-6.23 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMaxTemp5 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMaxTemp5",
        "isVisible": true,
        "text": "8.52 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "101dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxcWthr054803412f8ed42.add(
    lblDay5, imgCloud5, lblMinTemp5, lblMaxTemp5);
    var CopyflxcWthr00562d5d5f9af46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxcWthr00562d5d5f9af46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "105%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyflxcWthr00562d5d5f9af46.setDefaultUnit(kony.flex.DP);
    var lblDay6 = new kony.ui.Label({
        "id": "lblDay6",
        "isVisible": true,
        "left": "16dp",
        "skin": "sknLblKonyThemeDay",
        "text": "Sat",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCloud6 = new kony.ui.Image2({
        "id": "imgCloud6",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "http://openweathermap.org/img/w/04d.png",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinTemp6 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMinTemp6",
        "isVisible": true,
        "skin": "CopynoSkinLabel0029febf1f27e4e",
        "text": "-7.49 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMaxTemp6 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMaxTemp6",
        "isVisible": true,
        "text": "5.47 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "101dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxcWthr00562d5d5f9af46.add(
    lblDay6, imgCloud6, lblMinTemp6, lblMaxTemp6);
    var CopyflxcWthr033b7c07527d34e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxcWthr033b7c07527d34e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "126%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%"
    }, {}, {});
    CopyflxcWthr033b7c07527d34e.setDefaultUnit(kony.flex.DP);
    var lblDay7 = new kony.ui.Label({
        "id": "lblDay7",
        "isVisible": true,
        "left": "16dp",
        "skin": "sknLblKonyThemeDay",
        "text": "Sun",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgCloud7 = new kony.ui.Image2({
        "id": "imgCloud7",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "http://openweathermap.org/img/w/04d.png",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMinTemp7 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMinTemp7",
        "isVisible": true,
        "skin": "CopynoSkinLabel0029febf1f27e4e",
        "text": "-7.49 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMaxTemp7 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMaxTemp7",
        "isVisible": true,
        "text": "5.47 C",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "101dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxcWthr033b7c07527d34e.add(
    lblDay7, imgCloud7, lblMinTemp7, lblMaxTemp7);
    flxcScrlWthr.add(
    flxcWthr1, CopyflxcWthr0e13997cc19ce41, CopyflxcWthr0540b17a3c52f46, CopyflxcWthr021adb54e6b354e, CopyflxcWthr054803412f8ed42, CopyflxcWthr00562d5d5f9af46, CopyflxcWthr033b7c07527d34e);
    var lblLocalNews = new kony.ui.Label({
        "height": "5%",
        "id": "lblLocalNews",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel07a2a27614c3247",
        "text": "Local News",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var segmentNews = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgNews": "imagedrag.png",
            "lblTitle": "Migrants die as boat sinks off Turkey ...",
            "richTextDesc": "At least 24 migrants have died off the Turkish coast trying to reach the Greek island of Lesbos, Turkish media say."
        }, {
            "imgNews": "imagedrag.png",
            "lblTitle": "Dublin weigh-in murder: Continuity IRA ...",
            "richTextDesc": "Dissident republicans have claimed they carried out a shooting in Dublin on Friday in which a man was killed and two others wounded"
        }, {
            "imgNews": "imagedrag.png",
            "lblTitle": "Chicago police officer sues victim's family ...",
            "richTextDesc": "A white Chicago police officer who fatally shot a black teenager last December is suing his family for $10m (£6.9m), claiming emotional distress"
        }],
        "groupCells": false,
        "height": "70%",
        "id": "segmentNews",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_9898983eed8e46a597ae77a572f2b328,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "CopynoSkinSegmentRow042c89cb58efc42",
        "rowSkin": "CopynoSkinSegmentRow042c89cb58efc42",
        "rowTemplate": flxLocalNews,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
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
    }, {});
    flxNewsContainer.add(
    lblFrmWeatherTitle, flxcScrlWthr, lblLocalNews, segmentNews);
    frmWeather.add(
    frmLocalHeader, btnMenu, flxNewsContainer);
};

function frmWeatherGlobals() {
    frmWeather = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmWeather,
        "enabledForIdleTimeout": false,
        "id": "frmWeather",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm01bc529f047ac4b"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmWeather.info = {
        "kuid": "70f30aea743b49a9ad3484b652fe6145"
    };
};