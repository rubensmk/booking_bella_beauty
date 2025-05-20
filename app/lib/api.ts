export async function fetchServices(center: string) {
  const res = await fetch(`/api/services?center=${center}`);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}
