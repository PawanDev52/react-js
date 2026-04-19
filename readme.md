# React JS Practice Projects

This repository contains a collection of small React projects built while practicing core frontend concepts such as state management, props, hooks, context, routing, Tailwind CSS, and local storage.

Each folder is a separate Vite app, so you can open and run them independently.

## Projects

### `bgChanger`

A simple background color changer that updates the page color using React state.

Concepts used:

- `useState`
- Event handling
- Dynamic inline styling

### `passwordGenerator`

A password generator with options for length, numbers, and special characters.

Concepts used:

- `useState`
- `useEffect`
- `useCallback`
- `useRef`
- Controlled inputs

### `currencyConvertor`

A currency converter that fetches live conversion data and swaps currencies.

Concepts used:

- Custom hooks
- API fetching
- Derived values
- Controlled form inputs

### `tailwindprops`

A small project focused on passing props and building UI with Tailwind CSS.

Concepts used:

- Props
- Reusable components
- Tailwind utility classes

### `miniContext`

A basic example of React Context API for sharing user state between components.

Concepts used:

- Context API
- Provider pattern
- Shared state across components

### `themeSwitcher`

A theme switcher app using context to toggle between light and dark modes.

Concepts used:

- Context API
- Theme state
- Conditional styling
- Reusable UI components

### `localTodoContext`

A todo app with create, update, delete, complete, and local storage persistence features.

Concepts used:

- Context API
- CRUD operations
- Controlled forms
- Local storage
- Component composition

### `reactRouter`

A routing practice project using `react-router-dom` with nested layouts and loader-based data fetching.

Concepts used:

- React Router
- Nested routes
- Route parameters
- Loaders
- Shared layout components

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- ESLint

## Getting Started

Since each project is a separate app, run them one at a time.

1. Open a terminal in the project folder you want to run.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. To check linting:

```bash
npm run lint
```

## Example

To run the todo project:

```bash
cd localTodoContext
npm install
npm run dev
```

## Repository Structure

```text
react js/
|-- bgChanger/
|-- currencyConvertor/
|-- localTodoContext/
|-- miniContext/
|-- passwordGenerator/
|-- reactRouter/
|-- tailwindprops/
|-- themeSwitcher/
`-- readme.md
```

## Purpose

This repo is mainly for learning and practicing React by building small focused apps instead of one large project. Each app explores a specific concept, making it easier to understand React fundamentals step by step.

## Notes

- Most projects were bootstrapped with Vite.
- This repository is focused on learning by building small, concept-based React applications.
