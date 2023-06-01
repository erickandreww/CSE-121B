const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with Javascript!';
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src', 'https://placeimg.com/200/200/animals')
newImage.setAttribute('alt', 'Description of the image');
document.body.appendChild(newImage);

const newSection = document.createElement("section"); 
const newH2 = document.createElement('h2'); 
newH2.innerHTML = '<h2>CSE 121b</h2>';
document.body.appendChild(newH2);
const newParagraphH2 = document.createElement('p');
newParagraphH2.innerText = "Welcome to Javascript Language";
document.body.appendChild(newParagraphH2);