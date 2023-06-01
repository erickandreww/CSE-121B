// Function 1: take the input of the input box and add into a array
// Clean Array: Take the array split the grades by (',')
// and clean the extra spaces, also make all uppercase.

//  Function 2: Convert the grades to a points value

// Function 3: total up the points with reduce() and divide by the
// number of grades to get the GPT

function getGrades(inputSelector) {
    const grades = document.getElementById('grades').value;
    const gradesArray = grades.split(',');
    const newGrades = gradesArray.map(function (grade) {
        const sGrade = grade.trim();
        const newGrade = sGrade.toUpperCase();
        return newGrade;
    })
    return newGrades;
}

function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let gradePoint = 0;
    if (grade === 'A') {
        const gradePoint = 4;
    }
    else if (grade === 'B') {
        const gradePoint = 3;
    }
    else if (grade === 'C') {
        const gradePoint = 2;
    }
    else if (grade === 'D') {
        const gradePoint = 1;
    }
    else {
        const gradePoint = 0;
    }
    return gradePoint;
}

function calculateGpa(grades) {
    const convertGrades = grades.map(lookupGrade(grade));
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gpaTotal = convertGrades.reduce((total, item) => total + item);
    const gpa = gpaTotal / convertGrades.length; 
    // calculates the GPA
    // return the GPA
    return gpa;
  }

  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const output = document.querySelector(selector);
    output.innerText = gpa;
  }
  
  function clickHandler() {
    getGrades();
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grade = getGrades()
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grade)
    // display the gpa
    outputGpa(gpa, "#output")
  }

document.querySelector('#submitButton').addEventListener("click", clickHandler);