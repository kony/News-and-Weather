//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "NewsNWeather",
    appName: "NewsNWeather",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.175",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "NewsNWeather",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://acme-inc.konycloud.com/NewsNWeather/MWServlet",
    secureurl: "https://acme-inc.konycloud.com/NewsNWeather/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeCopyFBox005bd0cb50d4044();
    initializeCopyFBox07959e314e9f649();
    initializeCopyvbox0e5b866c053d44d();
    initializeFBox08b98d1da2fc643();
    initializeflexContainer15885142771();
    initializetempLocalNews();
    frmBrowserGlobals();
    frmLoginGlobals();
    frmNewsGlobals();
    frmSplashGlobals();
    frmWeatherGlobals();
    frmWeatherOldGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_aa916090ca5245c6ae6bf06357d4b592,
        showstartupform: function() {
            frmSplash.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;