
var strings_id_nav_tab = ["home", "publication", "project", "continue"];

len = strings_id_nav_tab.length;

for (var i = 0; i < len; i++) {
	document.getElementById(strings_id_nav_tab[i]).addEventListener("click", display_nav_tab);

};

function display_nav_tab() {

    document.getElementById(strings_id_nav_tab[0]).className = "active";
}