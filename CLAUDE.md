## Astro-specific notes

Public env vars MUST use Astro’s `PUBLIC_` prefix (not `NEXT_PUBLIC_`). Anything referencing `createKintanaClient` belongs in `.astro` frontmatter so it executes on the server.

## Layout

`src/layouts/Base.astro` owns global chrome + optional tracker `<script>`.

## Pages

| Route | Technique |
| --- | --- |
| `/` | Server component lists via `await client.listEvents()` |
| `/shows/[slug]` | Calls `await client.getEvent(Astro.params.slug)` |
| `/gallery/` | `await client.getSiteGallery()` (or `getSiteManifest().gallery`) |
| `/request-a-show` | Mounts `<RequestShowIsland client:load />` with `<EmbedForm kind="SHOW_REQUEST" />` (no form id env) |

`src/layouts/Base.astro` loads `getSiteManifest()` for the header logo when set in Kintana → Custom site → Site assets.

Whenever you scaffold new routes, reuse `kintanaClient()` from `src/lib/kintana.ts` (site-bound `kpa_live_…` key required for gallery/manifest APIs).
