vCookie = {};
// Get a specific cookie
vCookie.get = function(name) {
  return (name = (document.cookie + ';').match(new RegExp(name + '=.*;'))) && name[0].split(/=|;/)[1];
}
// Set a new cookie
vCookie.set = function(name, value, days) {
  //var e = new Date;
  //e.setDate(e.getDate() + (days || 365));
  document.cookie = name + "=" + value + ';path=/;domain=.' + document.domain;
}
// Remove a specific cookie
vCookie.remove = function( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
