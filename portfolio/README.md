# Ghina E. Yantes — Portfolio (Module 2)

Module 1's static HTML/CSS landing page, rebuilt as a typed, multi-page React
SPA with client-side routing. All content and visual design (the terminal
card, dark/light theme, learning-queue grid) is carried over 1:1 — only the
implementation changed.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks then builds to dist/
```

## Structure

```
src/
  types/project.ts          ProjectCardProps interface
  hooks/useLocalStorage.ts  generic localStorage hook (Bonus 1)
  store/useProjectsStore.ts Zustand global store (Bonus 3)
  data/projects.ts          seed data for the learning-queue list
  components/               Header, Footer, ProjectCard, ThemeToggle, TerminalCard, Layout
  pages/                    HomePage, ProjectsPage, AboutPage
  App.tsx                   BrowserRouter + route table
```

Routing uses `react-router-dom`'s `BrowserRouter` / `Routes` / `Route`, so
navigating between Home, Learning Queue, and About swaps page content without
a full page reload.

## Bonus 1 — Custom hook: `useLocalStorage<T>`

The original site persisted the dark/light theme choice directly with
`localStorage.getItem` / `setItem` calls inside a plain `<script>` tag.
`useLocalStorage<T>` generalizes that into a reusable, type-safe hook that
behaves like `useState`, backed by localStorage, and is used here for the
theme toggle. Because it's generic, it isn't tied to the theme's string type
— it could store a number, an object, anything JSON-serializable, with the
same API and full type inference at the call site.

## Bonus 2 — TailwindCSS integration

All styling moved from `styles.css` (custom classes + CSS custom properties)
to Tailwind utility classes, using Tailwind v4's CSS-first config (`@theme`
in `src/index.css`).

Reasoning:

- The original CSS already used custom properties (`--bg`, `--accent`, etc.)
  as a de facto design-token system for the two themes. Tailwind v4 lets
  those tokens live in the same `@theme` block Tailwind itself reads, so the
  token layer didn't need to be thrown away — just consolidated.
- Component-scoped utility classes make each component's styling readable in
  place (`ProjectCard`, `Header`, ...) instead of round-tripping to one large
  stylesheet organized by page section, which gets harder to maintain as
  more pages are added in later modules.
- Layout, spacing, and responsive rules (grid columns, gaps, breakpoints) map
  directly onto Tailwind utilities, while theme-dependent colors stay as
  inline `style` bindings to the CSS variables, since those need to react to
  the `data-theme` attribute at runtime, not just at build time.
- Trade-off: JSX gets more verbose per element, and long `className` strings
  are harder to scan than a semantic class name like `.queue-card`. For a
  small, mostly-static site like this one, that's an acceptable trade for not
  maintaining a parallel CSS file per component.

## Bonus 3 — Zustand state management

The projects/learning-queue list lives in `useProjectsStore` (Zustand)
instead of `useState` inside `ProjectsPage`.

Comparison with plain `useState`:

- **Shared across pages**: both `HomePage` (shows the current in-progress
  module in the terminal card) and `ProjectsPage` (renders the full grid)
  need the same list. With `useState`, that state would have to live in a
  common ancestor (e.g. `App`) and be passed down as props to both pages, or
  be duplicated per page and manually kept in sync.
- **No provider needed**: Zustand's store is just a hook you import — no
  `<Context.Provider>` wrapping the tree, and no re-renders of unrelated
  components caused by a single context value changing.
- **Selective subscriptions**: components pick exactly the slice they need
  (e.g. `useProjectsStore((s) => s.projects)`), so a component that only
  reads the list doesn't re-render on unrelated store changes the way it
  might if a single large `useState` object were passed via context.
- **When `useState` would have been enough**: if the list were only ever read
  and rendered by a single page, plain `useState` (or even a static constant)
  would be simpler — no store, no selectors, one less dependency. Zustand
  earns its place here specifically because the same data is consumed from
  two independent routes.
