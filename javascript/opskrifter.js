const productContainer = document.querySelector("main");

const params = new URLSearchParams(window.location.search);
const id = params.get("ingredients");

// fetch(`https://dummyjson.com/recipes/search?q=${ingredients}`)
//   .then((response) => response.json())
//   .then((data) => {
//     showProducts(data.recipes);
//   });

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data.recipes);
  });

function showProducts(productsArr) {
  productsArr.forEach((recipe) => {
    productContainer.innerHTML += `
      <article class="opskrifter-card">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <div class="opskrifter-card-body">
          <h2>${recipe.name}</h2>
          <div class="recipe-meta">
            <span><img src="img/tid.svg" alt="Time icon" /> ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes</span>
            <span><img src="img/graf.svg" alt="Difficulty icon" /> ${recipe.difficulty}</span>
            <span><img src="img/stjerne.svg" alt="Rating icon" /> ${recipe.rating}</span>
          </div>
          <a href="${recipe.id}">Show recipe</a>
        </div>
      </article>`;
  });
}
