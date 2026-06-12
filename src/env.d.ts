/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_KINTANA_API_KEY: string;
  readonly PUBLIC_KINTANA_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
