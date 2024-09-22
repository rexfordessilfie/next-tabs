# next-tabs

Showcasing persistent routes in Next.js App Router.

### Problem

When a user navigates to any route, it is rendered from scratch on the server and client state is reset.

However, sometimes you want to maintain state of already loaded pages even when you navigate away and back.

This is useful for providing app-like experiences and preventing unnecessary work on the client.

### Solution

Using Next.js [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes), and some CSS conditional display we can achieve persistent routes for already visited pages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
2. Notice counter starts counting
3. Click back and forth through different tabs and notice the counter does not reset and pages do not re-render.
4. Refresh page and notice the counter resets.

> NB: To compare the behavior without persistent tabs, checkout to `without-slots` branch (`git checkout without-slots`).

## How it works?

1. First add our tabs as regular routes.
2. Then, place each rout into a slot using the `@slot` naming convention.
3. Add an empty `default.tsx` for each slot.
4. Add a `not-found.tsx` for each tab route and root (as a precaution against current known issue).
5. Add a `layout.tsx` file to the parent folder of the tabs. This will be the layout that controls the display of the tabs.
6. Grab all tabs from the layout's props, and render them.
7. To show one tab at a time use CSS `display` property to hide/show each tab slot depending on the current `pathname`. A basic `Route` component has been defined to help with this.

## Known Issues

1. For some reason, loading `/tab-a/sub-a` on hard-refresh (or with Javascript disabled), results in a NOT_FOUND error.

   > Hack: To correctly render the page, add a `not-found.tsx` file (with non-empty return) to its parent route, `/tab-a`.

2. Also in development mode, without `not-found.tsx` in the root of the tabs, slots are no longer rendered on save/hot-reload inside of the root page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
