## Astro-specific notes

Public env vars MUST use Astro’s `PUBLIC_` prefix (not `NEXT_PUBLIC_`). Anything referencing `createKintanaClient` belongs in `.astro` frontmatter so it executes on the server.

## Layout

`src/layouts/Base.astro` owns global chrome + optional tracker `<script>`.

## Pages

| Route | Technique |
| --- | --- |
| `/` | Server component lists via `await client.listEvents()` |
| `/shows/[slug]` | Calls `await client.getEvent(Astro.params.slug)` |
| `/request-a-show` | Mounts `<RequestShowIsland client:load />` so React-powered `<EmbedForm />` can authenticate |

Whenever you scaffold new routes, reuse `createKintanaClient({ apiKey: import.meta.env.PUBLIC_KINTANA_API_KEY!, baseUrl: import.meta.env.PUBLIC_KINTANA_BASE_URL! })` from the `.astro` server context first; only hydrate React when hooks are unavoidable.
