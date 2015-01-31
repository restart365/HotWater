var month=document.getElementById("month-box");
var day=document.getElementById("day-box");
var time=document.getElementById("time-box");
var court = document.getElementById("court-box");
var submit = document.getElementById("button");

submit.addEventListener("click", function onkeyup(event) {
        self.port.emit("monthtext-entered", month.value);
        self.port.emit("daytext-entered", day.value);
        self.port.emit("timetext-entered", time.value);
        self.port.emit("courttext-entered", court.value);
        court.value = '';
        time.value = '';
        day.value = '';
        month.value = '';
},false);

self.port.on("show", function onShow() {
    time.focus();
});
