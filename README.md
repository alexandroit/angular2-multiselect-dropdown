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

## Why this library?

The original `angular2-multiselect-dropdown` package became hard to maintain across newer Angular releases. This maintained line keeps the familiar API shape, form bindings, event outputs, and template hooks while organizing the project around explicit Angular-major release lines from Angular 2 through Angular 21.

From Angular 14 onward, the documentation and styling direction move to the remodulated Material-inspired presentation introduced by ReviveJS. The earlier lines keep a classic compatibility shell so older teams can still find a familiar experience.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular release lines from 2 through 21 | ✅ |
| Primary selector `<angular-multiselect>` | ✅ |
| Legacy selector alias `<angular2-multiselect>` | ✅ |
| `[(ngModel)]` support | ✅ |
| `formControlName` support | ✅ |
| Search and filter | ✅ |
| Group by field | ✅ |
| Custom item template with `<c-item>` | ✅ |
| Custom badge template with `<c-badge>` | ✅ |
| Lazy loading hooks | ✅ |
| Remote data patterns | ✅ |
| Bundled `default.theme.css` | ✅ |
| Bundled `custom.theme.scss` | ✅ |
| Bundled `custom.theme.css` | ✅ |
| GitHub Pages docs by Angular line | ✅ |

## Table of Contents

1. [Rename Note](#rename-note)
2. [Angular Version Compatibility](#angular-version-compatibility)
3. [Installation](#installation)
4. [Setup](#setup)
5. [Basic Usage](#basic-usage)
6. [Custom CSS and SCSS Themes](#custom-css-and-scss-themes)
7. [Templates and Forms](#templates-and-forms)
8. [Run Locally](#run-locally)
9. [License](#license)

## Rename Note

- new package: `@revivejs/angular-multiselect-dropdown`
- previous package: `@revivejs/angular2-multiselect-dropdown`
- primary selector: `<angular-multiselect>`
- legacy alias still accepted: `<angular2-multiselect>`

## Angular Version Compatibility

Angular 3 is intentionally absent because Angular did not ship a stable major 3 release.

| Package version | Angular line | Docs shell | Demo link |
| :---: | :---: | :--- | :--- |
| **21.0.0** | **21.x** | Material refined | [Angular 21 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-21/) |
| **20.0.0** | **20.x** | Material refined | [Angular 20 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-20/) |
| **19.0.0** | **19.x** | Material refined | [Angular 19 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-19/) |
| **18.0.0** | **18.x** | Material refined | [Angular 18 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-18/) |
| **17.0.0** | **17.x** | Material refined | [Angular 17 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-17/) |
| **16.0.0** | **16.x** | Material refined | [Angular 16 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-16/) |
| **15.0.0** | **15.x** | Material refined | [Angular 15 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-15/) |
| **14.0.0** | **14.x** | Material refined | [Angular 14 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-14/) |
| **13.0.0** | **13.x** | Classic | [Angular 13 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-13/) |
| **12.0.0** | **12.x** | Classic | [Angular 12 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-12/) |
| **11.0.0** | **11.x** | Classic | [Angular 11 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-11/) |
| **10.0.0** | **10.x** | Classic | [Angular 10 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-10/) |
| **9.0.0** | **9.x** | Classic | [Angular 9 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-9/) |
| **8.0.0** | **8.x** | Classic | [Angular 8 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-8/) |
| **7.0.0** | **7.x** | Classic | [Angular 7 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-7/) |
| **6.0.0** | **6.x** | Classic | [Angular 6 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-6/) |
| **5.0.0** | **5.x** | Classic | [Angular 5 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-5/) |
| **4.0.0** | **4.x** | Classic | [Angular 4 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-4/) |
| **2.0.0** | **2.x** | Classic | [Angular 2 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-2/) |

## Installation

```bash
npm install @revivejs/angular-multiselect-dropdown
```

## Setup

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

Add the default theme:

```json
"styles": [
  "node_modules/@revivejs/angular-multiselect-dropdown/themes/default.theme.css"
]
```

## Basic Usage

```ts
dropdownList = [
  { id: 1, itemName: 'India' },
  { id: 2, itemName: 'Singapore' },
  { id: 3, itemName: 'Australia' },
  { id: 4, itemName: 'Canada' }
];

selectedItems = [{ id: 2, itemName: 'Singapore' }];

dropdownSettings = {
  singleSelection: false,
  text: 'Select Countries',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  enableSearchFilter: true,
  tagToBody: false
};
```

```html
<angular-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings"
  (onSelect)="onItemSelect($event)"
  (onDeSelect)="onItemDeSelect($event)">
</angular-multiselect>
```

## Custom CSS and SCSS Themes

The package also ships a full starter theme in both formats:

- `node_modules/@revivejs/angular-multiselect-dropdown/themes/custom.theme.scss`
- `node_modules/@revivejs/angular-multiselect-dropdown/themes/custom.theme.css`

Use the `scss` file when you want full control over the component look inside your app source.

```json
"styles": [
  "src/styles.scss",
  "src/styles/multiselect-dropdown.theme.scss"
]
```

## Templates and Forms

- `<c-item>` lets you provide a custom item template.
- `<c-badge>` lets you customize selected badge rendering.
- `[(ngModel)]` remains first-class.
- `formControlName` is supported for reactive forms.
- The legacy selector alias remains available for migration-safe upgrades.

## Run Locally

```bash
npm install
npm run docs:sync
npm run build-package
npm run docs:install:angular-21
npm run build:docs:angular-21
```

## License

MIT
