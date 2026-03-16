const productContainer = document.querySelector("main");

const params = new URLSearchParams(window.location.search);
const opskrifterName = params.get("recipe");

fetch("https://dummyjson.com/recipes?limit=50")
  .then((response) => response.json())
  .then((data) => {
    const recipe = data.recipes.find((r) => r.name.toLowerCase() === opskrifterName.toLowerCase());

    if (recipe) {
      showProduct(recipe);
    } else {
      productContainer.innerHTML = "<p>Opskrift ikke fundet</p>";
    }
  });

function showProduct(recipe) {
  productContainer.innerHTML += `<nav class="breadcrumbs">
      <a href="index.html">Home</a>
      <span>/</span>
      <a href="ingredients.html">Ingredients</a>
      <span>/</span>
      <a href="recipes.html">Recipes</a>
      <span>/</span>
      <span class="current">${recipe.name}</span>
    </nav>
    <section class="recipe-hero">
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />
      <div class="recipe-intro">
        <h1>${recipe.name}</h1>

        <div class="recipe-meta">
          <div class="meta-item">
            <p class="p-small p-bold">Difficulty</p>
            <p class="p-small">${recipe.difficulty}</p>
          </div>

          <div class="meta-item">
            <p class="p-small p-bold">Cuisine</p>
            <p class="p-small">${recipe.cuisine}</p>
          </div>

          <div class="meta-item">
            <p class="p-small p-bold">Rating</p>
            <p class="p-small">${recipe.rating}</p>
          </div>

          <div class="meta-item">
            <p class="p-small p-bold">Prep time</p>
            <p class="p-small">${recipe.prepTimeMinutes} minutes</p>
          </div>

          <div class="meta-item">
            <p class="p-small p-bold">Cook time</p>
            <p class="p-small">${recipe.cookTimeMinutes} minutes</p>
          </div>
        </div>
      </div>
    </section>
    <section class="recipe-content">
      <div class="recipe-column">
        <h2>Ingredients</h2>
        <ul class="recipe-list">
          ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
      </div>

      <div class="recipe-column">
        <h2>Instructions</h2>
        <ol class="recipe-steps">
          ${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    </section>`;
}
