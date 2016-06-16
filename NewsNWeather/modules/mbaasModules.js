//Type your code here
var client;
var identityInstance;
var firstLogin;
var saveUser;
/**
****************************************************************
*	Name    : initMbaas
*	Author  : Kony
*	Purpose : This function will initialize MBaaS client so that we can use the MBaaS services.The initialization method fetches the configuration from MBaaS and saves in the cache. Later, the application uses the cached configuration. It is a synchronous call.
****************************************************************
*/
function initMbaas() 
{
  	saveUser=false;
  	kony.print("\n---in init mbaas----\n");
	d = new Date();
	weekDay=d.getDay();
	days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  	menuPos="0%";
	function initSuccessCallBack(res)//res is of type JSON and which will have MBaaS application configuration. 
	{
		kony.print("\n----in init success-----\n");
      	//frmLogin.txtBoxUserName.text=MBaaSConfig.userId;
      	//frmLogin.txtBoxPassword.text=MBaaSConfig.password;
      	getNews("h");
      	frmSplash.destroy();
      	frmNews.show();
      	//frmLogin.show();
		//kony.application.dismissLoadingScreen();
		firstLogin=true;
	}
  	function initFailureCallBack(error)
	{
		var start,end;
		var basicConf = {
            message: "Failure",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Initialization"
        };
    	kony.ui.Alert(basicConf, {});
    	kony.application.dismissLoadingScreen();
      kony.print("\n---init failed----\n");
	}
    client = new kony.sdk(); //Creating MBaaS client instance 
	//frmLogin.textUserName.text =MBaaSConfig.DefaultUsername;
	//frmLogin.textPassword.text=MBaaSConfig.DefaultPassword;
	//client =  new kony.mbaas();
   if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad"  )
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
		
    //MBaaS client initialization using init method.
    client.init(configObject.keys.APP_KEY,// App key of application to use MBaaS APIs
     	configObject.keys.APP_SECRET,// App secret of application to use MBaaS APIs
     	 configObject.keys.SERVICE_URL,// URL for App's Service Document   
     	 initSuccessCallBack,//Initialization success callback 
      	initFailureCallBack);//Initialization failure callback
}
/**
****************************************************************
*	Name    : login
*	Author  : Kony
*	Purpose : To login in MBaaS.
****************************************************************
*/
function login(){
  getNews("h");
}
function login1() 
{
	kony.print("\n---in login---\n");
	if(frmLogin.txtBoxUserName.text ===""||frmLogin.txtBoxUserName.text ===null||frmLogin.txtBoxPassword.text===""||frmLogin.txtBoxPassword.text===null)
	{
		alert("Login Id and Password should not be empty");
		return;
	}
	else{
		try {
			if(kony.os.deviceInfo().name === "iPhone" || kony.os.deviceInfo().name === "iPhone Simulator" ||kony.os.deviceInfo().name === "iPad"  )
				kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
			else
				kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
	    	//Let's make use of MBaaS client instance to invoke getIdentityService method 
	        identityInstance = client.getIdentityService(MBaaSConfig.IdentityService);//CRM is the provider name or identity name of your Identity service and identityInstance is Identity service instance for handling login/logout calls.
	    	kony.print("\n---identity success---\n"+JSON.stringify(identityInstance));
	    	// Invoking login mehod using identityInstance will do login with the given credentials asynchronously and executes the given callback. 				
	     	identityInstance.login({"userid":frmLogin.txtBoxUserName.text,"password":frmLogin.txtBoxPassword.text},
	     	identitySuccess,//login success callback
	     	identityError );//login error callback
			//{"userid": frmLogin.textUserName.text,"password": frmLogin.textPassword.text}
	    }catch (exception) {
	    	alert(JSON.stringify(exception));
	        kony.print("exception " + exception.message);
	       kony.application.dismissLoadingScreen();
	    }
	}
  	function identitySuccess(res){
		kony.print("\n------------in login success--------\n");
    	firstLogin=true;
      if(saveUser===true)
        {
          kony.store.setItem("USERID",frmLogin.txtBoxUserName.text);
          kony.store.setItem("PASSWORD",frmLogin.txtBoxPassword.text);
        }
    	kony.application.dismissLoadingScreen();
    	getNews("h");
      
	}
  	function identityError(error) {
      saveUser=false;
		kony.application.dismissLoadingScreen();
		kony.print("\n----login failed--->\n"+JSON.stringify(error));
    	var basicConf = {
        	message: JSON.stringify(error),//display the error message
       	 	alertType: constants.ALERT_TYPE_INFO,
       	 	alertTitle: "Login Failure"
    	};
    	kony.ui.Alert(basicConf, {});    
	}
}
/**
****************************************************************
*	Name    : checkBoxSelection
*	Author  : Kony
*	Purpose : callback event of checkbox. 
****************************************************************
*/
function checkBoxSelection(){
  kony.print("\n-selectedKeys->"+JSON.stringify(frmLogin.chkBoxRemeber.selectedKeys));
  var len=JSON.stringify(frmLogin.chkBoxRemeber.selectedKeys).length;
  kony.print("\nlength:-"+len);
  if(len==8)
    saveUser=true;
  else
    saveUser=false;
}
/**
****************************************************************
*	Name    : frmLoginPreShow
*	Author  : Kony
*	Purpose : Called in preShow of login.
****************************************************************
*/
function frmLoginPreShow(){
  var userId=kony.store.getItem("USERID");
  var password=kony.store.getItem("PASSWORD");
  if(userId!==null)
    {
      frmLogin.txtBoxUserName.text=userId;
      frmLogin.txtBoxPassword.text=password;
    }else
      return;
}