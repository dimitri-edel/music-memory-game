// apiController is a global variable defined in js/api-controller.js
let categories_loaded = apiController.getCategories();

categories_loaded.then((categories) => {
    categories.forEach((category) => {
        attach_category_to_DOM(category);
    });
}).catch((error) => {
    console.log(error);
});

function attach_category_to_DOM(category){
    document.getElementById("category-list").insertAdjacentHTML("beforeend", `
    <div class="category-card" id="category-${category.id}" onclick="start_game(${category.id})">        
        <h2>${category.description}</h2>
        <img src="${base_url}${category.image}" alt="${category.name}" class="category-image">
    </div>
    `);    
}

function start_game(category_id){
    window.location.href = `game.html?category_id=${category_id}`;
}

// categories_loaded.then((categories) => {
//     categories.forEach((category) => {
//         console.log(category);
//         let quiz_loaded = apiController.getQuiz(category.id);
//         quiz_loaded.then((quiz) => {
//             console.log("quiz loaded!");            
//         }).catch((error) => {
//             throw(error);            
//         });
//     });
// }).catch((error) => {
//     console.log(error);
// });