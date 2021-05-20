import {mainContent, navBar, titleText, imgContainer, createParagraphs} from "./home-page";
const menuPage = () => {
    mainContent.appendChild(navBar);
    mainContent.appendChild(titleText);

    if(!imgContainer.hasChildNodes()){
        imgContainer.appendChild(createParagraphs("Cafe solo . . . . . $1.99"));
        imgContainer.appendChild(createParagraphs("Cafe con leche . . . . . $2.99"));
        imgContainer.appendChild(createParagraphs("Cafe cortado . . . . . $2.49"));
        imgContainer.appendChild(createParagraphs("Frappuccino . . . . . $4.99"));
        imgContainer.appendChild(createParagraphs("Cappuccino . . . . . $3.49"));
        imgContainer.appendChild(createParagraphs("Americano . . . . . $2.99"));
        
    }
    mainContent.appendChild(imgContainer);
}
export {menuPage}