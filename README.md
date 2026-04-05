# YusufStore

## Overview

This is a simple e-commerce store built with the DummyJSON API, focused on browsing, searching, and filtering products.

DummyJSON was chosen because it is stable, requires no API key, and provides built-in support for pagination, categories, and search, which made it suitable for implementing all required features without additional setup.

---

## Tech Stack

- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Native `fetch` (Next.js data fetching)
- Vitest + React Testing Library

---

## Architecture Decisions

The project follows a feature-based structure, with all product-related logic grouped under `features/products`. This keeps components, types, and data logic organized and easier to scale.

All API interactions are abstracted into dedicated functions instead of calling `fetch` directly inside components. This keeps UI components focused purely on rendering.

Most of the app uses Server Components. Since the data is mostly read-only, this reduces client-side JavaScript and improves performance.

Search, filtering, and pagination state are stored in the URL (`?q=`, `?category=`, `?page=`). This avoids unnecessary global state and makes the application shareable and consistent on refresh.

---

## Features Implemented

### Listing Page

- Server-rendered product listing (20 items per page)
- Responsive grid layout across mobile, tablet, and desktop
- Product cards include:
  - Title
  - Image
  - Price and rating
- Pagination implemented using `limit` and `skip`

Pagination was chosen over infinite scroll because this is a structured browsing experience. Users need clear control over navigation, the ability to jump between pages, and a predictable stopping point. Infinite scroll is better suited for content feeds, not product exploration.

---

### Detail Page

- Dynamic routing (`/products/[id]`)
- Server-side data fetching per product
- Metadata generation:
  - Title
  - Description
  - Open Graph image
- Custom `not-found.tsx` for invalid product IDs

---

### Search & Filtering

- Search input with debounce (custom hook)
- Category filtering
- URL-driven state (`q`, `category`, `page`)
- Suspense boundary keyed by search/filter values to trigger re-fetching

---

### Loading, Error & Empty States

- `loading.tsx` and skeleton components for better UX
- Suspense boundaries for progressive rendering
- Custom `error.tsx` for handling failures
- Proper handling of missing data via `not-found.tsx`

---

## Performance Optimizations

- **Next.js fetch caching**
  - Product list uses `revalidate: 60` to balance freshness and performance
  - Categories use `revalidate: 3600` since they rarely change
  - Product detail uses `no-store` to always fetch fresh data

- **Streaming with Suspense**
  - Categories and product list load independently
  - Suspense keys ensure re-render on search/filter changes

- **Server Components**
  - Reduced client-side JavaScript by handling most logic on the server

- **Optimized Images**
  - `next/image` used with responsive `sizes` and proper layout to avoid layout shifts

---

## Testing

Testing was done using Vitest and React Testing Library.

- **Search Component**
  - Verifies input updates correctly on user typing
  - Ensures navigation is triggered when Enter is pressed

- **Pagination Component**
  - Verifies correct rendering of navigation controls
  - Ensures "Previous" button is disabled on the first page
  - Confirms correct page indicator display

These tests focus on user interaction and core behavior rather than implementation details.

---

## Setup Instructions

```bash
git clone <repo-url>
cd <project>
npm install
npm run dev
```

## Deployment

Deployed on Vercel.

Vercel was chosen for faster setup and seamless integration with Next.js within the given time constraint.

---

## Trade-offs & Limitations

- Infinite scroll was not implemented as it does not align well with product-based navigation
- No client-side data library (e.g. TanStack Query) was used since most data is server-driven
- Pagination is limited to next/previous navigation instead of full page number controls
