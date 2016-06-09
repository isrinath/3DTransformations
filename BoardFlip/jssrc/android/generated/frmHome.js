function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var Label067d9ccd8e43447 = new kony.ui.Label({
        "height": "28dp",
        "id": "Label067d9ccd8e43447",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "SPORTS",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flexOne = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexOne",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_c5aead0444c94e0c897b2ea2236b463f,
        "skin": "skinFlex",
        "top": "28dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flexOne.setDefaultUnit(kony.flex.DP);
    var lblOne = new kony.ui.Label({
        "height": "100%",
        "id": "lblOne",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "India Won 4th ODI Match : Score Card ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgOne = new kony.ui.Image2({
        "height": "100%",
        "id": "imgOne",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "cricket1.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexOne.add(lblOne, imgOne);
    var btnOne = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "btnOne",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_c0a7b7018d40489aa0a967d553f4c924,
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "128dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexTwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexTwo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33%",
        "onClick": AS_FlexContainer_0033b3431a3a4b41ad3a1ce806d86b8a,
        "skin": "skinFlex",
        "top": "28dp",
        "width": "34%",
        "zIndex": 1
    }, {}, {});
    flexTwo.setDefaultUnit(kony.flex.DP);
    var lblTwo = new kony.ui.Label({
        "height": "100%",
        "id": "lblTwo",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "Sachin did not achieve his full potential ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgTwo = new kony.ui.Image2({
        "height": "110dp",
        "id": "imgTwo",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ks.png",
        "top": "-3dp",
        "width": "125dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexTwo.add(lblTwo, imgTwo);
    var btnTwo = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "btnTwo",
        "isVisible": true,
        "left": "33%",
        "onClick": AS_Button_9f6ecbb0c97043d9b1140c20d4686fda,
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "128dp",
        "width": "34%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexThree = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexThree",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_7178400bf1924bd885ac5d2a2320ee56,
        "right": "0dp",
        "skin": "skinFlex",
        "top": "28dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flexThree.setDefaultUnit(kony.flex.DP);
    var lblThree = new kony.ui.Label({
        "height": "100%",
        "id": "lblThree",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "Virendar Sehwag denies falling out with MS",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgThree = new kony.ui.Image2({
        "height": "100dp",
        "id": "imgThree",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ds.png",
        "top": "0dp",
        "width": "113dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexThree.add(lblThree, imgThree);
    var btnThree = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "btnThree",
        "isVisible": true,
        "onClick": AS_Button_9cc3972955be442a98455a99c50bd684,
        "right": "0dp",
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "128dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0fc63e1e8cfa34a = new kony.ui.Label({
        "height": "28dp",
        "id": "Label0fc63e1e8cfa34a",
        "isVisible": true,
        "left": "0%",
        "skin": "lblSkin",
        "text": "INTERNATIONAL",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "158dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flexFour = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexFour",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_d6fcbde71c7f47f5ae0d7df3d8613f0d,
        "skin": "skinFlex",
        "top": "191dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flexFour.setDefaultUnit(kony.flex.DP);
    var lblFour = new kony.ui.Label({
        "height": "100%",
        "id": "lblFour",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "Shell reports loss of $7.4 billion after Arctic exit",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgFour = new kony.ui.Image2({
        "height": "100%",
        "id": "imgFour",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "shell.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexFour.add(lblFour, imgFour);
    var Button010a2ccc8dd9d48 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "Button010a2ccc8dd9d48",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_ea51d9079b8147a694c92766236455c6,
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "291dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexFive = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexFive",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33%",
        "onClick": AS_FlexContainer_ca91391f6fcc4ec19fc5b69e5f83e7eb,
        "skin": "skinFlex",
        "top": "191dp",
        "width": "34%",
        "zIndex": 1
    }, {}, {});
    flexFive.setDefaultUnit(kony.flex.DP);
    var lblFive = new kony.ui.Label({
        "height": "100%",
        "id": "lblFive",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "For the third year in a row, Kony has been named a Gartner MADP Magic Quadrant Leader.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgFive = new kony.ui.Image2({
        "height": "100%",
        "id": "imgFive",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Image_53fdb2b47ad142ef92b07479fa961305,
        "skin": "CopyslImage0c7489c683bae4f",
        "src": "kony.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexFive.add(lblFive, imgFive);
    var Button02710596506754d = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "Button02710596506754d",
        "isVisible": true,
        "left": "33%",
        "onClick": AS_Button_b7438e870ab4417ca7f3e17ac3223295,
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "291dp",
        "width": "34%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexSix = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexSix",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_5bd1de3069f54653bab37cb01ba10c76,
        "right": "0dp",
        "skin": "skinFlex",
        "top": "191dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flexSix.setDefaultUnit(kony.flex.DP);
    var lblSix = new kony.ui.Label({
        "height": "100%",
        "id": "lblSix",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "Top 10 family friendly cities",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgSix = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSix",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "friendlycity.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexSix.add(lblSix, imgSix);
    var Button0528e9b3536544c = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "Button0528e9b3536544c",
        "isVisible": true,
        "onClick": AS_Button_19f3e2f5d4c5481cb868cadfed4913ee,
        "right": "0dp",
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "291dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexDummy = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "200%",
        "id": "flexDummy",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "skin": "skinFlex",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexDummy.setDefaultUnit(kony.flex.DP);
    var Button07e6fe23335204d = new kony.ui.Button({
        "bottom": "0dp",
        "focusSkin": "slButtonGlossRed",
        "height": "3%",
        "id": "Button07e6fe23335204d",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_43df4d70c7554f4790c80f987f9918b3,
        "skin": "slButtonGlossBlue",
        "text": "Done",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexDummyTwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "94%",
        "id": "flexDummyTwo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinFlexThree",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexDummyTwo.setDefaultUnit(kony.flex.DP);
    var lblDummy = new kony.ui.Label({
        "height": "50%",
        "id": "lblDummy",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "lblSkinTwo",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDummyTwo = new kony.ui.Label({
        "height": "50%",
        "id": "lblDummyTwo",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "lblSkinTwo",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexDummyTwo.add(lblDummy, lblDummyTwo);
    flexDummy.add(Button07e6fe23335204d, flexDummyTwo);
    var Label059491d2a95dd47 = new kony.ui.Label({
        "height": "28dp",
        "id": "Label059491d2a95dd47",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "GENERAL",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "321dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flexSeven = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexSeven",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_ffec232302bd42aca93dfd131cc96ba7,
        "skin": "skinFlex",
        "top": "354dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flexSeven.setDefaultUnit(kony.flex.DP);
    var lblSeven = new kony.ui.Label({
        "height": "100%",
        "id": "lblSeven",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "BRICS have agreed for co-investment for R & D",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgSeven = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSeven",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "brics.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexSeven.add(lblSeven, imgSeven);
    var Button026941ef30da14e = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "Button026941ef30da14e",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_472009cad9314f9797af61dad963eeed,
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "454dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexEight = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexEight",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33%",
        "onClick": AS_FlexContainer_a3d4ec4b91934c2ea7a05f2f39724985,
        "skin": "skinFlex",
        "top": "354dp",
        "width": "34%",
        "zIndex": 1
    }, {}, {});
    flexEight.setDefaultUnit(kony.flex.DP);
    var lblEight = new kony.ui.Label({
        "height": "100%",
        "id": "lblEight",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "Unveiled the official logo for the NATO summit.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgEight = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEight",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "nato.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexEight.add(lblEight, imgEight);
    var Button07a1c4571e4b049 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "Button07a1c4571e4b049",
        "isVisible": true,
        "left": "33%",
        "onClick": AS_Button_c944a3bed1334f4fa2ac54bbb49b0749,
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "454dp",
        "width": "34%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexNine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "flexNine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_e7ed51c7bd314c898d848bb58f8e6c52,
        "right": "0dp",
        "skin": "skinFlex",
        "top": "354dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    flexNine.setDefaultUnit(kony.flex.DP);
    var lblNine = new kony.ui.Label({
        "height": "100%",
        "id": "lblNine",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSkin",
        "text": "This is a list of summits of the South Asian Association for Regional Cooperation (SAARC).",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgNine = new kony.ui.Image2({
        "height": "100%",
        "id": "imgNine",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslImage060832d5ed37941",
        "src": "saarc.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexNine.add(lblNine, imgNine);
    var Button0a813de17d35443 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "25dp",
        "id": "Button0a813de17d35443",
        "isVisible": true,
        "onClick": AS_Button_bdd02112b519486098dd2852f303b3d5,
        "right": "0dp",
        "skin": "btnSkinNew",
        "text": "Read More >>",
        "top": "454dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(Label067d9ccd8e43447, flexOne, btnOne, flexTwo, btnTwo, flexThree, btnThree, Label0fc63e1e8cfa34a, flexFour, Button010a2ccc8dd9d48, flexFive, Button02710596506754d, flexSix, Button0528e9b3536544c, flexDummy, Label059491d2a95dd47, flexSeven, Button026941ef30da14e, flexEight, Button07a1c4571e4b049, flexNine, Button0a813de17d35443);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "bounces": false,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_c3c66ba84c2646c183d1a54b92c977a7,
        "skin": "CopyslForm0018a28d1730043"
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
    frmHome.info = {
        "kuid": "aec3138f8ece4c95b3fe265a163e69a0"
    };
};