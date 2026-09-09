# @teootoledo/context-router-contract

Shared [zod](https://zod.dev) schema for the wire contract between two other packages in the context-router system:

- **[context-router-daemon](https://github.com/teootoledo/context-router-daemon)** — a local MCP daemon with real filesystem access
- **[context-router-backend](https://github.com/teootoledo/context-router-backend)** — a Backstage backend plugin that calls a worker LLM

Both import this package so the request/response shapes they exchange over HTTP can never silently drift out of sync — a change here is caught by both consumers' own test suites, not discovered at runtime on a developer's machine.

## Install

```bash
npm install @teootoledo/context-router-contract
```

## What's in here

`BulkReadRequestSchema` / `BulkReadResponseSchema` — the shape of a `bulk_read_files` call: a list of `{ path, content }` files plus a `query` string in, a single `summary` string out.

Ships as raw TypeScript with no build step — works well for tsx-based consumers like this system's other two packages; a plain Node or bundler consumer with no TypeScript loader would need one of its own.

## Development

```bash
npm install
npm test
```

Node 22+. TypeScript runs through [`tsx`](https://github.com/privatenumber/tsx) (`tsx --test`) — there is no build step and no Jest/Vitest. Relative imports use explicit `.ts` extensions; a bare `tsc --noEmit` will report `TS5097` on that convention, which is expected — `tsx` is the only supported way to run this code.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
