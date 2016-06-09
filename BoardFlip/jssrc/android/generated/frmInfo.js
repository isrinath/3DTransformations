function addWidgetsfrmInfo() {
    frmInfo.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flexHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flexHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknBurgerBg",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var lblHeaderName = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblHeaderName",
        "isVisible": true,
        "skin": "sknlblWhite125",
        "text": "Sports",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "centerY": "49.67%",
        "focusSkin": "CopyslButtonGlossRed0bad5dc89e0684e",
        "height": "35dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_d7c12f5d00064cf1b8455bcc9cfc7e87,
        "skin": "CopyslButtonGlossBlue08aecb69b1fa94f",
        "top": "0dp",
        "width": "65dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgBack = new kony.ui.Image2({
        "centerY": "50.33%",
        "height": "35dp",
        "id": "imgBack",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "back.png",
        "top": "6dp",
        "width": "65dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHeader.add(lblHeaderName, btnBack, imgBack);
    var imgOne = new kony.ui.Image2({
        "centerX": "50%",
        "height": "165dp",
        "id": "imgOne",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "cric.png",
        "top": "50dp",
        "width": "375dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0da89c645e3c749",
        "text": "Star Award News",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "222dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0e15a26ef88f64f",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.                                                                           When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived  not only five centuries.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "255dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnDone = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed05aed9e9f30b745",
        "height": "50dp",
        "id": "btnDone",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_609060d968b24437977e361310070811,
        "skin": "CopyslButtonGlossBlue0c35638f036e84d",
        "text": "DONE",
        "top": "460dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMain.add(flexHeader, imgOne, lblTitle, lblDescription, btnDone);
    frmInfo.add(flexMain);
};

function frmInfoGlobals() {
    frmInfo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmInfo,
        "enabledForIdleTimeout": false,
        "id": "frmInfo",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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
    frmInfo.info = {
        "kuid": "5a194a521202405c987f254a6c49781d"
    };
};