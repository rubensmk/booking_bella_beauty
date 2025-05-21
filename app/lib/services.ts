import { Service } from "../types/service";

export async function getServices(center: string): Promise<Service[]> {
  const baseUrl = process.env.API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/services?center=${center}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}
