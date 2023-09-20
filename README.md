<div align="center">
    <h1>Drino Rx</h1>
    <p>Plugin to use RxJS in Drino</p>
</div>

<div align="center">

[![github ci](https://img.shields.io/github/actions/workflow/status/remscodes/drino-rx/npm-ci.yml.svg?&logo=github&label=CI&style=for-the-badge)](https://github.com/remscodes/drino-rx/actions/workflows/npm-ci.yml)
[![codecov coverage](https://img.shields.io/codecov/c/github/remscodes/drino-rx/main.svg?style=for-the-badge&logo=codecov)](https://codecov.io/gh/remscodes/drino-rx)
[![npm version](https://img.shields.io/npm/v/drino-rx.svg?&style=for-the-badge&logo=npm)](https://www.npmjs.org/package/drino-rx)
[![bundle size](https://img.shields.io/bundlephobia/minzip/drino-rx.svg?style=for-the-badge)](https://bundlephobia.com/package/drino-rx)
[![license](https://img.shields.io/github/license/remscodes/drino-rx.svg?style=for-the-badge)](LICENSE)

</div>

## Installation

```shell
npm install drino-rx
```

## Usage

```ts
import drino from 'drino';
import drinoRx from 'drino-rx';
import { map } from 'rxjs';

drino.use(drinoRx);

drino.get('/my-api')
  .toObservable()
  .pipe(map(res => res.name))
  .subscribe({
    next: name => {
      // handle value 
    }
  });
```

## License

[MIT](LICENSE) © Rémy Abitbol.
