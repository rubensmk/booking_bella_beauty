import { CenterInfo } from "../types/center_info";

export async function getCenterInfo(center: string): Promise<CenterInfo> {
  const baseUrl = process.env.API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/center_info?center=${center}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}
