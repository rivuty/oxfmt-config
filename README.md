# @rivuty/oxfmt-config

Shared [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) configuration.

Includes opinionated defaults:

- 120 character print width
- Single quotes
- Arrow function parens omitted when possible
- Import sorting with React imports grouped separately from other external packages

## Installation

```sh
npm add -D @rivuty/oxfmt-config oxfmt
# or
pnpm add -D @rivuty/oxfmt-config oxfmt
```

## Usage

Create an `oxfmt.config.ts` at the root of your project:

```ts
import { config } from '@rivuty/oxfmt-config';

export default config;
```

Then run the formatter:

```sh
# Check formatting
oxfmt --check

# Fix formatting
oxfmt --write
```

## License

@rivuty/oxfmt-config is open-sourced under the [MIT license](LICENSE)
