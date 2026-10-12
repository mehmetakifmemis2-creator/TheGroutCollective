# THE GROUT — Phase 1

A Turkish, editorial homepage for THE GROUT COFFEE / PROJECT / CAKE. Built with Next.js App Router, React, TypeScript, and Tailwind CSS v4. No commerce, accounts, database, or additional pages.

## Local development

Requires Node.js 20.9+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. If occupied, Next prints an alternative port.

```sh
npm run typecheck
npm run build
npm start
```

## Structure and editing

- `src/app/page.tsx`: homepage sections and footer.
- `src/app/layout.tsx`: Turkish document language and metadata.
- `src/app/globals.css`: brand tokens, editorial layout, responsive styles, reduced-motion support; Tailwind is available for utilities.
- `src/components/`: navigation, responsive photography, and native accessible collection preview dialogs.
- `src/content/tr.ts`: Turkish copy and navigation. Add an English dictionary with the same structure when Phase 2 requires it; no nonfunctional language toggle is shown.
- `src/content/images.ts`: central stock-photo registry and responsive Unsplash URLs.
- `src/config/site.ts`: official Instagram links and nullable contact details. Add verified email, phone and address here. Until then the contact CTA opens the supplied Project Instagram profile.

Navigation uses real homepage anchors. Collection items open concept details (Escape, close button, or backdrop closes them). Coffee leads to the living showroom; Project to projects; Cake to its Instagram. The mobile menu supports Escape and closes after navigation.

## Placeholder content and publication

All photographs are external Unsplash stock placeholders, visibly labeled. They are not official brand assets, products or completed projects. The names Yalın, Katman and Doku are fictional collection concepts. The project is explicitly a concept presentation. Network access to images.unsplash.com is required. Replace these with licensed, approved local assets in `public/images/` and update the image component before launch; preserve attribution/license records for selected final photography.

Official contact details, city, opening hours, project credits, product specifications and pricing have not been invented. Editorial copy is a proposal based on the supplied brand brief and should be approved before publication. Metadata deliberately sets `noindex, nofollow` for this review phase; change it at launch and add the verified site URL/social sharing imagery.

Reference content was accessible at https://sancrea.com/, https://kamersandalye.com/en/ and https://saloni.furniture/tr/. Inspiration: distinct brand worlds, furniture selections, and architectural project storytelling. Designs and assets were not copied. The three provided Instagram profiles could not be reviewed; only their supplied URLs are used.

## Git

This folder is intended to be maintained as a Git repository. Generated output, dependencies and environment files are ignored. No GitHub remote was supplied. Add your own remote when ready; this implementation does not publish or push automatically.

Phase 1 intentionally contains only the homepage. Product catalog routes, commerce, authentication and a CMS are future decisions.
