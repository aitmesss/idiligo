var extraMenu = "<ul id='extraMenu'>" +
"<li><a href='../html/index.html'>log in</a></li>" +
"<li><a href='../html/about.html'>Sign up</a></li>" +
"<li><a href='../html/fireBrand.html'>Start session</a></li>" +
"<li><a href='../html/contact.html'>Join session</a></li>" +	
"</ul>";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='../html/index.html'>How it works</a></li>" +
"<li><a href='../html/features.html'>Features</a></li>" +
"<li><a href='../html/pricing-order.html'>Pricing&Order</a></li>" +
"<li><a href='../html/contact.html'>Support</a></li>" +
"<li><a href='../html/contact.html'>For Developers</a></li>" +
"<li><a href='../html/contact.html'>For Users</a></li>" +
"<li><a href='../html/ScriptingXML.html'>ScriptingXML</a></li>" +
"<li><a href='../html/contact.html'>Contact</a></li>" +	
"</ul>"+
extraMenu;

var footMenu = document.getElementById("nav02").innerHTML =
"<ul id='menuFooter'>" +
"<li><a href='../html/index.html'>How it works</a></li>" +
"<li><a href='../html/features.html'>Features</a></li>" +
"<li><a href='../html/pricing-order.html'>Pricing&Order</a></li>" +
"<li><a href='../html/contact.html'>Support</a></li>" +
"<li><a href='../html/contact.html'>For Developers</a></li>" +
"<li><a href='../html/contact.html'>For Users</a></li>" +
"<li><a href='../html/ScriptingXML.html'>ScriptingXML</a></li>" +
"<li><a href='../html/contact.html'>Contact</a></li>" +
"</ul>";

document.getElementById("footP").innerHTML =
"<p><small>&copy;  " + new Date().getFullYear() + " BRM3 Team</small></p>" ;
//document.getElementById("inputElement").innerHTML =
//'<input id="inputElement01" type="text" value="invoer veld0001" draggable="true" ondragstart="drag(event)"  margin-top="3px"  height="400px" width="200px" />';

function bigImg(x) {
    x.style.height = "500px";
    x.style.width = "500px";
}

function normalImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}

/* Drag-n-Drop*/
//var id = 0;
var uniqueID01 = (function() {
   var uuid = guid();
   //var id = 0; // This is the private persistent value
   // The outer function returns a nested function that has access
   // to the persistent value.  It is this nested function we're storing
   // in the variable uniqueID above.
   //window.alert(uniqueID);
   return function() { return uuid; };  // Return and increment
})(); // Invoke the outer function after defining it.

 function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
//window.alert(uniqueID);

function allowDrop(ev) {
    ev.preventDefault();
	//window.alert(guid());
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	ev.dataTransfer.effectAllowed  = "copy";
}

//var nodeCopy;
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
	var nodeCopy = document.getElementById(data).cloneNode(true);
    //nodeCopy.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) ; 
	//window.alert(guid());
	var uniqueID = guid();
	//window.alert(uniqueID);	
	nodeCopy.id = uniqueID;
	//nodeCopy.class = "newId";
	//nodeCopy.draggable="false";
	//nodeCopy.user-drag="none";
	//window.alert(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1));
	
	//nodeCopy.id =   toString(guid()) ;//maak een static counter in een aparte functie
	//window.alert(nodeCopy.id);
    ev.dataTransfer.effectAllowed  = "copy";
	ev.target.appendChild(nodeCopy);
	//ev.dataTransfer.dropEffect = 'none';
	//nodeCopy.dropEffect = "none";
	//nodeCopy.user-drag="none";
    //nodeCopy.draggable="false";
	//targetDiv
	//document.getElementById("targetDiv").user-drag="none";
	//ev.target.user-drag = "none";
	/*htmlElement.addEventListener('ondblclick', function(ev){
    if(ev.dataTransfer.dropEffect !== 'none'){
		nodeCopy.remove();
       }
    });*/
}