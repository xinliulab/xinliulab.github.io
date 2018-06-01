
var strings_id_nav_tab = ["publication", "experience", "project", "continue"];
var strings_id_content = ["content_publication", "content_experience", "content_project", "content_continue"];

var time = new Date();
document.getElementById("timer").innerHTML = time;
var benchmark = time.getMilliseconds();
console.log(benchmark);


function display_publication() {
		document.getElementById(strings_id_nav_tab[0]).className = "active";  
		document.getElementById(strings_id_nav_tab[1]).className = "state_idle"; 	
		document.getElementById(strings_id_nav_tab[2]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[3]).className = "state_idle";
		document.getElementById(strings_id_content[0]).style.display = "initial";
		document.getElementById(strings_id_content[1]).style.display = "none";
		document.getElementById(strings_id_content[2]).style.display = "none";
		document.getElementById(strings_id_content[3]).style.display = "none";
}

function display_experience() {
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
}


