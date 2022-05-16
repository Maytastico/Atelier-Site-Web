document.addEventListener("DOMContentLoaded", ()=>{
    const navButton = document.querySelector("nav #burger");
    const navMenu = document.querySelector("nav #nav-elements");
    const iconContainer = document.querySelector("nav #burger img");
    navButton.addEventListener("click", ()=>{

        if(navMenu.classList.contains("display")){
            navMenu.classList.remove("display");
            iconContainer.src = "assets/icons/menu.svg";
        }else{
            navMenu.classList.add("display");
            iconContainer.src = "assets/icons/x-circle.svg";
        }
    });

    $("nav a.nav-element").click(function(e){
        navMenu.classList.remove("display");
        iconContainer.src = "assets/icons/menu.svg";
        console.log(e);
    });
});
/**
 * Opens a dialog. It adds a open class to the Element
 * @param elementName
 * elementName: Contains the CSS path of the element the should be opened.
 */
 function openElement(elementName) {
    var selectedElement = document.querySelector(elementName);
    selectedElement.classList.add("open");
    selectedElement.classList.add("appearing");
}

/**
 * Closes a dialog. It removes the open class from the element
 * @param elementName
 * elementName: Contains the CSS path of the element the should be opened.
 */
function closeElement(elementName) {
    var selectedElement = document.querySelector(elementName);
    selectedElement.classList.remove("open");
    selectedElement.classList.remove("appearing");
}