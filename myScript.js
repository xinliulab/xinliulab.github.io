
var strings_id_nav_tab = ["home", "publication", "project", "continue"];
var strings_id_content = ["content_home", "content_publication", "content_project"];

function display_home() {
		document.getElementById(strings_id_nav_tab[0]).className = "active";  
		document.getElementById(strings_id_nav_tab[1]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[2]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[3]).className = "state_idle";
		document.getElementById(strings_id_content[0]).style.display = "initial";
		document.getElementById(strings_id_content[1]).style.display = "none";
		document.getElementById(strings_id_content[2]).style.display = "none";
}

function display_publication() {
		document.getElementById(strings_id_nav_tab[0]).className = "state_idle";  
		document.getElementById(strings_id_nav_tab[1]).className = "active"; 	
		document.getElementById(strings_id_nav_tab[2]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[3]).className = "state_idle";
		document.getElementById(strings_id_content[0]).style.display = "none";
		document.getElementById(strings_id_content[1]).style.display = "initial";
		document.getElementById(strings_id_content[2]).style.display = "none";
}

function display_project() {
		document.getElementById(strings_id_nav_tab[0]).className = "state_idle"; 
		document.getElementById(strings_id_nav_tab[1]).className = "state_idle";	
		document.getElementById(strings_id_nav_tab[2]).className = "active"; 
		document.getElementById(strings_id_nav_tab[3]).className = "state_idle";
		document.getElementById(strings_id_content[0]).style.display = "none";
		document.getElementById(strings_id_content[1]).style.display = "none";
		document.getElementById(strings_id_content[2]).style.display = "initial";
}

function display_continue() {
		document.getElementById(strings_id_nav_tab[0]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[1]).className = "state_idle"; 	
		document.getElementById(strings_id_nav_tab[2]).className = "state_idle";
		document.getElementById(strings_id_nav_tab[3]).className = "active"; 
		document.getElementById(strings_id_content[0]).style.display = "none";
		document.getElementById(strings_id_content[1]).style.display = "none";
		document.getElementById(strings_id_content[2]).style.display = "none";
}