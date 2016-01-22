function flipper(container,front,back,sec,persp) {

	var trans = kony.ui.makeAffineTransform();
	trans.rotate3D(180, 0, 1, 0);
	back.transform = trans;
	var side = 0, inprogress = 0, time= sec/2;
	
	return function(){
		if(inprogress) 
			return;
		
		if(!side){
			var trans1 = kony.ui.makeAffineTransform(); 
			trans1.setPerspective(persp);
			trans1.rotate3D(90, 0, 1, 0);
			var anim1 = kony.ui.createAnimation({ 100: { transform: trans1 } });
			container.animate(anim1, { duration: time, iterationCount: 1, fillMode: kony.anim.FILL_MODE_FORWARDS }, 
				{
					animationStart: function(){
						inprogress = 1;
					},
					animationEnd: function(){
						front.isVisible = false;
						var trans1 = kony.ui.makeAffineTransform();
						trans1.setPerspective(persp);
						trans1.rotate3D(90, 0, 1, 0);
						var trans2 = kony.ui.makeAffineTransform();
						trans2.setPerspective(persp);
						trans2.rotate3D(180, 0, 1, 0);
						container.animate(kony.ui.createAnimation({
							0:{
								transform: trans1
							},
							100: {
								transform: trans2
							}
						}), {
							duration: time,
							iterationCount: 1,
							fillMode: kony.anim.FILL_MODE_FORWARDS
						},{ 
							animationEnd: function(){ 
								side=1; inprogress=0;
                              //cb && cb.call(this,side);
							} 
						});
					}
				}
			);
		}else{
			var trans1 = kony.ui.makeAffineTransform(); 
			trans1.setPerspective(persp);
			trans1.rotate3D(180, 0, 1, 0);
			var trans2 = kony.ui.makeAffineTransform(); 
			trans2.setPerspective(persp);
			trans2.rotate3D(90, 0, 1, 0);
			var anim1 = kony.ui.createAnimation({ 0: { transform: trans1 }, 100: { transform: trans2 } });
			container.animate(anim1, { duration: time, iterationCount: 1, fillMode: kony.anim.FILL_MODE_FORWARDS }, 
				{
					animationStart: function(){
						inprogress = 1;
					},
					animationEnd: function(){
						front.isVisible = true;
						var trans1 = kony.ui.makeAffineTransform();
						trans1.setPerspective(persp);
						trans1.rotate3D(90, 0, 1, 0);
						var trans2 = kony.ui.makeAffineTransform();
						trans2.setPerspective(persp);
						trans2.rotate3D(0, 0, 1, 0);
						container.animate(kony.ui.createAnimation({
							0:{
								transform: trans1
							},
							100: {
								transform: trans2
							}
						}), {
							duration: time,
							iterationCount: 1,
							fillMode: kony.anim.FILL_MODE_FORWARDS
						},{ 
							animationEnd: function(){ 
								side=0; inprogress=0; 
                              //cb && cb.call(this,side);
							} 
						});
					}
				}
			);
		}
	}
}


function onClickBurgerMenu(){
	if(!glbScrollBegining){
		kony.print("Entered True");
		glbScrollBegining = true;
		frm3DWithBurger.flxScrollMain.scrollToBeginning();
	}else{
		kony.print("Entered False");
		glbScrollBegining = false;
		frm3DWithBurger.flxScrollMain.scrollToEnd();
	} 
}

var menuPos;
function menuToggle()
{
	kony.print("\n--in menu toggle");
	if(typeof menuPos==='undefined'){
      kony.print("menuPos undefined");
		menuPos="90%";}
	else if(menuPos==="90%")
		menuPos="0%";
	else if(menuPos==="0%")
		menuPos="90%";
  kony.print("menuPos:-"+menuPos);
   frm3DWithBurger.flexRight.animate(
			  kony.ui.createAnimation({100:{left:menuPos,"stepConfig":{}}}),
			  {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
			  {animationEnd: function() {
			  } 
		});
}

news = "false";
staraward = "false";
champion = "false";
alaska = "false";
wipro = "false";
holiday = "false";
brics = "false";
exon = "false";
larsen = "false";
function onClickReadMore(){
  if(news == "true"){
    frmInfo.lblHeaderName.text = "Sports";
    frmInfo.lblTitle.text = "News Title";
    frmInfo.lblDescription.text = "Cometh the hour, Cometh the man. Virat Kohli put on a magnificent show with the bat for India as he blasted his 23rd century. For South Africa, AB de Villiers put on a brave show but his 22nd century could not help the Proteas get over the line. Catch all the moments of the match here.";
  }else if(staraward == "true"){
    frmInfo.lblHeaderName.text = "Sports";
    frmInfo.imgOne.src = "ks.png";
    frmInfo.lblTitle.text = "Star Award News";
    frmInfo.lblDescription.text = "Kapil Dev, India’s 1983 World Cup-winning captain, has asserted that Sachin Tendulkar never could realise his full potential as a batsman because he had been bogged down by the Bombay school of cricket, according to Khaleej Times.";
  }else if(champion == "true"){
    frmInfo.lblHeaderName.text = "Sports";
    frmInfo.imgOne.src = "ds.png";
    frmInfo.lblTitle.text = "Champion";
    frmInfo.lblDescription.text = "Virender Sehwag has denied having a fall out with MS Dhoni during the period when India was being coached by Greg Chappell, IBNLive reports. The 37-year-old also claimed that he never held an interest in becoming captain of the national team.";
  }else if(alaska == "true"){
    frmInfo.lblHeaderName.text = "Entertainment";
    frmInfo.imgOne.src = "shell.png";
    frmInfo.lblTitle.text = "Alaska";
    frmInfo.lblDescription.text = "Royal Dutch Shell reported a third quarter loss of $7.4 billion Thursday as it re-organized and cancelled projects, including drilling in Alaska, to cope with the plunge in oil prices.";
  }else if(wipro == "true"){
    frmInfo.lblHeaderName.text = "Entertainment";
    frmInfo.imgOne.src = "wipro.png";
    frmInfo.lblTitle.text = "Wipro";
    frmInfo.lblDescription.text = "The strategic deal envisages transforming the retailer's enterprise software landscape and upgrading its data centre infrastructure for superior performance,the IT bellwether said in a statement here. The Oslo-based century old cooperative firm claims to have 33 percent market share, with 1,500 stores and 1.3-million members across the Nordic country.";
  }else if(holiday == "true"){
    frmInfo.lblHeaderName.text = "Entertainment";
    frmInfo.imgOne.src = "friendlycity.png";
    frmInfo.lblTitle.text = "Friendly City";
    frmInfo.lblDescription.text = "Most of us need a holiday after a holiday with the kids, but a family trip need not be so painful. While you and your partner might be craving the turquoise waters of Bora Bora this summer, you might want to reconsider this as a destination if you’ve got the youngsters in tow. To ease the stress, we’ve picked our 10 favourite cities worth visiting with the whole family.";
  }else if(brics == "true"){
    frmInfo.lblHeaderName.text = "Regional";
    frmInfo.imgOne.src = "brics.png";
    frmInfo.lblTitle.text = "BRICS";
    frmInfo.lblDescription.text = "The BRICS nations - Brazil, Russia, India, China and South Africa - have agreed for co-investment of resources for supporting multilateral Research and Development (R&D) Projects in mutually agreed areas. Union Minister for Science and Technology and Earth Sciences Harsh Vardhan, who led the Indian delegation, signed a joint declaration called -Moscow Declaration at the third meeting of the BRICS Ministers for Science, Technology and Innovation held in Moscow on October 28.";
  }else if(exon == "true"){
    frmInfo.lblHeaderName.text = "Regional";
    frmInfo.imgOne.src = "exxon.png";
    frmInfo.lblTitle.text = "ExxonMobil";
    frmInfo.lblDescription.text = "Exxon Mobil Corp said on Friday third-quarter profit fell 47 percent on low crude prices but results were better than expected, helped by higher profit in the oil company's refining business. Crude prices have fallen more than 50 percent from last year's high above $100 a barrel. While the crude decline hurt Exxon's largest oil and gas business, it also boosted profit margins in refining by lowering feedstock costs. International refining was the surprise that was greater-than-anticipated, said Brian Youngberg, senior oil analyst at Edward Jones.";
  }else if(larsen == "true"){
    frmInfo.lblHeaderName.text = "Regional";
    frmInfo.imgOne.src = "lnnt.png";
    frmInfo.lblTitle.text = "LARSEN & TOUBRO";
    frmInfo.lblDescription.text = "Industrial group Larsen & Toubro Ltd(LART.NS) has halved the growth it expects in its order book in the current financial year, reflecting weakness in its home market and undermining hopes of a pick-up in economic activity. The conglomerate, viewed as a bellwether of Asia's third-largest economy, expects orders to grow between 5 and 7 percent this fiscal year to March, Chief Financial Officer R. Shankar Raman said. Larsen, a $15 billion group with interests in engineering, construction and logistics, earlier this year predicted order growth of 15 percent. The cut in guidance sent its shares down more than 4 percent on the Sensex that closed 0.7 percent lower.";
  }
    frmInfo.show();
}