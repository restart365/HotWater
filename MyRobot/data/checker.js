a = document.getElementsByTagName("b");
p = document.getElementsByTagName("p")
if (p[3].textContent.search("Sorry") >= 0) {
    self.port.emit("Order", "N");
    console.log("false")
}

if (a[0].textContent.search("Shen, Yi") > 0) {
    self.port.emit("Order", "Y");
    console.log("skafldj");
   
}


