const ingredientsContainer = document.querySelector("#choose-ingredients");

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    showIngredients(data.recipes);
  });

function showIngredients(recipesArr) {
  // Looper gennem hver recipe
  recipesArr.forEach((recipe) => {
    // Looper gennem hver ingrediens
    recipe.ingredients.forEach((ingredient) => {
      ingredientsContainer.innerHTML += `
        <label for="${ingredient}" class="cta cta-green">
          <input type="checkbox" name="ingredients" id="${ingredient}" />
          + ${ingredient}
        </label>
      `;
    });
  });
}
