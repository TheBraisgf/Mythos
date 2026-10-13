# MYTHOS

> **Discover worlds. Build yours.**

Mythos is a functional product demo for a platform where stories live: discover, own, read, collect, connect and create.

This prototype is intentionally built with **vanilla HTML + CSS + JavaScript**. There is no backend, framework or build step.

## Run locally

Open `index.html` directly, or use a tiny static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Implemented demo

- Discover home with hero, continue reading, trending, new releases and genres
- Global search with Ctrl/Cmd + K shortcut
- Work detail pages with preview, creator, tags and reviews
- Simulated checkout and library ownership
- Persistent library, wishlist, progress, follows, reviews, collections and notifications through localStorage
- Comic reader simulation with progress and completion
- Review creation
- Creator profiles and follow state
- Community activity feed
- Public reader profile, level and XP
- Collections and achievements
- Notifications and settings mock
- Creator Mode / Reader Mode
- Creator Studio with metrics, revenue chart and work table
- Create Work flow with simulated publishing
- Responsive desktop/mobile navigation
- Empty and edge states

## Project structure

```text
.
├── index.html
├── data/
│   └── data.js       # Mock domain data
├── css/
│   └── styles.css    # Design system + responsive UI
└── js/
    └── app.js        # Routing, state, interactions and mock services
```

## Product model

The mock data is shaped around the future backend domain:

`User · Creator · Work · Series · Edition · Genre · LibraryItem · Purchase · Review · Follow · WishlistItem · Collection · CollectionItem · ReadingProgress · Achievement · UserAchievement · Activity · Notification · List · ListItem · DigitalExtra`

Only the entities needed by this demo are populated. The architecture deliberately keeps data and UI separate so a real API can replace the mock layer later.

## Demo story

The main product loop is designed to be demonstrable as:

`Discover → Work → Purchase → Library → Reader → Review → Follow → Community → Profile → Creator Mode → Create Work → Publish`

## Replacing the mocks with a backend

1. Keep `data/data.js` as seed/development data.
2. Introduce a small API service layer in `js/services/`.
3. Replace the `store` calls in `js/app.js` with API calls for authenticated state.
4. Move purchases, ownership and reading progress to server-side records.
5. Add real authentication and authorization.
6. Add object storage for covers and content.
7. Add a payment provider such as Stripe Connect for creator payouts.
8. Keep localStorage as a cache/offline fallback where useful.

## Next roadmap

- Real SPA routing/history
- Dedicated component modules
- API/backend
- Authentication
- Real reader for EPUB/CBZ/PDF content
- Creator uploads and moderation
- Payments and creator payouts
- Rich community discussions
- Lists, comments and social graph
- Digital extras
- Events and releases
- Analytics backed by real events

## Brand

**MYTHOS**

*Your stories. Your world.*

*Imagine. Create. Share. Repeat.*
