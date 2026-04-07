# @revivejs/angular-multiselect-dropdown

> A maintained Angular multiselect dropdown project organized around release lines from Angular 2 through Angular 21, with search, grouping, custom item and badge templates, checkbox selection, lazy loading hooks, and Material-inspired theming from Angular 14 onward.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/blob/master/LICENSE)
[![Angular line](https://img.shields.io/badge/Published%20line-2.0.1-red?style=flat-square&logo=angular)](https://alexandroit.github.io/angular-multiselect-dropdown/angular-2/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/stargazers)

**[Documentation & Demo Matrix](https://alexandroit.github.io/angular-multiselect-dropdown/)** | **[Angular 2 Demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-2/)** | **[npm](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/angular-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/angular-multiselect-dropdown)**

**Latest published version:** `2.0.1`

---

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown). Current maintenance, docs restructuring, Angular line stewardship, and publishing by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-multiselect-dropdown).

## Rename Note

- new package: `@revivejs/angular-multiselect-dropdown`
- previous package: `@revivejs/angular2-multiselect-dropdown`
- primary selector: `<angular-multiselect>`
- legacy alias still accepted: `<angular2-multiselect>`

## Docs and Demo Links

- Demo matrix: `https://alexandroit.github.io/angular-multiselect-dropdown/`
- Angular 2 demo: `https://alexandroit.github.io/angular-multiselect-dropdown/angular-2/`
- npm package: `https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown`
- GitHub repository: `https://github.com/alexandroit/angular-multiselect-dropdown`

## Highlights

- Primary selector `<angular-multiselect>`
- Legacy alias `<angular2-multiselect>`
- Search and filter
- Group by field
- `<c-item>` and `<c-badge>` template hooks
- Template-driven and reactive forms support
- Lazy loading hooks
- `default.theme.css`
- `custom.theme.scss` and `custom.theme.css`

## Published Line Status

| Package version | Maintained line | Demo link |
| :---: | :---: | :--- |
| **2.0.1** | **2.x line** | [Angular 2 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-2/) |

## Installation

```bash
npm install @revivejs/angular-multiselect-dropdown
```

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from '@revivejs/angular-multiselect-dropdown';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularMultiSelectModule]
})
export class AppModule {}
```

## Theme Files

```json
"styles": [
  "node_modules/@revivejs/angular-multiselect-dropdown/themes/default.theme.css"
]
```

You can also start from:

- `node_modules/@revivejs/angular-multiselect-dropdown/themes/custom.theme.scss`
- `node_modules/@revivejs/angular-multiselect-dropdown/themes/custom.theme.css`

## Basic Usage

```html
<angular-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings">
</angular-multiselect>
```

## Release Line Policy

- Angular 2 through 13 follow the classic compatibility shell.
- Angular 14 through 21 follow the remodulated Material-inspired shell.
- Angular 3 is intentionally absent because Angular did not ship a stable major 3 release.
- Full npm publishing should run line by line from Angular 2 up to Angular 21.

## License

MIT
