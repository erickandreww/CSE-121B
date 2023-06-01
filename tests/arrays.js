const newArray = ['one', 'two', 'three'];

function makeList(item) {
    const listElement = document.getElementById("myList");
    listElement.innerHTML += `<li>${item}</li>`;
}
newArray.forEach(makeList);

const letterGrades = ['A', 'B', 'A']; 
function gpa(letterGrades) {
    let grade = 0;
    if (letterGrades === 'A') 
    {
        grade = 4; 
    }
    else if (letterGrades === 'B') 
    {
        grade = 3; 
    }
    return grade;
}
const newScore = letterGrades.map(gpa);

const totalPoints = newScore.reduce(function (total, item) {
    return total + item; 
});
const score = totalPoints / newScore.length;