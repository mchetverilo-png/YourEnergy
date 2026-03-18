import { fetchExercises } from './api/exercises.js';
import { renderExercises } from './exercises-list.js';

export function renderCategories(list) {
  const box = document.querySelector('#categories-container');

  if (!list || list.length === 0) {
    box.innerHTML = '<p>No categories found</p>';
    return;
  }

  box.innerHTML = list
    .map(
      item => `
      <div class="category-card" data-category="${item.name}">
        <img src="${item.imgURL}" alt="${item.name}" />
        <p>${item.name}</p>
      </div>`
    )
    .join('');

  const cards = box.querySelectorAll('.category-card');

  cards.forEach(card => {
    card.addEventListener('click', async () => {
      const category = card.dataset.category;

      const data = await fetchExercises({
        muscles: category,
        limit: 9,
        page: 1,
      });

      renderExercises(data);
    });
  });
}