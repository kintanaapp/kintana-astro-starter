import { createKintanaClient } from "@kintana/sdk";

export function kintanaClient() {
  const apiKey = import.meta.env.PUBLIC_KINTANA_API_KEY;
  const baseUrl = import.meta.env.PUBLIC_KINTANA_BASE_URL;
  if (!apiKey?.trim() || !baseUrl?.trim()) {
    throw new Error("Set PUBLIC_KINTANA_API_KEY and PUBLIC_KINTANA_BASE_URL in .env");
  }
  return createKintanaClient({ apiKey: apiKey.trim(), baseUrl: baseUrl.trim() });
}
