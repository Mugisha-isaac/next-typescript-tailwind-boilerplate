# NextJS TailwindCSS and TypeScript Frontend App

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run the development server, make sure you have Docker Compose installed and then run:

```bash
docker-compose up
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.

### Next.js, React

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [ISR](https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/) - a guide to Incremental Static Regeneration (ISR) With Next.js
- [Overview of JavaScript rendering methods](https://css-tricks.com/rendering-spectrum/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)!

### CSS

[Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) is used as CSS library.

## Code formatting / styling

1. Formatting rules - handled by [Prettier](https://prettier.io/)
2. Code-quality rules - handled by [Eslint](https://www.npmjs.com/package/eslint)
3. Typechecking - handled by Typescript compiler

Testing and linting is enforced locally via Git hooks by [Husky](https://github.com/typicode/husky/tree/master) and [lint-staged](https://preview.npmjs.com/package/lint-staged/).
Before commit, the code is automatically formatted by Prettier. Before pushing up, `npm test` is being run, which prevents malformed code to be pushed up.
There are IDE integrations available for automatic formatting, error visualization, snippets, check below for examples.
Eslint and typechecking are also being ran by Next.js during build.

## Recommended IDE integrations

### VS Code

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - automatic formatting with Prettier on save
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

Recommended workspace settings.json:

```json5
{
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': true, // format on save
  },
}
```
