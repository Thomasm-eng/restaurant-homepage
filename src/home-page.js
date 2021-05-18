const mainContent = document.getElementById('content');
    
const navBar = document.createElement('nav')
navBar.setAttribute('id', 'navbar');

let titleText = document.createElement('h2')
titleText.setAttribute('id', 'name-text');
titleText.textContent = "El Café Cortado";

let imgContainer = document.createElement('div');
imgContainer.setAttribute('id', 'img-container');

const homePage = () => {
    if(!navBar.hasChildNodes()){
        navBar.appendChild(createDivs("Home"));
        navBar.appendChild(createDivs("Menu"));
        navBar.appendChild(createDivs("Contact"));
    }
    mainContent.appendChild(navBar);

    mainContent.appendChild(titleText);
    let coffeeImage = document.createElement('img');
    coffeeImage.id = "main-img";
    coffeeImage.src = "coffee-beans.jpeg";
    if(!imgContainer.hasChildNodes()){
        imgContainer.appendChild(createParagraphs("Offering personalized brews since 1500"));
        imgContainer.appendChild(coffeeImage);
        imgContainer.appendChild(createParagraphs("Order Online or visit a location near you!"));
    }
    mainContent.appendChild(imgContainer);
    
}
const createDivs = (divText) => {
    const div = document.createElement('div')
    div.classList.add('nav-item');
    div.textContent = divText;
    div.setAttribute('id', divText);
    return div;
}
const createParagraphs = (paraText) => {
    const para = document.createElement('p');
    para.textContent = paraText;
    return para;
}
export {homePage, createDivs, mainContent, navBar, titleText, imgContainer};