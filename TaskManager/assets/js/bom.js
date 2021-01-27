/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
var required = document.getElementsByClassName("collection-item");









// Display the BOM Information on the innerHTML of the elements
for (let i = 0; i < required.length; i++) {
    if (required[i].textContent == "Href(Answer)") {
        required[i].children[0].innerHTML = location.href;
    } else if (required[i].textContent == "Protocol(Answer)") {
        required[i].children[0].innerHTML = location.protocol;
    } else if (required[i].textContent == "Host(Answer)") {
        required[i].children[0].innerHTML = location.host;
    } else if (required[i].textContent == "Port(Answer)") {
        required[i].children[0].innerHTML = location.port;
    } else if (required[i].textContent == "Hostname(Answer)") {
        required[i].children[0].innerHTML = location.hostname;
    } else if (required[i].textContent == "Appname(Answer)") {
        required[i].children[0].innerHTML = navigator.appName;
    } else if (required[i].textContent == "Platform(Answer)") {
        required[i].children[0].innerHTML = navigator.platform;
    } else if (required[i].textContent == "Language(Answer)") {
        required[i].children[0].innerHTML = navigator.language;
    } else if (required[i].textContent == "CookieEnabled(Answer)") {
        required[i].children[0].innerHTML = navigator.cookieEnabled;
    } else if (required[i].textContent == "Height(Answer)") {
        required[i].children[0].innerHTML = screen.height;
    } else if (required[i].textContent == "Width(Answer)") {
        required[i].children[0].innerHTML = screen.width;
    } else if (required[i].textContent == "PixelDepth(Answer)") {
        required[i].children[0].innerHTML = screen.pixelDepth;
    } else if (required[i].textContent == "Length(Answer)") {
        required[i].children[0].innerHTML = history.length;
    } else {
        required[i].children[0].innerHTML = history.state;
    }
}