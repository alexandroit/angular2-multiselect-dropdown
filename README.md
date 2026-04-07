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

## Why this library?

The original `angular2-multiselect-dropdown` package became difficult to maintain across newer Angular releases. This repository is being reorganized into a clear release-line strategy, with one published package line at a time and dedicated documentation surfaces for each Angular major.

The goal is to preserve the familiar multiselect API, event outputs, template hooks, and theme entry points while bringing the project under a cleaner ReviveJS package and documentation structure.

## Features

| Feature | Supported |
| :--- | :---: |
| Release-line strategy from Angular 2 through Angular 21 | ✅ |
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
| Versioned docs shell in this repo | ✅ |

## Table of Contents

1. [Rename Note](#rename-note)
2. [Published Line Status](#published-line-status)
3. [Planned Release Order](#planned-release-order)
4. [Installation](#installation)
5. [Setup](#setup)
6. [Basic Usage](#basic-usage)
7. [Custom CSS and SCSS Themes](#custom-css-and-scss-themes)
8. [Templates and Forms](#templates-and-forms)
9. [Run Locally](#run-locally)
10. [License](#license)

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

## Published Line Status

Angular 3 is intentionally absent because Angular did not ship a stable major 3 release.

| Package version | Maintained line | Status | Demo link |
| :---: | :---: | :--- | :--- |
| **2.0.1** | **2.x line** | Published patch fixing README and package presentation | [Angular 2 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-2/) |

## Planned Release Order

The npm rollout is being published sequentially, one line at a time:

`2.x.x` → `4.x.x` → `5.x.x` → `6.x.x` → `7.x.x` → `8.x.x` → `9.x.x` → `10.x.x` → `11.x.x` → `12.x.x` → `13.x.x` → `14.x.x` → `15.x.x` → `16.x.x` → `17.x.x` → `18.x.x` → `19.x.x` → `20.x.x` → `21.x.x`

Important note:
The repository already contains the scaffolding for the full line matrix, but only the published npm line should be treated as released.

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
cd docs-src/angular-2
npm install --ignore-scripts
npm run build
```

## License

MIT
