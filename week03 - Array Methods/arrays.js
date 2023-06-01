// Activity 1 - Map
const numbers = ['one', 'two', 'three']; 

function makeList(item) {
    const listElement = document.getElementById("myList");
    listElement.innerHTML += `<li>${item}</li>`;
}
numbers.forEach(makeList);


// Activity 2 - Map
const grades = ['A', 'B', 'C'];

function gpaObtained(grade) {
    const gpaPoints = 0;
    if (grade === 'A') {
        gpaPoints = 4; 
    }
    else if (grade === 'B') {
        gpaPoints = 2;
    }
    else if (grade === 'C') {
        gpaPoints = 0;
    }
    return gpaPoints;
}

const gpa = grades.map(gpaObtained);


// Activity 3 - Reduce
const initialValue = 0; 
const totalGpa = gpa.reduce((total, item) => total + item);
const gpaFinal = totalGpa / gpa.length;


// Activity 4 - Filter 

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const result = fruits.filter(fruit => fruit.length < 6);
console.log(result);


// Activity 5 - indexOf

const iNumbers = [12, 34, 21, 54];
const luckNumber = 21; 
const isInArray = iNumbers.indexOf(luckNumber);
console.log(isInArray);
