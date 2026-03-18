import { fetchFilters } from './api/filters.js';
import { renderCategories } from './categories-list.js';

let currentFilter = 'Muscles';

document.addEventListener('DOMContentLoaded', loadInitialFilters);

async function loadInitialFilters() {
  try {
    const data = await fetchFilters(currentFilter);
    renderCategories(data);
  } catch (error) {
    console.error('Filter load error:', error);
  }
}

document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', async () => {
    currentFilter = btn.dataset.filter;

    try {
      const data = await fetchFilters(currentFilter);
      renderCategories(data);
    } catch (error) {
      console.error('Filter switch error:', error);
    }
  });
});