function PostData() {
// 1. Create XHR instance - Start
var xhr;
if (window.XMLHttpRequest) {
xhr = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
xhr = new ActiveXObject("Msxml2.XMLHTTP");
}
else {
throw new Error("Ajax is not supported by this browser");
}
// 1. Create XHR instance - End

// 2. Define what to do when XHR feed you the response from the server - Start
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status == 200 && xhr.status < 300) {
    document.getElementById('div1').innerHTML = xhr.responseText;
    }
}
}
// 2. Define what to do when XHR feed you the response from the server - Start

var userid = document.getElementById("userid").value;

// 3. Specify your action, location and Send to the server - Start
xhr.open('POST', '/ajax');
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("userid=" + userid);
// 3. Specify your action, location and Send to the server - End
}
