import {mainContent, navBar, titleText, imgContainer, createParagraphs} from "./home-page";
const contactPage = () => {
    mainContent.appendChild(navBar);

    mainContent.appendChild(titleText);

    let mapImage = document.createElement('img');
    mapImage.classList.add("main-img");
    mapImage.src = "cadiz-spain.jpg";

    if(!imgContainer.hasChildNodes()){
        imgContainer.appendChild(createParagraphs("Phone: 888-671-9865"));
        imgContainer.appendChild(mapImage);
        imgContainer.appendChild(createParagraphs("Location: El Campo, Cádiz"))
    }
    mainContent.appendChild(imgContainer);
    
}
export {contactPage};