MBaaSConfig = {
    //userId:"omkar.thadem@kony.com",
    //password:"Omkar@KH2041",
    userId: "dharmendra.kumar@kony.com",
    password: "Password_1",
    "AppKey": "6a6157cbf176019edda751bea6b62cf8",
    "AppSecret": "158badbf5bbdab031c11e3a902408fd8",
    "IdentityService": "userstore",
    "NEWS_SERVICE_NAME": "KonyNews",
    "NEWS_OPERATION_NAME": "GetNewsForCategory",
    "LOCAL_NEWS_SERVICE_NAME": "NewsNForecast",
    "LOCAL_NEWS_OPERATION_NAME": "NewsNForecast",
    "ServiceURL": "https://100003520.auth.konycloud.com/appconfig"
};
configObject = {
    keys: {
        "APP_KEY": "652f2e9e85b30cf3481db3bd05c57be3",
        "APP_SECRET": "9ea8676991f8d70b9295e3f0fd211b3a",
        "SERVICE_URL": "https://100000032.auth.konycloud.com/appconfig"
    },
    services: {
        news: {
            "SERVICE_NAME": "News",
            "OPERATION_NAME": "GetNewsForCategory"
        },
        local: {
            "SERVICE_NAME": "NewAndWeather",
            "OPERATION_NAME": "LocalNewsWeather"
            //"SERVICE_NAME" : "NewsNForecast",
            //"OPERATION_NAME" : "NewsNForecast"
        }
    }
};