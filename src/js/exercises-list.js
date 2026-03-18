import { openExerciseModal } from './modal-exercise.js';

export function renderExercises(data) {
  const box = document.querySelector('#categories-container');

//   if (!data  !data.results  data.results.length === 0) {
//     box.innerHTML = '<p>No exercises found</p>';
//     return;
//   }

  box.innerHTML = data.results
    .map(
      item => `
      <div class="exercise-card" data-id="${item._id}">
        <h3>${item.name}</h3>
        <p>Body part: ${item.bodypart}</p>
        <p>Target: ${item.target}</p>
        <p>Calories: ${item.calories}</p>
        <button class="start-btn">Start</button>
      </div>
    `
    )
    .join('');

  const cards = box.querySelectorAll('.exercise-card');

  cards.forEach(card => {
    const btn = card.querySelector('.start-btn');

    btn.addEventListener('click', () => {
      const id = card.dataset.id;
      openExerciseModal(id);
    });
  });
}