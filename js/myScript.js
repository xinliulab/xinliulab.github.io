
var strings_id_nav_tab = ["home", "publication", "project", "continue"];
var strings_id_content = ["content_home", "content_publication", "content_project", "content_continue"];

var time = new Date();
document.getElementById("timer").innerHTML = time;
var benchmark = time.getMilliseconds();
console.log(benchmark);

// function load(){
// 	var objTo = document.getElementById("3DJS");
//     var myScript= document.createElement("p");
//     // myScript.type = "text/javascript";
//     myScript.appendChild(document.createTextNode("function functionOne(){alert(\"成功运行\"); }"));
//     objTo.appendChild(myScript);
//     // functionOne();
// }

// function load() {
//     var objTo = document.getElementById("content_continue")
//     var divtest = document.createElement("p");
//     divtest.innerHTML = "new div"
//     objTo.appendChild(divtest)
// }

function load() {
    var objTo = document.getElementById("content_continue")
    var divtest = document.createElement("div");
    divtest.innerHTML = "<script src = \"js/three.js\"> </script>"
    // divtest.type = "text/javascript";
    // var divtest.appendChild(document.createTextNode("abc"));
    objTo.insertBefore(divtest, objTo.childNodes[0]);
}


function display_home() {
		document.getElementById(strings_id_nav_tab[0]).className = "active";  
		document.getElementById(strings_id_nav_tab[1]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[2]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[3]).className = "state_idle";
		document.getElementById(strings_id_content[0]).style.display = "initial";
		document.getElementById(strings_id_content[1]).style.display = "none";
		document.getElementById(strings_id_content[2]).style.display = "none";
		document.getElementById(strings_id_content[3]).style.display = "none";
}

function display_publication() {
		document.getElementById(strings_id_nav_tab[0]).className = "state_idle";  
		document.getElementById(strings_id_nav_tab[1]).className = "active"; 	
		document.getElementById(strings_id_nav_tab[2]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[3]).className = "state_idle";
		document.getElementById(strings_id_content[0]).style.display = "none";
		document.getElementById(strings_id_content[1]).style.display = "initial";
		document.getElementById(strings_id_content[2]).style.display = "none";
		document.getElementById(strings_id_content[3]).style.display = "none";
}

function display_project() {
		document.getElementById(strings_id_nav_tab[0]).className = "state_idle"; 
		document.getElementById(strings_id_nav_tab[1]).className = "state_idle";	
		document.getElementById(strings_id_nav_tab[2]).className = "active"; 
		document.getElementById(strings_id_nav_tab[3]).className = "state_idle";
		document.getElementById(strings_id_content[0]).style.display = "none";
		document.getElementById(strings_id_content[1]).style.display = "none";
		document.getElementById(strings_id_content[2]).style.display = "initial";
		document.getElementById(strings_id_content[3]).style.display = "none";
}

function display_continue() {
		document.getElementById(strings_id_nav_tab[0]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[1]).className = "state_idle"; 	
		document.getElementById(strings_id_nav_tab[2]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[3]).className = "active"; 
		document.getElementById(strings_id_content[0]).style.display = "none";
		document.getElementById(strings_id_content[1]).style.display = "none";
		document.getElementById(strings_id_content[2]).style.display = "none";
		document.getElementById(strings_id_content[3]).style.display = "initial";
		// document.getElementById("abc").innerHTML = load();
}


