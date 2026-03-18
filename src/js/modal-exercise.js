import { fetchExerciseById } from './api/exercises.js';

export async function openExerciseModal(id) {
  const modal = document.querySelector('#exercise-modal');

  if (!modal) {
    console.error('Modal element not found!');
    return;
  }

  modal.classList.add('open');

  try {
    const data = await fetchExerciseById(id);
    fillModalContent(data);
  } catch (error) {
    console.error('Error loading exercise:', error);
  }

  // Close on backdrop click
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.classList.contains('close-btn')) {
      closeExerciseModal();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', escClose);
}

function escClose(event) {
  if (event.key === 'Escape') {
    closeExerciseModal();
  }
}

export function closeExerciseModal() {
  const modal = document.querySelector('#exercise-modal');
  modal.classList.remove('open');

  // remove listeners
  document.removeEventListener('keydown', escClose);
}

function fillModalContent(data) {
  const modal = document.querySelector('#exercise-modal');

  modal.querySelector('.modal-title').textContent = data.name;
  modal.querySelector('.modal-target').textContent = data.target;
  modal.querySelector('.modal-bodypart').textContent = data.bodypart;
  modal.querySelector('.modal-calories').textContent = data.calories;
  modal.querySelector('.modal-description').textContent = data.description || 'No description';
}