import {homePage, mainContent, imgContainer} from "./home-page";
import {contactPage} from "./contact-page";
import { menuPage } from "./menu-page";
homePage();

const homeButton = document.getElementById("Home");
const contactButton = document.getElementById("Contact");
const menuButton = document.getElementById("Menu");

homeButton.addEventListener('click', () => {
    removeNodes(mainContent);
    removeNodes(imgContainer);
    homePage();
}
    );
contactButton.addEventListener('click', () => {
    removeNodes(mainContent);
    removeNodes(imgContainer);
    contactPage();
})
menuButton.addEventListener('click', () => {
    removeNodes(mainContent);
    removeNodes(imgContainer);
    menuPage();
})

const removeNodes = (node) => {
    while(node.hasChildNodes()){
        node.removeChild(node.lastChild);
    }
}