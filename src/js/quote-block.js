import { fetchQuote } from './api/quote.js';

(async function loadQuote() {
  const saved = JSON.parse(localStorage.getItem('quote-day'));
  const today = new Date().toDateString();

  if (saved && saved.date === today) {
    renderQuote(saved.data);
    return;
  }

  try {
    const data = await fetchQuote();
    localStorage.setItem('quote-day', JSON.stringify({ date: today, data }));
    renderQuote(data);
  } catch (error) {
    console.error(error);
  }
})();

function renderQuote(q) {
  const quoteEl = document.querySelector('#quote');
  const authorEl = document.querySelector('#author');

  if (quoteEl) quoteEl.textContent = q.quote;
  if (authorEl) authorEl.textContent = q.author;
}