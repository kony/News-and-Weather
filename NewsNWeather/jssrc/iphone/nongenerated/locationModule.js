var lat, lon;
/*****************************************************************
 *	Name    : geoPosition
 *	Author  : Kony
 *	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
 ******************************************************************/
function geoPosition() {
    kony.print("\n\n---in geo position---\n\n");

    function geoSuccessCallBack(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        //lat = 17;
        //lon = 74;
        if (lat == null) lat = 0;
        if (lon == null) lon = 0;
        kony.print("latitutde:-" + lat);
        kony.print("longitude:-" + lon);
        kony.application.dismissLoadingScreen();
        getWeatherForecast();
        //updatedLoc();
    }

    function geoErrorCallBack(positionerror) {
        kony.print("Error occured while retrieving the data:-\n" + "Error code:" + positionerror.code + " : " + positionerror.message);
        kony.application.dismissLoadingScreen();
    }
    //var positionoptions1={};
    var positionoptions = new Object();
    //var positionoptions={};
    positionoptions.enableHighAccuracy = true;
    positionoptions.timeout = 10000;
    positionoptions.maximumAge = 1000;
    watchFlag = false;
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    try {
        lat = 40.73;
        lon = -73.82;
        getWeatherForecast();
        //kony.location.getCurrentPosition(geoSuccessCallBack, geoErrorCallBack,positionoptions);
    } catch (exception) {
        alert("Exception is ::" + exception.message);
    }
}