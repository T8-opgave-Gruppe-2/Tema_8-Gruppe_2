const productContainer = document.querySelector("main");

const params = new URLSearchParams(window.location.search);
const ingredients = params.get("ingredients").split(",");

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    const filtered = data.recipes.filter((recipe) => ingredients.some((ingredient) => recipe.ingredients.some((ri) => ri.toLowerCase().includes(ingredient.toLowerCase()))));
    showProducts(filtered);
  });

function showProducts(productsArr) {
  productsArr.forEach((recipe) => {
    productContainer.innerHTML += `
<a href="singleview.html?recipe=${recipe.name}">
  <article class="opskrifter-card">
    <img src="${recipe.image}" alt="${recipe.name}" />
    <div class="opskrifter-card-body">
      <h2>${recipe.name}</h2>
      <div class="recipe-meta">
        <span><img src="img/tid.svg" /> ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes</span>
        <span><img src="img/graf.svg" /> ${recipe.difficulty}</span>
        <span><img src="img/stjerne.svg" /> ${recipe.rating}</span>
      </div>
      <p>Show recipe</p>
    </div>
  </article>
</a>`;
  });
}
