// Taken from: http://stackoverflow.com/a/30387077/3918512
function removeItem(sKey, sPath, sDomain) {
    document.cookie = encodeURIComponent(sKey) +
        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
        (sDomain ? "; domain=" + sDomain : "") +
        (sPath ? "; path=" + sPath : "");
}

removeItem("country_code2");
removeItem("country_code3");

// Set the cookie to US.
document.cookie="country_code2=US";
document.cookie="country_code3=US";
