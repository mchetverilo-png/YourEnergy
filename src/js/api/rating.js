export async function sendRating(id, rating) {
  const res = await fetch(
    `https://your-energy.b.goit.study/api/exercises/${id}/rating`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating }),
    }
  );

  if (!res.ok) throw new Error('Rating failed');
  return res.json();
}