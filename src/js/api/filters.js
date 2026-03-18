export async function fetchFilters(filter) {
  const res = await fetch(
    `https://your-energy.b.goit.study/api/filters?filter=${filter}`
  );
  if (!res.ok) throw new Error('Cannot load filters');
  return res.json();
}