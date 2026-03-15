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
      ingredientsContainer.innerHTML += `<label for="${ingredient}" class="cta cta-green">
    <input type="checkbox" name="ingredients" id="${ingredient}" value="${ingredient}" /> + ${ingredient}</label>`;
    });
  });
}
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkboxes = document.querySelectorAll("input[name='ingredients']:checked");
  const valgte = Array.from(checkboxes).map((cb) => cb.value);

  if (valgte.length === 0) return;

  const query = valgte.join(",");
  window.location.href = `opskrifter.html?ingredients=${query}`;
});
