function cookieHandler(info) {
    if (info.cause == "explicit" && info.cookie.domain == "8tracks" && (info.cookie.name == "country_code2" || info.cookie.name == "country_code3")) {
        // Overwrite cookie.
        var replacementCookie = info.cookie;
        replacementCookie.value = "US";
        chrome.cookies.set(replacementCookie);
    }
}

chrome.cookies.onChanged.addListener(function (info) {
    cookieHandler(info);
    console.log("onChanged" + JSON.stringify(info));
});

// Delete existing cookie on startup.
chrome.cookies.remove({name: "country_code2", url: "http://8tracks.com"});
chrome.cookies.remove({name: "country_code2", url: "https://8tracks.com"});
chrome.cookies.remove({name: "country_code3", url: "http://8tracks.com"});
chrome.cookies.remove({name: "country_code3", url: "https://8tracks.com"});
