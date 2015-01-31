//initialize
var data = require("sdk/self").data;
var self = require("sdk/self");
var http = "http://www.gametime.i2.ca/scsc/booking.php?when=2015-%%-%%-%%:00&crt=%%&sp=s1";
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var order = "N";
var kaiguan = "1";
var tmr = require("sdk/timers");

var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("get-text.js")
});
//creat a button on the firefox toll aar
var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "visit Mozilla",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"

    },
    onClick: handleClick
});
//what happens when you click the icon on the tool bar
function handleClick(state) {
	text_entry.show();
}

//get what user has entered
//worker.port.emit("site", http);
text_entry.on("show",function(){
	text_entry.port.emit("show");
});
//1.http://www.gametime.i2.ca/scsc/booking.php?when=2015-01-12-10:00&crt=3&sp=s1
text_entry.port.on("daytext-entered", function (daytext) {
    http = http.replace("%%", daytext);
});
text_entry.port.on("monthtext-entered",function(monthtext){
    http = http.replace("%%", monthtext);
});
text_entry.port.on("timetext-entered", function (timetext) {
    http = http.replace("%%", timetext);
});
//main part
text_entry.port.on("courttext-entered", function (courttext) {
    http = http.replace("%%", courttext);
  
    text_entry.hide();
    tabs.open({
        url: "http://www.gametime.i2.ca/scsc/login.php",
        onReady: login
    });
    //open court site and stop 
    tmr.setTimeout(function () {
        tabs.open({
            url: http,
            onReady: check
        })
    }, 5000)
    //fill table
    tabs[tabs.length-1].attach({
            contentScriptFile: data.url("table.js")
        });
});
//self defined function
function login(tab) {
    tab.attach({
        contentScriptFile: data.url("content-script.js")
    });
}

function check(tab) {
    console.log("triger");
    var worker = tab.attach({
        contentScriptFile: data.url("checker.js")
    })
    worker.port.on("Order", function (order) {
        var loop = tmr.setInterval(function () {
            if (order == "N") {
                console.log("LOOP CONTINUEo");
                tabs.open({
                    url: http
                })
            }
            else {
                kuaiguan = "0";
                console.log("END LOOP");
                tmr.clearInterval(loop);
            }
        }, 1500)
    })
}

