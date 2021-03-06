---
author: Sebastian Pieczynski
date: 2019.01.03
keywords: react, typescript, babel, webpack, jest, eslint, jest-eslint-runner, jest-runner-tsc
---

**Not ready for production / Alpha version, use at your own risk.**

# TL;DR

This boilerplate tries to achive Typescript compatibility with React development while retaining all functionality of standard JS tools like ESlint, Babel and Webpack.

# Installation

Clone this repositiory and run `yarn install`. All dependencies are local to this environment.

# why?

I love good tools and love building them. I also wanted to learn React/JS/Testing properly so I decided to get all the best tools available for JS/React etc. and combine them into a coherent package. This proved to be more difficult and exciting than it looked like. I was inspired by Kent C. Dodds to use TypeScript for type checking only and have all other tools from pure JS ecosystem. It started with videos about Jest runners and then I "overengineered" the starter package.

# Goal

Typescript used only for typechecking, React development with Jest and (WIP) Cypress as testing environment. All transpiled by Babel 7 and packaged with Webpack 4. ESLint/Stylelint for static code linting. Prettier for code style.

# The Stack

## What works

- Typescript,
- Jest,
- Jest runners:
  - ESLint,
  - StyleLint (css, scss) with Prettier compatibility,
  - Type Checking via TSC,
  - Tests,
- Prettier rules,
- Eslint,
- Stylelint,
- React,
- Babel,
- Babel Polyfills based on usage,
- Webpack,
- Web Dev Server.
- SASS in webpack.
- HMR.
- React Testing Library.

## What should work

- Emotion.
- Sass in TS(X).

## WIP before tagging 1.0

- webpack - it can be optimized or improved.
- Cypress.

## TODO

- Example app using all of the above.
- Add Documentation links for all used packages so configuration changes are easier.
- Create documentation for the setup.

## Future Plans

- Material UI 4 (Start of Q2 2019)
- Create example React application with hooks and testing best practices (Start of Q2 2019)
- GraphQL? (Apollo/Prisma?).

## Known Bugs

Runnning Cypress in debug/log mode shows:

```
GET http://localhost:8080/__/main.js net::ERR_ABORTED
Navigated to http://localhost:61036/__/
VM47 cypress_runner.js:153927 Download the React DevTools for a better development experience: https://fb.me/react-devtools
VM47 cypress_runner.js:114815 Download the React DevTools for a better development experience: https://fb.me/react-devtools
VM47 cypress_runner.js:68763 Slow network is detected. Fallback font will be used while loading: http://localhost:61036/__cypress/runner/fonts/fontawesome-webfont.woff2?v=4.6.3
VM47 cypress_runner.js:163613 console.clear() was prevented due to 'Preserve log'
localhost/:13 GET http://localhost:8080/__/main.js net::ERR_ABORTED
Navigated to http://localhost:8080/__/
Navigated to http://localhost:61036/__/
VM57 cypress_runner.js:153927 Download the React DevTools for a better development experience: https://fb.me/react-devtools
VM57 cypress_runner.js:114815 Download the React DevTools for a better development experience: https://fb.me/react-devtools
VM57 cypress_runner.js:68763 Slow network is detected. Fallback font will be used while loading: http://localhost:61036/__cypress/runner/fonts/fontawesome-webfont.woff2?v=4.6.3
VM57 cypress_runner.js:163613 console.clear() was prevented due to 'Preserve log'
```

It seems to be looking for 'main.js'



PS. this kind of configuration is probably trivial for most experienced devs, but I have not found such project on the web so here it is. I consider this to be the baseline for any serious application. It aims to provide both great developer experience and quality assurance due to extensive linting and testing configured as well as automating all of the above.

It took too long to make this work so I hope someone finds it useful. If you like it tell me about it or help me improve it.

I will be most grateful for suggestions as I am learning all the tools while building this.

# Thank you

At some point in this journey I stumbled upon these articles and they did help clarify one thing or another or were source of inspiration:

- Kent C. Dodds - YouTube channel and testingjavascript.com
- https://blog.wax-o.com/2018/05/webpack-loaders-babel-sourcemaps-react-hot-module-reload-typescript-modules-code-splitting-and-lazy-loading-full-tutorial-to-transpile-and-bundle-your-code/
- https://developerhandbook.com/webpack/webpack-4-from-absolute-scratch/
- https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/
- https://www.thebasement.be/working-with-babel-7-and-webpack/
- https://medium.com/@zural143/basic-webpack-4-and-es5-to-es6-transpiler-using-babel-dc66e72c86c6
- http://artsy.github.io/blog/2017/11/27/Babel-7-and-TypeScript/
- https://medium.com/oredi/webpack-with-babel-7-b61f7caa9565
- https://www.valentinog.com/blog/react-webpack-babel/
- https://codeburst.io/webpack-typescript-react-part-1-dc154e250f23
- https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a
- https://github.com/g-plane/pluggable-babel-eslint
- https://basarat.gitbooks.io/typescript/docs/project/tsconfig.html
- http://2ality.com/2017/02/babel-preset-env.html
- All package owners and supporters.

Post configuration links:

- https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a
- https://www.valentinog.com/blog/webpack-tutorial/
- http://jsconfig.com/guide-setup-webpack4-development-production/
-
