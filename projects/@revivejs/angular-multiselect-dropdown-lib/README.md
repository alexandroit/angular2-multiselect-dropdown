# @revivejs/angular-multiselect-dropdown

> A maintained Angular multiselect dropdown for release lines from Angular 2 through Angular 21, with search, grouping, custom item and badge templates, checkbox selection, lazy loading hooks, and Material-inspired theming from Angular 14 onward.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/blob/master/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/stargazers)

**[Documentation & Demo Matrix](https://alexandroit.github.io/angular-multiselect-dropdown/)** | **[Angular 21 Demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-21/)** | **[npm](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/angular-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/angular-multiselect-dropdown)**

**Current working line in this repo:** `21.0.0`

---

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown). Current maintenance, docs restructuring, Angular line stewardship, and publishing by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-multiselect-dropdown).

## Rename Note

- new package: `@revivejs/angular-multiselect-dropdown`
- previous package: `@revivejs/angular2-multiselect-dropdown`
- primary selector: `<angular-multiselect>`
- legacy alias still accepted: `<angular2-multiselect>`

## Highlights

- Angular release lines from 2 through 21
- Primary selector `<angular-multiselect>`
- Legacy alias `<angular2-multiselect>`
- `[(ngModel)]` and `formControlName`
- Search and filter
- Group by field
- `<c-item>` and `<c-badge>` template hooks
- Lazy loading hooks
- `default.theme.css`
- `custom.theme.scss` and `custom.theme.css`

## Angular Version Compatibility

| Package version | Angular line | Demo link |
| :---: | :---: | :--- |
| **21.0.0** | **21.x** | [Angular 21 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-21/) |
| **20.0.0** | **20.x** | [Angular 20 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-20/) |
| **19.0.0** | **19.x** | [Angular 19 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-19/) |
| **18.0.0** | **18.x** | [Angular 18 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-18/) |
| **17.0.0** | **17.x** | [Angular 17 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-17/) |
| **16.0.0** | **16.x** | [Angular 16 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-16/) |
| **15.0.0** | **15.x** | [Angular 15 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-15/) |
| **14.0.0** | **14.x** | [Angular 14 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-14/) |
| **13.0.0** | **13.x** | [Angular 13 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-13/) |
| **12.0.0** | **12.x** | [Angular 12 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-12/) |
| **11.0.0** | **11.x** | [Angular 11 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-11/) |
| **10.0.0** | **10.x** | [Angular 10 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-10/) |
| **9.0.0** | **9.x** | [Angular 9 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-9/) |
| **8.0.0** | **8.x** | [Angular 8 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-8/) |
| **7.0.0** | **7.x** | [Angular 7 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-7/) |
| **6.0.0** | **6.x** | [Angular 6 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-6/) |
| **5.0.0** | **5.x** | [Angular 5 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-5/) |
| **4.0.0** | **4.x** | [Angular 4 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-4/) |
| **2.0.0** | **2.x** | [Angular 2 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-2/) |

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
