vCookie = {};
// Get a specific cookie
vCookie.get = function(name) {
  if(name != null){
    return (name = (document.cookie + ';').match(new RegExp(name + '=.*;'))) && name[0].split(/=|;/)[1];
  }else{
    var vCookiesIn = document.cookie.split(';');
    var vCookiesOut = [];
    for (var i = 1 ; i <= vCookiesIn.length; i++) {
        vCookiesHolder = vCookiesIn[i-1].split('=');
        vCookiesOut.push({name : vCookiesHolder[0], value : vCookiesHolder[1]});
    }
    return vCookiesOut;
  }
}
// Set a ne//w cookie
vCookie.set = function(name, value) {
  //var e = new Date;
  //e.setDate(e.getDate() + (days));
  document.cookie = name + "=" + value + ';path=/;domain=.' + document.domain;
}
// Remove a specific cookie
vCookie.remove = function( name ) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.' + document.domain;
}
