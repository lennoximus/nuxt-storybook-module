# nuxt-storybook-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Storybook Module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-storybook-module` dependency to your project

```bash
yarn add nuxt-storybook-module # or npm install nuxt-storybook-module
```

2. Add `nuxt-storybook-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-storybook-module',

    // With options
    ['nuxt-storybook-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Lennoximus <lennoximus@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-storybook-module/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-storybook-module

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-storybook-module.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-storybook-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/lennoximus.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/lennoximus

[codecov-src]: https://img.shields.io/codecov/c/github/lennoximus.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/lennoximus

[license-src]: https://img.shields.io/npm/l/nuxt-storybook-module.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-storybook-module
