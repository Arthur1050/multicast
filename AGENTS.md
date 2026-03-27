<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:multicast-design-system-rules -->
# Multicast Design System Docs First

Before changing styles, components, layouts, or UX rules, read the relevant documentation inside `docs/design-system/`.

Recommended entrypoints:

- `docs/design-system/index.md`
- `docs/design-system/01-foundations/`
- `docs/design-system/02-components/`
- `docs/design-system/03-product-rules/`
- `docs/design-system/04-implementation/`

Rules:

- prefer semantic tokens from `app/globals.css`
- preserve the dark-first cinematic direction of the product
- treat streaming, presence, moderation, and playback as first-class UI concerns
- do not add ad-hoc visual patterns that conflict with the documented system
- if a new component or rule is introduced, update the relevant file in `docs/design-system/`
<!-- END:multicast-design-system-rules -->
