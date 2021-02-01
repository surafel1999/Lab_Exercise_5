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
var required = document.querySelectorAll(".badge");


var value = [location.href, location.protocol, location.host, location.port, location.hostname, navigator.appName, 
    navigator.appVersion, navigator.platform, navigator.language, navigator.cookieEnabled, screen.height, screen.width,
    screen.pixelDepth, history.length, history.state];






// Display the BOM Information on the innerHTML of the elements
for (let i = 0; i < required.length; i++) {
    required[i].innerHTML = value[i];
}