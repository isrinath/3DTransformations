function addWidgetsfrm3DWithBurger() {
    frm3DWithBurger.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var flexLeft = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexLeft",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "sknBurgerBg",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexLeft.setDefaultUnit(kony.flex.DP);
    var flexSports = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexSports",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "85dp",
        "width": "100%"
    }, {}, {});
    flexSports.setDefaultUnit(kony.flex.DP);
    var Label0d44eac177e1345 = new kony.ui.Label({
        "id": "Label0d44eac177e1345",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "Sports",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexSports.add(Label0d44eac177e1345);
    var flexLine1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "flexLine1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine1.setDefaultUnit(kony.flex.DP);
    flexLine1.add();
    var flexEntertainment = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexEntertainment",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexEntertainment.setDefaultUnit(kony.flex.DP);
    var lblEntertainment = new kony.ui.Label({
        "id": "lblEntertainment",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "Entertainment",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexEntertainment.add(lblEntertainment);
    var flexLine2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "flexLine2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine2.setDefaultUnit(kony.flex.DP);
    flexLine2.add();
    var flexRegional = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexRegional",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexRegional.setDefaultUnit(kony.flex.DP);
    var lblRegional = new kony.ui.Label({
        "id": "lblRegional",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "Regional",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexRegional.add(lblRegional);
    var flexLine3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "flexLine3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine3.setDefaultUnit(kony.flex.DP);
    flexLine3.add();
    var flexInternational = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexInternational",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexInternational.setDefaultUnit(kony.flex.DP);
    var lblInternatinal = new kony.ui.Label({
        "id": "lblInternatinal",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "International",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexInternational.add(lblInternatinal);
    var flexLine4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "flexLine4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine4.setDefaultUnit(kony.flex.DP);
    flexLine4.add();
    var flexGeneral = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexGeneral",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexGeneral.setDefaultUnit(kony.flex.DP);
    var lblGeneral = new kony.ui.Label({
        "id": "lblGeneral",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "General",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexGeneral.add(lblGeneral);
    var flexLine5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "flexLine5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine5.setDefaultUnit(kony.flex.DP);
    flexLine5.add();
    var flexPolitical = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexPolitical",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexPolitical.setDefaultUnit(kony.flex.DP);
    var lblPolitical = new kony.ui.Label({
        "id": "lblPolitical",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "Political",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexPolitical.add(lblPolitical);
    var flexLine6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "flexLine6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine6.setDefaultUnit(kony.flex.DP);
    flexLine6.add();
    var flexBusiness = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexBusiness",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexBusiness.setDefaultUnit(kony.flex.DP);
    var lblBusiness = new kony.ui.Label({
        "id": "lblBusiness",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "Sports",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexBusiness.add(lblBusiness);
    var flexLine7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "flexLine7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine7.setDefaultUnit(kony.flex.DP);
    flexLine7.add();
    var flexTechnology = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flexTechnology",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexTechnology.setDefaultUnit(kony.flex.DP);
    var lblTechnology = new kony.ui.Label({
        "id": "lblTechnology",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknlblWhite125",
        "text": "Technology",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexTechnology.add(lblTechnology);
    var flexLine8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "flexLine8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "flexBgWhite",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flexLine8.setDefaultUnit(kony.flex.DP);
    flexLine8.add();
    flexLeft.add(flexSports, flexLine1, flexEntertainment, flexLine2, flexRegional, flexLine3, flexInternational, flexLine4, flexGeneral, flexLine5, flexPolitical, flexLine6, flexBusiness, flexLine7, flexTechnology, flexLine8);
    var flexRight = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexRight",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    flexRight.setDefaultUnit(kony.flex.DP);
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
    var lblHome = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblHome",
        "isVisible": true,
        "skin": "sknlblWhite125",
        "text": "Home",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnBurgerMenu = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed03cd569b682b54d",
        "height": "21dp",
        "id": "btnBurgerMenu",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_28b093be17834fa18de06d9c55cb891a,
        "skin": "CopyslButtonGlossBlue08aecb69b1fa94f",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgBurgerMenu = new kony.ui.Image2({
        "centerY": "50%",
        "height": "21dp",
        "id": "imgBurgerMenu",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "burgermenu.png",
        "top": "6dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHeader.add(lblHome, btnBurgerMenu, imgBurgerMenu);
    var flexData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexData",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flexData.setDefaultUnit(kony.flex.DP);
    var flexScrollData = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "flexScrollData",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_BOTH,
        "skin": "CopyslFSbox0f443aa64f9fe4f",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexScrollData.setDefaultUnit(kony.flex.DP);
    var lblSports = new kony.ui.Label({
        "id": "lblSports",
        "isVisible": true,
        "left": "15dp",
        "skin": "lblLightAsh",
        "text": "SPORTS",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexOne = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexOne",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15dp",
        "onClick": AS_FlexContainer_60a0835baa2141fc8c9df033ee3dbc44,
        "skin": "skinFlex",
        "top": "35dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgOne = new kony.ui.Image2({
        "height": "100%",
        "id": "imgOne",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "cric.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexOne.add(lblOne, imgOne);
    var lblNewsTitle = new kony.ui.Label({
        "id": "lblNewsTitle",
        "isVisible": true,
        "left": "15dp",
        "skin": "lblLightAsh85",
        "text": "News Title",
        "top": "130dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexTwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexTwo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "37%",
        "onClick": AS_FlexContainer_71a2ed71259747418171e4a7f8391377,
        "skin": "skinFlex",
        "top": "35dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var lblStarAwards = new kony.ui.Label({
        "id": "lblStarAwards",
        "isVisible": true,
        "left": "37%",
        "skin": "lblLightAsh85",
        "text": "Star Award News",
        "top": "130dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexThree = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexThree",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "70%",
        "onClick": AS_FlexContainer_7e68260f724847f58c506aab56d8adea,
        "right": "0dp",
        "skin": "skinFlex",
        "top": "35dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var lblChampion = new kony.ui.Label({
        "id": "lblChampion",
        "isVisible": true,
        "left": "70%",
        "skin": "lblLightAsh85",
        "text": "Champion",
        "top": "130dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnOne = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnOne",
        "isVisible": true,
        "left": "14dp",
        "onClick": AS_Button_b7a219c0838a4a2fb2f768743f7d1489,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "148dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnTwo = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnTwo",
        "isVisible": true,
        "left": "37%",
        "onClick": AS_Button_56db2506ecaf4d0cbd6b4cbdaa5cf2e1,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "148dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnThree = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnThree",
        "isVisible": true,
        "left": "70%",
        "onClick": AS_Button_ed8c2d8b876947c69cce9fdb5835dfa6,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "148dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flexSportsLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flexSportsLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15dp",
        "skin": "CopyslFbox07298a8b1d0744e",
        "top": "180dp",
        "width": "92%",
        "zIndex": 1
    }, {}, {});
    flexSportsLine.setDefaultUnit(kony.flex.DP);
    flexSportsLine.add();
    var lblEnter = new kony.ui.Label({
        "id": "lblEnter",
        "isVisible": true,
        "left": "15dp",
        "skin": "lblLightAsh",
        "text": "ENTERTAINMENT",
        "top": "190dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexFour = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexFour",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15dp",
        "onClick": AS_FlexContainer_7811d88fb9d644a1881913b54b763a4f,
        "skin": "skinFlex",
        "top": "215dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var flexFive = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexFive",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "37%",
        "onClick": AS_FlexContainer_2854d48af11c45c3b9f699ba587e9c15,
        "skin": "skinFlex",
        "top": "215dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgFive = new kony.ui.Image2({
        "height": "100%",
        "id": "imgFive",
        "isVisible": true,
        "left": "0dp",
        "onTouchEnd": AS_Image_53fdb2b47ad142ef92b07479fa961305,
        "skin": "CopyslImage0c7489c683bae4f",
        "src": "wipro.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexFive.add(lblFive, imgFive);
    var flexSix = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexSix",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "70%",
        "onClick": AS_FlexContainer_16c6cd0f0ae5497fb635231c9c576f8a,
        "right": "0dp",
        "skin": "skinFlex",
        "top": "215dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var lblAlaska = new kony.ui.Label({
        "id": "lblAlaska",
        "isVisible": true,
        "left": "15dp",
        "skin": "lblLightAsh85",
        "text": "Alaska",
        "top": "310dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblWipro = new kony.ui.Label({
        "id": "lblWipro",
        "isVisible": true,
        "left": "37%",
        "skin": "lblLightAsh85",
        "text": "Wipro",
        "top": "310dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblHoliday = new kony.ui.Label({
        "id": "lblHoliday",
        "isVisible": true,
        "left": "70%",
        "skin": "lblLightAsh85",
        "text": "Holiday",
        "top": "310dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnFour = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnFour",
        "isVisible": true,
        "left": "14dp",
        "onClick": AS_Button_a3b140eac1144f5d8a101d9e3b9c7ec2,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "330dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnFive = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnFive",
        "isVisible": true,
        "left": "37%",
        "onClick": AS_Button_6cc0ec2628e8490d91cfcaad011e9210,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "330dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnSix = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnSix",
        "isVisible": true,
        "left": "70%",
        "onClick": AS_Button_e0135c5a19da480486bad9e6b88f3b01,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "330dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flexEnterLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flexEnterLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "CopyslFbox007d1137014d04f",
        "top": "360dp",
        "width": "92%",
        "zIndex": 1
    }, {}, {});
    flexEnterLine.setDefaultUnit(kony.flex.DP);
    flexEnterLine.add();
    var flexDummy = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "200%",
        "id": "flexDummy",
        "isVisible": false,
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
        "onClick": AS_Button_4ec474b1a83444308f57d66330660958,
        "skin": "slButtonGlossBlue",
        "text": "Done",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
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
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDummyTwo = new kony.ui.Label({
        "height": "50%",
        "id": "lblDummyTwo",
        "isVisible": true,
        "left": "5%",
        "right": "5%",
        "skin": "lblSkinTwo",
        "top": "50%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexDummyTwo.add(lblDummy, lblDummyTwo);
    flexDummy.add(Button07e6fe23335204d, flexDummyTwo);
    var lblReg = new kony.ui.Label({
        "id": "lblReg",
        "isVisible": true,
        "left": "15dp",
        "skin": "lblLightAsh",
        "text": "REGIONAL",
        "top": "370dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexSeven = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexSeven",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15dp",
        "onClick": AS_FlexContainer_9d9dcebb872b4dbdad9fc3e7f698c23d,
        "skin": "skinFlex",
        "top": "395dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var flexEight = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexEight",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "37%",
        "onClick": AS_FlexContainer_9e68119e97a044b5b21abbe1ea8fed33,
        "skin": "skinFlex",
        "top": "395dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgEight = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEight",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "exxontwo.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexEight.add(lblEight, imgEight);
    var flexNine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "flexNine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "70%",
        "onClick": AS_FlexContainer_03ac2bddee6e4b0a99d43d20febee4c3,
        "right": "0dp",
        "skin": "skinFlex",
        "top": "395dp",
        "width": "30%",
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
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgNine = new kony.ui.Image2({
        "height": "100%",
        "id": "imgNine",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslImage060832d5ed37941",
        "src": "lnnt.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexNine.add(lblNine, imgNine);
    var lblBrics = new kony.ui.Label({
        "id": "lblBrics",
        "isVisible": true,
        "left": "15dp",
        "skin": "lblLightAsh85",
        "text": "BRICS",
        "top": "495dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblExon = new kony.ui.Label({
        "id": "lblExon",
        "isVisible": true,
        "left": "37%",
        "skin": "lblLightAsh85",
        "text": "ExxonMobile",
        "top": "495dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblLarsen = new kony.ui.Label({
        "id": "lblLarsen",
        "isVisible": true,
        "left": "70%",
        "skin": "lblLightAsh85",
        "text": "LARSEN",
        "top": "495dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnSeven = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnSeven",
        "isVisible": true,
        "left": "14dp",
        "onClick": AS_Button_3d9e6dedc9e74f04afbb47a1d9d2dc05,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "515dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnEight = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnEight",
        "isVisible": true,
        "left": "37%",
        "onClick": AS_Button_6d60a0e663bb4a16afcbe5caeb1d7fac,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "515dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnNine = new kony.ui.Button({
        "focusSkin": "sknBtnBlue",
        "height": "20dp",
        "id": "btnNine",
        "isVisible": true,
        "left": "70%",
        "onClick": AS_Button_16d9c8fa952b47a6b90388fe33475ce7,
        "skin": "sknBtnBlue",
        "text": "READ MORE",
        "top": "515dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flexScrollData.add(lblSports, flexOne, lblNewsTitle, flexTwo, lblStarAwards, flexThree, lblChampion, btnOne, btnTwo, btnThree, flexSportsLine, lblEnter, flexFour, flexFive, flexSix, lblAlaska, lblWipro, lblHoliday, btnFour, btnFive, btnSix, flexEnterLine, flexDummy, lblReg, flexSeven, flexEight, flexNine, lblBrics, lblExon, lblLarsen, btnSeven, btnEight, btnNine);
    flexData.add(flexScrollData);
    flexRight.add(flexHeader, flexData);
    flexMain.add(flexLeft, flexRight);
    frm3DWithBurger.add(flexMain);
};

function frm3DWithBurgerGlobals() {
    frm3DWithBurger = new kony.ui.Form2({
        "addWidgets": addWidgetsfrm3DWithBurger,
        "enabledForIdleTimeout": false,
        "id": "frm3DWithBurger",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_bf31434a60c4491dac24903431c1b735,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    frm3DWithBurger.info = {
        "kuid": "b47eef5f8b7140ae9ab144674c5e9b70"
    };
};