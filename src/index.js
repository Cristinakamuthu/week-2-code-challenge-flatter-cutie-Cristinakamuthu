let base_url = "https://mimi-cutie-7719.vercel.app/characters"

// Creating a span tag in the div#character-bar
// Displaying the names of the characters in the span tag
function displayNames(characters) {
    let names = document.getElementById("character-bar");

    characters.forEach(character => {
        const characterName = document.createElement("span");
        characterName.textContent = character.name;
        names.appendChild(characterName);

        // Adding event listener inside the loop so it works for each character
        characterName.addEventListener("click", () => {
            displayDetails(character);
        });
    });
}

// Function to display character details
function displayDetails(character) {
    document.getElementById("name").textContent = character.name;
    document.getElementById("image").src = character.image;
    document.getElementById("image").alt = character.name;
    document.getElementById("vote-count").textContent = character.votes;
}


// Function to add the number of votes

let form = document.getElementById("votes-form");
const voteCount = document.getElementById("vote-count");
const votes = document.getElementById("votes");
const btn = document.getElementById("reset-btn");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let initialVotes = parseInt(voteCount.textContent) || 0; 
    let newVotes = parseInt(votes.value) || 0; 

    if (newVotes > 0) {
        let addedVotes = initialVotes + newVotes;
        voteCount.textContent = addedVotes; 
    }

    form.reset(); 
});


btn.addEventListener("click", () => {
    voteCount.textContent = "0";
});














// let form = document.getElementById("votes-form")
// const voteCount = document.getElementById("vote-count")
// const votes = document.getElementById ("votes")
// const btn =document.getElementById("reset-btn")
// let addedvote = parseInt(votes.value) || 0

// form.addEventListener("submit",(event) =>{
//      event.preventDefault()

// })
// let initalVotes = voteCount.textContent
// let newVotes = votes.value
//  let addedVotes = initalVotes + newVotes

// votes.textContent = addedVotes

// form.reset ()



// GET method to fetch character data
fetch(base_url)
    .then(res => res.json()) // Convert response to JSON
    .then(data => displayNames(data)) // Call displayNames with data
    .catch(err => console.log(err));







// // let form = document.getElementById('form')
// // form.addEventListener('submit', handleSubmit)
// // function handleSubmit(event){
// // event.preventDefault()
// //     let product_title = document.getElementById('title').value
// //     let product_image = document.getElementById('image').value
// //     let product_price = document.getElementById('price').value
// //     let product_description = document.getElementById('description').value
// //     let product_category = document.getElementById('category').value

//     let product_object = {
//         title: product_title,
//         image: product_image,
//         price: product_price,
//         description: product_description,
//         category: product_category
//     }

// //     postProduct(product_object)




