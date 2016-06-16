//actions.js file 
function AS_AppEvents_aa916090ca5245c6ae6bf06357d4b592(eventobject) {
    return initMbaas.call(this);
}
function AS_Button_78bceff7184d42cb92cbb823c0709dde(eventobject) {
    return menuToggle.call(this);
}
function AS_Button_8083a286c6354450ada6cd1ef79a9e7f(eventobject) {
    frmNews.show();
}
function AS_Button_8ab4d11d9014430c89b90cc0c95722cf(eventobject) {
    return destroyForm.call(this);
}
function AS_Button_b1c12d4408f948cc9f0a9a72e08bb8e5(eventobject) {
    return menuToggle.call(this);
}
function AS_Button_cb408411a357401598922fcab306bd29(eventobject) {
    return login.call(this);
}
function AS_Button_d3a21809c23144c2aa25bc5db05df295(eventobject) {
    return destroyForm.call(this);
}
function AS_Form_1d532de9e8c541e78f49cea8240e1973(eventobject) {
    kony.application.exit();
}
function AS_Segment_9898983eed8e46a597ae77a572f2b328(eventobject, sectionNumber, rowNumber) {
    return newsDetails.call(this, "frmWeather");
}
function AS_Segment_b3f9ec99700e4fc99bbbfab9abe13cce(eventobject, sectionNumber, rowNumber) {
    return getNews1.call(this);
}
function AS_Segment_b85eadc5f5bb42f9887691a50c215eab(eventobject, sectionNumber, rowNumber) {
    return newsDetails.call(this, "frmNews");
}