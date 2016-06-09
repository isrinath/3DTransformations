


var flip;
var flipTwo;
var flipThree;
var flipFour;
var flipFive;
var flipSix;
var flipSeven;
var flipEight;
var flipNine;
var flexFlip;

function initFlip(){
  
  flip = flipper(frmHome.flexOne,frmHome.flexOne.imgOne,frmHome.flexOne.lblOne,0.5,200);
  flipTwo = flipper(frmHome.flexTwo,frmHome.flexTwo.imgTwo,frmHome.flexTwo.lblTwo,0.5,200);
  flipThree = flipper(frmHome.flexThree,frmHome.flexThree.imgThree,frmHome.flexThree.lblThree,0.5,200);
  
  flipFour = flipperScaling(frmHome.flexFour,frmHome.flexFour.imgFour,frmHome.flexFour.lblFour,0.5,200);
  flipFive = flipperScaling(frmHome.flexFive,frmHome.flexFive.imgFive,frmHome.flexFive.lblFive,0.5,200);
  flipSix = flipperScaling(frmHome.flexSix,frmHome.flexSix.imgSix,frmHome.flexSix.lblSix,0.5,200);

  flipSeven = flipperNew(frmHome.flexSeven,frmHome.flexSeven.imgSeven,frmHome.flexSeven.lblSeven,0.5,200);
  flipEight = flipperNew(frmHome.flexEight,frmHome.flexEight.imgEight,frmHome.flexEight.lblEight,0.5,200);
  flipNine = flipperNew(frmHome.flexNine,frmHome.flexNine.imgNine,frmHome.flexNine.lblNine,0.5,200);
  
  flexFlip = flexflipper(frmHome.flexDummy.flexDummyTwo,frmHome.flexDummy.flexDummyTwo.lblDummyTwo,frmHome.flexDummy.flexDummyTwo.lblDummy,1,400); 
}

function initFlipNew(){
  var devInfo = kony.os.deviceInfo();
  	if(devInfo.name === "android"){
    	flip = flipper(frm3DWithBurger.flexOne,frm3DWithBurger.flexOne.imgOne,frm3DWithBurger.flexOne.lblOne,0.5,600);
  		flipTwo = flipper(frm3DWithBurger.flexTwo,frm3DWithBurger.flexTwo.imgTwo,frm3DWithBurger.flexTwo.lblTwo,0.5,600);
  		flipThree = flipper(frm3DWithBurger.flexThree,frm3DWithBurger.flexThree.imgThree,frm3DWithBurger.flexThree.lblThree,0.5,600);
  
  		flipFour = flipperScaling(frm3DWithBurger.flexFour,frm3DWithBurger.flexFour.imgFour,frm3DWithBurger.flexFour.lblFour,0.5,600);
  		flipFive = flipperScaling(frm3DWithBurger.flexFive,frm3DWithBurger.flexFive.imgFive,frm3DWithBurger.flexFive.lblFive,0.5,600);
  		flipSix = flipperScaling(frm3DWithBurger.flexSix,frm3DWithBurger.flexSix.imgSix,frm3DWithBurger.flexSix.lblSix,0.5,600);

  		flipSeven = flipperNew(frm3DWithBurger.flexSeven,frm3DWithBurger.flexSeven.imgSeven,frm3DWithBurger.flexSeven.lblSeven,0.5,600);
  		flipEight = flipperNew(frm3DWithBurger.flexEight,frm3DWithBurger.flexEight.imgEight,frm3DWithBurger.flexEight.lblEight,0.5,600);
  		flipNine = flipperNew(frm3DWithBurger.flexNine,frm3DWithBurger.flexNine.imgNine,frm3DWithBurger.flexNine.lblNine,0.5,600);
      
		//flexFlip = flexflipper(frm3DWithBurger.flexDummy.flexDummyTwo,frm3DWithBurger.flexDummy.flexDummyTwo.lblDummyTwo,frm3DWithBurger.flexDummy.flexDummyTwo.lblDummy,1,700); 
    }else{
		  flip = flipper(frm3DWithBurger.flexOne,frm3DWithBurger.flexOne.imgOne,frm3DWithBurger.flexOne.lblOne,0.5,200);
		  flipTwo = flipper(frm3DWithBurger.flexTwo,frm3DWithBurger.flexTwo.imgTwo,frm3DWithBurger.flexTwo.lblTwo,0.5,200);
		  flipThree = flipper(frm3DWithBurger.flexThree,frm3DWithBurger.flexThree.imgThree,frm3DWithBurger.flexThree.lblThree,0.5,200);
		  
		  flipFour = flipperScaling(frm3DWithBurger.flexFour,frm3DWithBurger.flexFour.imgFour,frm3DWithBurger.flexFour.lblFour,0.5,200);
		  flipFive = flipperScaling(frm3DWithBurger.flexFive,frm3DWithBurger.flexFive.imgFive,frm3DWithBurger.flexFive.lblFive,0.5,200);
		  flipSix = flipperScaling(frm3DWithBurger.flexSix,frm3DWithBurger.flexSix.imgSix,frm3DWithBurger.flexSix.lblSix,0.5,200);

		  flipSeven = flipperNew(frm3DWithBurger.flexSeven,frm3DWithBurger.flexSeven.imgSeven,frm3DWithBurger.flexSeven.lblSeven,0.5,200);
		  flipEight = flipperNew(frm3DWithBurger.flexEight,frm3DWithBurger.flexEight.imgEight,frm3DWithBurger.flexEight.lblEight,0.5,200);
		  flipNine = flipperNew(frm3DWithBurger.flexNine,frm3DWithBurger.flexNine.imgNine,frm3DWithBurger.flexNine.lblNine,0.5,200);
		  
		  //flexFlip = flexflipper(frm3DWithBurger.flexDummy.flexDummyTwo,frm3DWithBurger.flexDummy.flexDummyTwo.lblDummyTwo,frm3DWithBurger.flexDummy.flexDummyTwo.lblDummy,1,1500); 
	}
}
function moveContainer(txtArrNo){
  	var txtObjNo = txtArrNo-1;
	var trans=kony.ui.makeAffineTransform();
  	trans.translate3D(-320,0,0);
	frmHome.flexDummy.flexDummyTwo.lblDummyTwo.text = txtArray[txtObjNo].one;
	frmHome.flexDummy.flexDummyTwo.lblDummy.text = txtArray[txtObjNo].two;
  	var txt =    "Most of us need a holiday after a holiday with the kids, but a family trip need not be so painful. While you and your partner might be craving the turquoise waters of Bora Bora this summer, you might want to reconsider this as a destination if you’ve got the youngsters in tow. To ease the stress, we’ve picked our 10 favourite cities worth visiting with the whole family";
  	frmHome.flexDummy.animate(kony.ui.createAnimation({100:{transform:trans}}),{duration:1,iterationCount:1,fillMode:kony.anim.FILL_MODE_FORWARDS},{});

}

function moveContainerNew(txtArrNo){
  	var txtObjNo = txtArrNo-1;
	var trans=kony.ui.makeAffineTransform();
  	var devInfo = kony.os.deviceInfo();
  	if(devInfo.name === "android")
    	trans.translate(-(devInfo.screenWidth),0);
  	else
      	trans.translate3D(-(devInfo.screenWidth),0,0);
	frm3DWithBurger.flexDummy.flexDummyTwo.lblDummyTwo.text = txtArray[txtObjNo].one;
	frm3DWithBurger.flexDummy.flexDummyTwo.lblDummy.text = txtArray[txtObjNo].two;
  	var txt =    "Most of us need a holiday after a holiday with the kids, but a family trip need not be so painful. While you and your partner might be craving the turquoise waters of Bora Bora this summer, you might want to reconsider this as a destination if you’ve got the youngsters in tow. To ease the stress, we’ve picked our 10 favourite cities worth visiting with the whole family";
  	frm3DWithBurger.flexDummy.animate(kony.ui.createAnimation({100:{transform:trans}}),{duration:1,iterationCount:1,fillMode:kony.anim.FILL_MODE_FORWARDS},{});

}

function moveContainerBack(){
  var trans=kony.ui.makeAffineTransform();
  trans.translate3D(-320,0,0);
  var trans2 = kony.ui.makeAffineTransform();
  trans2.translate3D(0,0,0);
  frmHome.flexDummy.animate(kony.ui.createAnimation({0:{transform:trans},100:{transform:trans2}}),{duration:1,iterationCount:1,fillMode:kony.anim.FILL_MODE_FORWARDS},{});
}

function moveContainerBackNew(){
  var trans=kony.ui.makeAffineTransform();
  var trans2 = kony.ui.makeAffineTransform();
  var devInfo = kony.os.deviceInfo();
  	if(devInfo.name === "android"){
		trans.translate(-(devInfo.screenWidth),0);
		trans2.translate(devInfo.screenWidth,0);}
    else{
		trans.translate3D(-(devInfo.screenWidth),0,0);
		trans2.translate3D(devInfo.screenWidth,0,0);}
  frm3DWithBurger.flexDummy.animate(kony.ui.createAnimation({0:{transform:trans},100:{transform:trans2}}),{duration:1,iterationCount:1,fillMode:kony.anim.FILL_MODE_FORWARDS},{});
}

function funcAddGesture(){
  var tableSwipe = {fingers:1};
  frmHome.flexDummy.flexDummyTwo.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,tableSwipe,swipeFunctionTwo);
}

function funcAddGestureNew(){
  var tableSwipe = {fingers:1};
  frm3DWithBurger.flexDummy.flexDummyTwo.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,tableSwipe,swipeFunctionTwo);
}

function swipeFunctionTwo(wid,info,cont){
  flexFlip();
}

var txtArray=[{one:"Cometh the hour, Cometh the man. Virat Kohli put on a magnificent show with the bat for India as he blasted his 23rd century. For South Africa, AB de Villiers put on a brave show but his 22nd century could not help the Proteas get over the line. Catch all the moments of the match here.",
               two:"India were boosted by the brilliance of Virat Kohli as he scored his 23rd ODI century. His partnerships with Suresh Raina, who came back to form with a glorious fifty and Ajinkya Rahane, were key in ensuring India reached a big total. South Africa started off well but with the introduction of the spinners, the middle order were blown away and they could not get any momentum. AB de Villiers fought a lone hand and his 22nd ODI century gave South Africa hope but with his dismissal, the match ended and the series is now level 2-2."},
              {one:"Kapil Dev, India’s 1983 World Cup-winning captain, has asserted that Sachin Tendulkar never could realise his full potential as a batsman because he had been bogged down by the Bombay school of cricket, according to Khaleej Times.",
               two:"Don't get me wrong, but I think Sachin didn't do justice to his talent. I always thought he could have done much more than what he did, Kapil was quoted as saying."},
              {one:"Virender Sehwag has denied having a fall out with MS Dhoni during the period when India was being coached by Greg Chappell, IBNLive reports. The 37-year-old also claimed that he never held an interest in becoming captain of the national team.",
               two:"The two-year reign of Greg Chappell is widely regarded as a black period in Indian cricket with rumours of team disharmony and bust-ups doing the rounds on a consistent basis. That period also saw then skipper Sourav Ganguly being stripped of his captaincy and also dropped from the team with Rahul Dravid handed the reigns."},
              {one:"Royal Dutch Shell reported a third quarter loss of $7.4 billion Thursday as it re-organized and cancelled projects, including drilling in Alaska, to cope with the plunge in oil prices.",
               two:"The net loss compares with a profit of $4.5 billion in the same period last year. Shell reported $7.9 billion in charges, including $2.6 billion for Alaska and $2 billion related to the decision to cancel the Carmon Creek project in Alberta, Canada."},
              {one:"The strategic deal envisages transforming the retailer's enterprise software landscape and upgrading its data centre infrastructure for superior performance,the IT bellwether said in a statement here. The Oslo-based century old cooperative firm claims to have 33 percent market share, with 1,500 stores and 1.3-million members across the Nordic country.",
               two:"Our engagement will benefit Coop's supply chain and distribution operations and strengthen its move towards an efficient operating model with greater reach and availability, Wipro chief executive for retail Srini Pallia said on the occasion. The outsourcing major will deploy its new age technologies, frameworks and IP (intellectual property) for the transformative service."},
              {one:"Most of us need a holiday after a holiday with the kids, but a family trip need not be so painful. While you and your partner might be craving the turquoise waters of Bora Bora this summer, you might want to reconsider this as a destination if you’ve got the youngsters in tow. To ease the stress, we’ve picked our 10 favourite cities worth visiting with the whole family.",
               two:"Tokyo"+"\n"+"Greater LA"+"\n"+"Sydney"+"\n"+"Melbourne"+"\n"+"London"+"\n"+"Osaka"+"\n"+"Berlin"+"\n"+"San Francisco"+"\n"+"Barcelona"+"\n"+"San Diego"},
              {one:"The BRICS nations - Brazil, Russia, India, China and South Africa - have agreed for co-investment of resources for supporting multilateral Research and Development (R&D) Projects in mutually agreed areas. Union Minister for Science and Technology and Earth Sciences Harsh Vardhan, who led the Indian delegation, signed a joint declaration called -Moscow Declaration at the third meeting of the BRICS Ministers for Science, Technology and Innovation held in Moscow on October 28.",
               two:"BRICS STI Minister agreed on the collaboration for - (i) cooperation within large research infrastructures, including mega-science projects; coordination of the existing large-scale national programme of the BRICS countries; (ii) development and implementation of a BRICS Framework Programme for funding multilateral joint research projects, technology commercialisation and innovation; (iii) establishment of BRICS Research and Innovation Networking Platform."},
              {one:"Exxon Mobil Corp said on Friday third-quarter profit fell 47 percent on low crude prices but results were better than expected, helped by higher profit in the oil company's refining business. Crude prices have fallen more than 50 percent from last year's high above $100 a barrel. While the crude decline hurt Exxon's largest oil and gas business, it also boosted profit margins in refining by lowering feedstock costs. International refining was the surprise that was greater-than-anticipated, said Brian Youngberg, senior oil analyst at Edward Jones.",
               two:"But the world's largest publicly traded oil company is so far keeping its budget forecast intact and plans no restructuring charges, Jeff Woodbury, Exxon's head of investor relations, told analysts on a conference call. In 2015, Exxon expects to spend $34 billion, and less than that in the next two years. Still, Woodbury said spending so far this year is tracking lower than planned, so it is reasonable to conclude that the final number will come in below that forecast, he said. The company will issue its latest capital plan in March, Woodbury said."},
              {one:"Industrial group Larsen & Toubro Ltd(LART.NS) has halved the growth it expects in its order book in the current financial year, reflecting weakness in its home market and undermining hopes of a pick-up in economic activity. The conglomerate, viewed as a bellwether of Asia's third-largest economy, expects orders to grow between 5 and 7 percent this fiscal year to March, Chief Financial Officer R. Shankar Raman said. Larsen, a $15 billion group with interests in engineering, construction and logistics, earlier this year predicted order growth of 15 percent. The cut in guidance sent its shares down more than 4 percent on the Sensex that closed 0.7 percent lower.",
               two:"\"The numbers are not great,\" said Motilal Oswal Securities analyst Ravi Shenoy. \"It\'s a reflection of the real conditions on the ground. It will be difficult for L&T to achieve even 5 to 7 percent (order book growth).\",To meet the lower guidance, Shenoy said Larsen needed to grow its orders by 33 percent in the next six months, after it suffered a 26 percent drop in orders in the first half. But he noted Indian clients continued to postpone capital spending while consumer demand remained weak. Larsen reported a 15.5 percent increase in its fiscal second-quarter net profit to 9.96 billion rupees ($153 million)."}
             ];



