export async function fetchQuote() {
  const res = await fetch('https://your-energy.b.goit.study/api/quote');
  if (!res.ok) throw new Error('Cannot load quote');
  return res.json();
}