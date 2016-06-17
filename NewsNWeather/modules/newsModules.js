//Type your code here
var newsList;
var jsonResponse;
var imgRegExp=/src="[\S]+\"/g;
var pos;
var intgService;
var d,weekDay;
var days,frmName;
var menuLeftPos;
//document.getElementById("demo").innerHTML = days[d.getDay()];
/**
****************************************************************
*	Name    : menuToggle
*	Author  : Kony
*	Purpose : To perform toggle
****************************************************************
*/
function menuToggle()
{
	
	if(typeof menuLeftPos==='undefined')
		menuLeftPos="90%";
	else if(menuLeftPos==="90%")
		menuLeftPos="0%";
	else if(menuLeftPos==="0%")
		menuLeftPos="90%";
  kony.print("\n--in menu toggle-->"+menuLeftPos);
  //frmNews.flexNewsContainer
   frmNews.flexNewsContainer.animate(
			  kony.ui.createAnimation({100:{left:menuLeftPos,"stepConfig":{}}}),
			  {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
			  {animationEnd: function() {
			  } 
		});
}
/**
****************************************************************
*	Name    : getNews
*	Author  : Kony
*	Purpose : To get the news data.
****************************************************************
*/
function getNews(category){
 // kony.alert(JSON.stringify(eventObj));
	kony.print("\n---in getNews---\n");
  	if(category==="w"){
		frmNews.lblFrmNewsTitle.text="World";
	}else	if(category==="n"){
		frmNews.lblFrmNewsTitle.text="U.S.";
	}else if(category==="b"){
		frmNews.lblFrmNewsTitle.text="Business";
	}else	if(category==="tc"){
		frmNews.lblFrmNewsTitle.text="Technology";
	}else	if(category==="e"){
		frmNews.lblFrmNewsTitle.text="Entertainment";
	}else	if(category==="s"){
		frmNews.lblFrmNewsTitle.text="Sports";
	}else if(category==="snc"){
		frmNews.lblFrmNewsTitle.text="Science";
	}else if(category==="m"){
		frmNews.lblFrmNewsTitle.text="Health";
	}else if(category==="h"){
		frmNews.lblFrmNewsTitle.text="Top Stories";
	}
  
  	newsList=[];
  	frmNews.segmentNews.removeAll();
	try{
		//Making MBaaS client instance to invoke getIntegrationService method.
		if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
			kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
		else
			kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		intgService = client.getIntegrationService(configObject.services.news.SERVICE_NAME);//Accounts is service name and accountsClient is Accounts integration service instance
		intgService.invokeOperation(configObject.services.news.OPERATION_NAME,{},{"category":category}, integSuccessCallback, integFailureCallback);
	 }catch(excp){
	 	 kony.application.dismissLoadingScreen();
	 	kony.print(JSON.stringify(excp));
	 }
  function integSuccessCallback(response){
 /* if(kony.os.deviceInfo().name==="android")
  		jsonResponse=response;
  else
	jsonResponse=JSON.parse(response);*/
    jsonResponse=response;
    kony.print("\nresponse:-"+JSON.stringify(jsonResponse));
    var responseLength=(JSON.stringify(jsonResponse)).length;
    if(responseLength===0)
      {
        alert("No News Found\nPlease try later");
        return;
      }
    kony.print("\n--length-->"+responseLength);
    try{
	var len=jsonResponse["news_list"].length;
	var description,descriptionArray;
	var imgSrc;
	var news={};
	var start,end,descLen;	
	for(var i=0;i<len;i++)
	{
		news={};
		kony.print(i+".\n"+JSON.stringify(jsonResponse["news_list"][i]));
		//msg.imgProfile={"src":"profile1.png","top": "8dp","right": "0%","containerWeight":5};
		//news.richTextTitle={"text":jsonResponse["news_list"][i]["news_item"]["title"]};
		news.lblTitle={"text":jsonResponse["news_list"][i]["news_item"]["title"]};
		description=jsonResponse["news_list"][i]["news_item"]["description"];
		kony.print("\n---full description--\n"+description);
		start=description.search('img src="//');
		end=start+10;
		kony.print("\n--start-->"+start);
		while(description[end]!='"'){
		//	kony.print(description[end]);
			end++;
		}
		imgSrc=description.substring(start+9,end);
		imgSrc="http:"+imgSrc;
		kony.print("\n--image src--\n"+imgSrc);
		news.imgNews={"src":imgSrc,"skin":"CopyslImage08be8eaec7c0941"};
		descriptionArray=description.split("<font size=\"-1\">");
		kony.print("\ndescription-->"+descriptionArray[2]);
		descLen=descriptionArray[2].length;
		if(descLen>120)
			descLen=120;
		description=descriptionArray[2].substring(0,descLen)+"..";
		news.richTextDesc={"text":description};
		//news.lblNewsDesc={"text":descriptionArray[2]};
		newsList.push(news);
		kony.print("\n--link-->"+JSON.stringify(jsonResponse["news_list"][i]["news_item"]["link"]));
		kony.print("\n--desc after spliting--\n"+descriptionArray[1]);
	}
	frmNews.segmentNews.setData(newsList);
    }catch(excp){
      kony.print("\n--Exceprtion in json response->"+JSON.stringify(excp));
    }
/*	if(typeof pos !=undefined && pos==9)
	{
		var weatherArray=jsonResponse["ForecastList"];
		kony.print("\n--weatherArray0"+JSON.stringify(weatherArray[0]));
	}*/
//	kony.application.dismissLoadingScreen();
//	frmNews.show();
    if(firstLogin===true)
     { 
     	kony.print("\n-----displaying news form------\n");
       frmNews.show();
       firstLogin=false;
     }
    if(firstLogin===false){
  		frmNews.flexNewsContainer.animate(
			  kony.ui.createAnimation({100:{left:"0%","stepConfig":{}}}),
			  {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
			  {animationEnd: function() { }	});
	}
    kony.application.dismissLoadingScreen();
	}
	function integFailureCallback(error){
	
		kony.print("\n--error in getNews---\n"+JSON.stringify(error));
		kony.application.dismissLoadingScreen();
	}
}
/**
****************************************************************
*	Name    : newsDetails
*	Author  : Kony
*	Purpose : To display the news details in the browser form.
****************************************************************
*/
function newsDetails(frmID){
	var index;
	frmName=frmID;
	if(frmID==="frmNews"){
  		kony.print("selected indices:-  "+(frmNews.segmentNews.selectedIndices)[0][1]);
  		index=(frmNews.segmentNews.selectedIndices)[0][1];
       	if(kony.os.deviceInfo().name==="android")
    		{
      		index=index[0];
      		kony.print("\n--android-->");
    		}
  	}else if(frmID==="frmWeather"){
  		kony.print("selected indices:-  "+(frmWeather.segmentNews.selectedIndices)[0][1]);
  		index=(frmWeather.segmentNews.selectedIndices)[0][1];
       if(kony.os.deviceInfo().name==="android")
    	{
      		index=index[0];
      		kony.print("\n--android-->");
    	}
  	}
	//kony.print("\n index"+JSON.stringify(index));
	kony.print("\nurl-->"+jsonResponse["news_list"][index]["news_item"]["link"]);
	frmBrowser.browserNews.requestURLConfig={"URL":jsonResponse["news_list"][index]["news_item"]["link"],"requestMethod":constants.BROWSER_REQUEST_METHOD_GET};
	frmBrowser.show();
}
/**
**************************************************************************************
*	Name    : destroyForm
*	Author  : Kony
*	Purpose : To distroy the current form and display either news form or weather form.
***************************************************************************************
*/
function destroyForm(){
//frmBrowser.browserNews.clearHistory();
   kony.print("\n--in destroy form--"+frmName);
	frmBrowser.destroy();
	if(frmName==="frmNews")
		frmNews.show();
	else if(frmName==="frmWeather")
		frmWeather.show();
}


//var city,zipcode;
/**
****************************************************************
*	Name    : getWeatherForecast
*	Author  : Kony
*	Purpose : To get the weather forecast with news data.
****************************************************************
*/
/*function weatherIntegSuccessCallback1(response)
	{
		var weatherList=[];
		//response=JSON.parse(response);
		frmWeather.lblFrmWeatherTitle.text=response["cityName"]+","+response["country"];
		var day;
		var weather;
		var temp;
		var minTemp,maxTemp;
		var imgUrl;
		var weatherData,weatherDataList=[];
		var lblDay="lblDay";
		var imgCloud;
		var lblMinTemp,lblMaxTemp;
		for(var i=1;i<8;i++)
		{
			day=JSON.parse(response["day"+i]);
			kony.print("\n"+i+" day-"+JSON.stringify(day));
			weather=day["weather"];
			//temp=day["temp"];
			minTemp=((day["temp"]["min"]-273.5).toFixed(2))+"°C";
			maxTemp=((day["temp"]["max"]-273.5).toFixed(2))+"°C";
			imgUrl="http://openweathermap.org/img/w/"+day["weather"][0]["icon"]+".png";
			lblDay="lblDay"+i;
			imgCloud="imgCloud"+i;
			lblMinTemp="lblMinTemp"+i;
			lblMaxTemp="lblMaxTemp"+i;
			var count=(weekDay+i-1)%7;
			kony.print("\n-count-"+count);
			kony.print("\nDay--"+days[(weekDay+i-1)%7]);
			frmWeather[lblDay].text=days[(weekDay+i-1)%7];
			frmWeather[imgCloud].src=imgUrl;
			frmWeather[lblMinTemp].text=minTemp;
			frmWeather[lblMaxTemp].text=maxTemp;
		}
		//setting news............
		if(kony.os.deviceInfo().name==="android")
  			jsonResponse=response;
  		else
			jsonResponse=response;
		var len=jsonResponse["news_list"].length;
		var description,descriptionArray;
		var imgSrc;
		var news={};
		var start,end,descLen;
		kony.print("\n-----clear----\n");
		for(var i=0;i<len;i++)
		{
			news={};
			kony.print(i+".\n"+JSON.stringify(jsonResponse["news_list"][i]));
			news.lblTitle={"text":(jsonResponse["news_list"][i]["news_item"]["title"]).substring(0,25)+".."};
			description=jsonResponse["news_list"][i]["news_item"]["description"];
			kony.print("\n---full description--\n"+description);
			start=description.search('img src="//');
			end=start+10;
			kony.print("\n--start-->"+start);
			while(description[end]!='"'){
				end++;
			}
			imgSrc=description.substring(start+9,end);
			imgSrc="http:"+imgSrc;
			kony.print("\n--image src--\n"+imgSrc);
			news.imgNews={"src":imgSrc,"skin":"sknKonyImg"};
			descriptionArray=description.split("<font size=\"-1\">");
			kony.print("\ndescription-->"+descriptionArray[2]);
			descLen=descriptionArray[2].length;
			if(descLen>120)
				descLen=120;
			description=descriptionArray[2].substring(0,descLen)+"..";
			news.richTextDesc={"text":description};
			newsList.push(news);
			kony.print("\n--link-->"+JSON.stringify(jsonResponse["news_list"][i]["news_item"]["link"]));
			kony.print("\n--desc after spliting--\n"+descriptionArray[1]);
		}
		kony.print("\n-----clear----\n");
		frmWeather.segmentNews.setData(newsList);
		frmWeather.show();
		kony.application.dismissLoadingScreen();
	}
*/
//****************************************
function weatherIntegSuccessCallback(response) {
    kony.print("local response:-" + JSON.stringify(response));
	var foreCastList=response["ForecastList"];	
	var city=response["city"];
	var newsList=response["news_list"];
	var state=response["state"];
	var temperature=response["temp"];
	var zipCode=response["zip"];
	var day;
	var minTemp,maxTemp;
	var imgUrl;
	var lblDay="lblDay";
	var imgCloud;
	var lblMinTemp,lblMaxTemp;
	kony.print("local foreCastList:-" + JSON.stringify(foreCastList));
	kony.print("local city:-" +city );
	kony.print("local newsList:-" + JSON.stringify(newsList));
	kony.print("local state:-" +state );
	kony.print("local temperature:-" +temperature );
	kony.print("local zipCode:-" +zipCode );
    frmWeather.lblFrmWeatherTitle.text = city+ "," +state;
    kony.application.dismissLoadingScreen();
	for(var i=0;i<7;i++){
		day=foreCastList[i];
// 		minTemp=((day["low"]-273.5).toFixed(2))+"°C";
// 		maxTemp=((day["high"]-273.5).toFixed(2))+"°C";
      minTemp=day["low"];
      maxTemp=day["high"];
		//imgUrl="http://openweathermap.org/img/w/"+day["weather"][0]["icon"]+".png";
		lblDay="lblDay"+(i+1);
		imgCloud="imgCloud"+(i+1);
		lblMinTemp="lblMinTemp"+(i+1);
		lblMaxTemp="lblMaxTemp"+(i+1);
		imgUrl=getWeatherImage(day["desc"]);
		frmWeather[lblDay].text=days[(weekDay+i)%7];
		frmWeather[imgCloud].src=imgUrl;
		frmWeather[lblMinTemp].text=minTemp;
		frmWeather[lblMaxTemp].text=maxTemp;
		kony.print("\n"+i+" day-"+JSON.stringify(day));
		//frmWeather.show();
	}
  //setting news data...
  newsList=[];
  if(kony.os.deviceInfo().name==="android")
  			jsonResponse=response;
  		else
			jsonResponse=response;
	var len=jsonResponse["news_list"].length;
	var description,descriptionArray;
	var imgSrc;
	var news={};
	var start,end,descLen;
	kony.print("\n-----clear----\n");
	for(var i=0;i<len;i++)
	{
		news={};
		kony.print(i+".\n"+JSON.stringify(jsonResponse["news_list"][i]));
		news.lblTitle={"text":(jsonResponse["news_list"][i]["news_item"]["title"]).substring(0,25)+".."};
		description=jsonResponse["news_list"][i]["news_item"]["description"];
		kony.print("\n---full description--\n"+description);
		start=description.search('img src="//');
		end=start+10;
		kony.print("\n--start-->"+start);
		while(description[end]!='"'){
			end++;
		}
		imgSrc=description.substring(start+9,end);
		imgSrc="http:"+imgSrc;
		kony.print("\n--image src--\n"+imgSrc);
		news.imgNews={"src":imgSrc,"skin":"sknKonyImg"};
		descriptionArray=description.split("<font size=\"-1\">");
		kony.print("\ndescription-->"+descriptionArray[2]);
		descLen=descriptionArray[2].length;
		if(descLen>120)
			descLen=120;
		description=descriptionArray[2].substring(0,descLen)+"..";
		news.richTextDesc={"text":description};
		newsList.push(news);
		kony.print("\n--link-->"+JSON.stringify(jsonResponse["news_list"][i]["news_item"]["link"]));
		kony.print("\n--desc after spliting--\n"+descriptionArray[1]);
	}
	kony.print("\n-----clear----\n");
	frmWeather.segmentNews.setData(newsList);
  	frmWeather.show();
}



function getWeatherImage (desc) {
  switch(desc) {
	case "Partly Cloudy":
		return "weather3.png";
		break;
	case "Mostly Cloudy":
		return "weather5.png";
		break;
	case "Sunny":
		return "weather4.png";
		break;
	}
}
//***************************************************
function getWeatherForecast(){
	
	function integFailureCallback(error){
		kony.print("\n in failure:-"+JSON.stringify(error));
		kony.application.dismissLoadingScreen();
	}
	frmWeather.segmentNews.removeAll();
	
	try{
		//Making MBaaS client instance to invoke getIntegrationService method.
	if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		accountsClient = client.getIntegrationService(configObject.services.local.SERVICE_NAME);//Accounts is service name and accountsClient is Accounts integration service instance
		//accountsClient.invokeOperation(Accounts service name,headers,query params, SuccessCallback,FailureCallback);
	 	accountsClient.invokeOperation(configObject.services.local.OPERATION_NAME,{},{"lat":lat.toString(),"lon":lon.toString()}, weatherIntegSuccessCallback, integFailureCallback);
	 }catch(excp){
	 		kony.application.dismissLoadingScreen();
	 		kony.print(JSON.stringify(excp));
	 }
}
/**
****************************************************************
*	Name    : showNewsForm
*	Author  : Kony
*	Purpose : To show news form.
****************************************************************
*/
function showNewsForm(){
 frmNews.flexNewsContainer.animate(
			  kony.ui.createAnimation({100:{left:"90%","stepConfig":{}}}),
			  {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
			  {animationEnd: function() {
					
			  } 
		});
}
/**
****************************************************************
*	Name    : getNews1
*	Author  : Kony
*	Purpose : To get news.
****************************************************************
*/
function getNews1(){
  var index=(frmNews.SegNewsOptions.selectedIndices)[0][1];
  kony.print("selected indices:-  "+index);
  if(kony.os.deviceInfo().name==="android")
    {
      index=index[0];
      kony.print("\n--android-->");
    }
  else
  		index=parseInt(index);
  //kony.print("selected indices:-  "+(frmWeather2.SegNewsOptions.selectedIndices)[0][1]);
  switch(index){
    case 0: getNews("h");break;
    case 1: getNews("w");break;
    case 2: getNews("n") ;break;
    case 3: getNews("b");break;
    case 4: getNews("tc");break;
    case 5: getNews("e") ;break;
    case 6: getNews("s");break;
    case 7: getNews("snc");break;
    case 8: getNews("m");break;
    case 9: geoPosition();break;
    default:
      kony.print("\n--index-->"+index);
  }
  menuLeftPos="0%";
}
