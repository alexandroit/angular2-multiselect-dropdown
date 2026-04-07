# @revivejs/angular-multiselect-dropdown

> A maintained Angular multiselect dropdown for classic Angular forms workflows, with search, grouping, custom item and badge templates, lazy loading, custom CSS/SCSS theming, and support for both template-driven and reactive forms.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/blob/master/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21.x-red?style=flat-square&logo=angular)](https://alexandroit.github.io/angular-multiselect-dropdown/angular-21/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/angular-multiselect-dropdown/)** | **[Angular 21 Demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-21/)** | **[npm](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/angular-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/angular-multiselect-dropdown)**

**Latest version:** `21.0.0`

---

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown). Current maintenance, Angular line stewardship, publishing, and documentation by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-multiselect-dropdown).

---

## Why this library?

The original `angular2-multiselect-dropdown` package became difficult to keep current across multiple Angular generations. This maintained package keeps the classic API and template structure intact, introduces the new primary selector `<angular-multiselect>`, preserves the legacy alias `<angular2-multiselect>`, and publishes the project line by line so older applications can keep a predictable upgrade path.

The repository contains the full documentation matrix from Angular 2 through Angular 21. The npm rollout is complete line by line, and `21.0.0` is the current latest published line for Angular 21 applications.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 21 latest published release line | ✅ |
| Multi-select and single-select modes | ✅ |
| Search and filter | ✅ |
| Group by field | ✅ |
| Custom item templates (`<c-item>`) | ✅ |
| Custom badge templates (`<c-badge>`) | ✅ |
| Template-driven forms (`ngModel`) | ✅ |
| Reactive forms (`formControlName`) | ✅ |
| Lazy loading and remote-data hooks | ✅ |
| Theming via bundled CSS/SCSS | ✅ |
| Primary selector `<angular-multiselect>` | ✅ |
| Legacy selector `<angular2-multiselect>` | ✅ |
| Versioned docs builds per Angular line | ✅ |

## Table of Contents

1. [Rename Note](#rename-note)
2. [Angular Version Compatibility](#angular-version-compatibility)
3. [Installation](#installation)
4. [Setup](#setup)
5. [Custom CSS and SCSS Themes](#custom-css-and-scss-themes)
6. [Basic Usage](#basic-usage)
7. [Custom Templates](#custom-templates)
8. [Forms Integration](#forms-integration)
9. [Lazy Loading and Remote Data](#lazy-loading-and-remote-data)
10. [Events](#events)
11. [Run Locally](#run-locally)
12. [License](#license)

## Rename Note

- new package: `@revivejs/angular-multiselect-dropdown`
- previous package: `@revivejs/angular2-multiselect-dropdown`
- primary selector: `<angular-multiselect>`
- legacy alias still accepted: `<angular2-multiselect>`

## Angular Version Compatibility

Angular 3 is intentionally absent because Angular did not ship a stable major 3 release.

| Package version | Angular version | TypeScript version | Demo link |
| :---: | :---: | :---: | :--- |
| **21.0.0** | **21.x latest published line** | **5.9.x build pipeline** | [Angular 21 demo](https://alexandroit.github.io/angular-multiselect-dropdown/angular-21/) |

Published compatibility lines are available for Angular 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, and 21.

## Installation

```bash
npm install @revivejs/angular-multiselect-dropdown
```

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from '@revivejs/angular-multiselect-dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule
  ]
})
export class AppModule {}
```

### 2. Add the default theme

```json
"styles": [
  "node_modules/@revivejs/angular-multiselect-dropdown/themes/default.theme.css"
]
```

## Custom CSS and SCSS Themes

The package also ships a full custom starter theme in both formats:

- `node_modules/@revivejs/angular-multiselect-dropdown/themes/custom.theme.scss`
- `node_modules/@revivejs/angular-multiselect-dropdown/themes/custom.theme.css`

Use the `scss` file when you want to take over the component styles completely and keep the theme in your app source:

```json
"styles": [
  "src/styles.scss",
  "src/styles/multiselect-dropdown.theme.scss"
]
```

Start `src/styles/multiselect-dropdown.theme.scss` from the package file above and edit the selectors and tokens freely.

Use the `css` file when you want a plain compiled starter that can be copied and adjusted without a Sass pipeline.

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
  (onDeSelect)="onItemDeSelect($event)"
  (onSelectAll)="onSelectAll($event)"
  (onDeSelectAll)="onDeSelectAll($event)">
</angular-multiselect>
```

## Custom Templates

```html
<angular-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label>{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 24px; margin-left: 8px;" />
    </ng-template>
  </c-item>
</angular-multiselect>
```

The same template contract also works with the legacy selector:

```html
<angular2-multiselect></angular2-multiselect>
```

## Forms Integration

### Template-driven forms

```html
<form #form="ngForm">
  <angular-multiselect
    [data]="skills"
    [(ngModel)]="selectedSkills"
    [settings]="settings"
    name="skills"
    required>
  </angular-multiselect>
</form>
```

### Reactive forms

```html
<form [formGroup]="userForm">
  <angular-multiselect
    [data]="skills"
    [settings]="settings"
    formControlName="skills">
  </angular-multiselect>
</form>
```

## Lazy Loading and Remote Data

Enable lazy loading through the settings object and respond to the scroll event from your container logic:

```ts
settings = {
  text: 'Select Items',
  enableSearchFilter: true,
  lazyLoading: true,
  labelKey: 'name',
  primaryKey: 'id'
};
```

The versioned docs include working examples for lazy loading, remote data, grouping, templating, and forms usage.

For sticky cards, constrained containers, or dashboard layouts, keep `tagToBody: false` so the dropdown panel stays anchored to the field and does not jump across the page.

## Events

The classic output contract is preserved:

- `(onSelect)`
- `(onDeSelect)`
- `(onSelectAll)`
- `(onDeSelectAll)`
- `(onAddFilterNewItem)`

## Run Locally

```bash
npm install
npm run docs:sync
npm run build-package
cd docs-src/angular-21
npm install --ignore-scripts
npm run build
```

## License

MIT
