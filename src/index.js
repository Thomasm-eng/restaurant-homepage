import {homePage, mainContent} from "./home-page";
import {contactPage} from "./contact-page";
homePage();

const homeButton = document.getElementById("Home");
const contactButton = document.getElementById("Contact");

homeButton.addEventListener('click', () => {
    removeNodes(mainContent);
    homePage();
}
    );
contactButton.addEventListener('click', () => {
    removeNodes(mainContent);
    contactPage();
})
const removeNodes = (node) => {
    while(node.hasChildNodes()){
        node.removeChild(node.lastChild);
    }
}