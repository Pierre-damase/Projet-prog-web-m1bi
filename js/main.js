function setActivePage(){
    var page_active = document.title.toLowerCase();
    var element = document.getElementById(page_active);

    if(page_active == "contact") { return ""; }
    if(page_active != "accueil") { element = element.parentElement.parentElement; }
    else{ element = element.parentElement; }
    element.className += " active";
}

function menuHover(ele) {
    var element = ele.parentElement.parentElement;
    if(element.classList.length < 2){
        element = element.firstChild.nextSibling;
        if(element.classList[1] != "menu-hover"){
            element.classList.add("menu-hover");
        }
    }
}

function menuLeave(ele) {
    var element = ele.parentElement.parentElement.firstChild.nextSibling;
    if(element.classList.length == 2 && element.classList[1] == "menu-hover"){
        element.classList.remove("menu-hover");
    }
}
