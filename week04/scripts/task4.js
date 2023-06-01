/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let me = {
    // Step 2: Inside of the object, add a property named name with a value of your name as a string
        name: 'Erick',
    // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
        photo: 'images/myself.jpg',
    // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
        favoriteFoods: [
            "lasagna", "strogonoff", "chocolate"
        ],
    // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
        hobbies: [
            "Games", "Listen Music", "Read", "Animes"
        ], 
    // Step 6: Add another property named placesLived with a value of an empty array
        placesLived: [
            {
                place : "São Paulo",
                length : "22 years"
            },
            {
                place : "Fortaleza", 
                length : "2 years"
            }
        ]
    // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    // Step 8: For each property, add appropriate values as strings
    // Step 9: Add additional objects with the same properties for each place you've lived
}


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerHTML = me.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = me.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = "My Photo";

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let foodList = document.getElementById("favorite-foods");
me.favoriteFoods.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    foodList.appendChild(li);
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbyList = document.getElementById("hobbies");
me.hobbies.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    hobbyList.appendChild(li);
    });

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let placesLivedList = document.getElementById("places-lived");
me.placesLived.forEach((section) => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.innerText = section.place;
    dd.innerText = section.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
    
})
