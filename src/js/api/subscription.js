export async function subscribe(email) {
  const res = await fetch(
    'https://your-energy.b.goit.study/api/subscription',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
  );

  if (!res.ok) throw new Error('Subscription failed');
  return res.json();
}