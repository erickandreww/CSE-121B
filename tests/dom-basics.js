const newParagraph = document.createElement("p"); 
newParagraph.innerText = "added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src', 'https://placeimg.com/200/200/animals')
newImage.setAttribute('alt', 'Description of the image');
document.body.appendChild(newImage);

const newSection = document.createElement("section"); // i didn't add this by myself
const newH2 = document.createElement('h2'); // the other I added.
newH2.innerHTML = '<h2>CSE 121b</h2>';
document.body.appendChild(newH2);
const newParagraphH2 = document.createElement('p');
newParagraphH2.innerText = "Welcome to Javascript Language";
document.body.appendChild(newParagraphH2);

// // better way
// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
// document.body.appendChild(newSection);