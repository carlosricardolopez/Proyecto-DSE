var btnMenu, menu;

window.onload = function(){
    btnMenu = document.getElementById("menu-button");
    menu = document.getElementById("side-panel");

    btnMenu.addEventListener("click", openClosemenu);
}

var isMenuOpen = false;
function openClosemenu(){
    if(isMenuOpen == false){
        menu.style.transform = "TranslateX(0%)";
        btnMenu.style.right = "20px";
        isMenuOpen = true;
    }
    else{
        menu.style.transform = "TranslateX(-100%)";
        btnMenu.style.right = "-40px";
        isMenuOpen = false;
    }
}