# DOiT Frontend Test

Repository: [petrichenkoSerzh23/doit-frontend-test](https://github.com/petrichenkoSerzh23/doit-frontend-test)

## Description

Test task: implementation of a Single Page Application (**SPA**) with full CRUD operations for posts, light/dark theme support, and Material Design based on **Next.js 14**.

## Tech Stack

- **Next.js 14 (App Router)**
- **React 18** with hooks
- **Redux Toolkit** (store, slices, actions, selectors, async thunks)
- **Material-UI v5** for all UI components
- **JavaScript (ES6+)**
- **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## Getting Started

### Prerequisites

Make sure you have **Node.js** (v18+) and a package manager installed:

- [npm](https://www.npmjs.com/)
- [yarn](https://yarnpkg.com/)
- [pnpm](https://pnpm.io/)
- [bun](https://bun.sh/)

### Installation & Running

Clone the repository, install dependencies and start the development server:

```bash
git clone https://github.com/petrichenkoSerzh23/doit-frontend-test.git
cd doit-frontend-test
```

# install dependencies

npm install

# or

yarn install

# or

pnpm install

# or

bun install

# run the development server

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

## Folder descriptions

- **public/** → static files available at the root (e.g., `/next.svg`).
- **src/app/** → Next.js App Router directory. Contains routes (`/`, `/posts`, `/posts/create`, `/posts/[id]`), layouts, and global styles.
- **src/app/providers/** → Context providers for Redux and MUI Theme.
- **src/components/common/** → Shared UI elements used across pages (AppBar, Drawer, SearchBar, Skeletons, Snackbar).
- **src/components/posts/** → Components related to posts (PostCard, PostList, PostForm, CommentsDialog, etc.).
- **src/services/** → API layer (e.g., `postsApi.js` for JSONPlaceholder integration).
- **src/store/** → State management setup with Redux Toolkit.
- **slices/** → Feature slices (`postsSlice.js`, `themeSlice.js`).
- **store.js** → Root Redux store.
- **src/styles/** → CSS modules or global style files.
- **src/utils/** → Helper functions (e.g., post-related actions).

## Usage / Features

The application provides the following functionality:

- Home page with hero section, navigation drawer, and theme toggle.
- Posts list with search, skeleton loaders, cards, and quick create via SpeedDial.
- Post details page with full content, comments dialog, and delete option.
- Create post page with multi-step form (Stepper), preview dialog, and success notification (Snackbar).

## API

This project uses the public fake API [JSONPlaceholder](https://jsonplaceholder.typicode.com) for data simulation.  
Main resource: **/posts**

Available operations:

- `GET /posts` – fetch all posts
- `GET /posts/:id` – fetch a single post
- `POST /posts` – create a new post
- `PUT /posts/:id` – update an existing post
- `DELETE /posts/:id` – delete a post

## Recommendations / Roadmap

Planned or potential improvements:

- Add unit tests for key components and Redux logic
- Use **RTK Query** for data fetching and caching
- Improve responsiveness and mobile support
- Enhance UX with better loading states (spinners, skeletons) and error handling
