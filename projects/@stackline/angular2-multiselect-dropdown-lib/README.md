# @stackline/angular2-multiselect-dropdown

> A maintained **Angular 21 multiselect dropdown** for classic Angular forms workflows, with search, grouping, custom item and badge templates, lazy loading, custom CSS/SCSS theming, and support for both template-driven and reactive forms.

[![npm version](https://img.shields.io/npm/v/@stackline/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular2-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@stackline/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular2-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular2-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@stackline/angular2-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular2-multiselect-dropdown/blob/master/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular2-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular2-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/angular2-multiselect-dropdown/)** | **[npm](https://www.npmjs.com/package/@stackline/angular2-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/angular2-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/angular2-multiselect-dropdown)**

**Latest version:** `14.0.1`

---

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown). Current maintenance, Angular upgrades, publishing, and documentation stewardship by [Alexandro Paixao Marques](https://github.com/alexandroit/angular2-multiselect-dropdown).

---

## Why this library?

The original `angular2-multiselect-dropdown` package became difficult to use on current Angular versions. This maintained fork preserves the classic API and template structure while updating packaging, docs, and release metadata for a maintained Angular 21 line, while still keeping older versioned lines documented.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 21 maintained release line | ✅ |
| Multi-select and single-select modes | ✅ |
| Search and filter | ✅ |
| Group by field | ✅ |
| Custom item templates (`<c-item>`) | ✅ |
| Custom badge templates (`<c-badge>`) | ✅ |
| Template-driven forms (`ngModel`) | ✅ |
| Reactive forms (`formControlName`) | ✅ |
| Lazy loading and remote-data hooks | ✅ |
| Theming via bundled CSS/SCSS | ✅ |
| Versioned docs builds per Angular line | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Basic Usage](#basic-usage)
5. [Custom Templates](#custom-templates)
6. [Forms Integration](#forms-integration)
7. [Lazy Loading and Remote Data](#lazy-loading-and-remote-data)
8. [Events](#events)
9. [Run Locally](#run-locally)
10. [License](#license)

## Angular Version Compatibility

Each package family only installs on its matching Angular family. Framework major and package major are not always the same package number, so use the package family column below.

| Package family | Framework family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **14.x** | **Angular 21 only** | **`>=21.0.0 <22.0.0`** | **21.0.0 -> 21.2.8** | [Angular 21 family docs](https://alexandroit.github.io/angular2-multiselect-dropdown/angular-21/) |
| **12.x** | **Angular 20 only** | **`>=20.0.0 <21.0.0`** | **20.0.0 -> 20.3.18** | [Angular 20 family docs](https://alexandroit.github.io/angular2-multiselect-dropdown/angular-20/) |
| **11.x** | **Angular 19 only** | **`>=19.0.0 <20.0.0`** | **19.0.0 -> 19.2.20** | [Angular 19 family docs](https://alexandroit.github.io/angular2-multiselect-dropdown/angular-19/) |
| **14.x** | **Angular 14 only** | **`>=14.0.0 <15.0.0`** | **14.0.0 -> 14.3.0** | [Angular 14 family docs](https://alexandroit.github.io/angular2-multiselect-dropdown/angular-14/) |


## Installation

```bash
npm install @stackline/angular2-multiselect-dropdown
```

Choose the package family from the compatibility table above. Each published family is locked to one framework major only.

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from '@stackline/angular2-multiselect-dropdown';

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
  "node_modules/@stackline/angular2-multiselect-dropdown/themes/default.theme.css"
]
```

## Custom CSS and SCSS Themes

The package now also ships a full custom starter theme in both formats:

- `node_modules/@stackline/angular2-multiselect-dropdown/themes/custom.theme.scss`
- `node_modules/@stackline/angular2-multiselect-dropdown/themes/custom.theme.css`

Use the `scss` file when you want to take over the component styles completely and keep the theme in your app source:

```json
"styles": [
  "src/styles.scss",
  "src/styles/multiselect-dropdown.theme.scss"
]
```

Start `src/styles/multiselect-dropdown.theme.scss` from the package file above and edit the tokens and selectors freely.

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
<angular2-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings"
  (onSelect)="onItemSelect($event)"
  (onDeSelect)="onItemDeSelect($event)"
  (onSelectAll)="onSelectAll($event)"
  (onDeSelectAll)="onDeSelectAll($event)">
</angular2-multiselect>
```

## Custom Templates

```html
<angular2-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label>{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 24px; margin-left: 8px;" />
    </ng-template>
  </c-item>
</angular2-multiselect>
```

## Forms Integration

### Template-driven forms

```html
<form #form="ngForm">
  <angular2-multiselect
    [data]="skills"
    [(ngModel)]="selectedSkills"
    [settings]="settings"
    name="skills"
    required>
  </angular2-multiselect>
</form>
```

### Reactive forms

```html
<form [formGroup]="userForm">
  <angular2-multiselect
    [data]="skills"
    [settings]="settings"
    formControlName="skills">
  </angular2-multiselect>
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

For card-based, sticky, or dashboard layouts, keep `tagToBody: false` so the dropdown panel stays anchored to the field and does not jump across the page.

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
npm run build-package
npm run docs:install:angular-21
npm run build:docs:angular-21
```

## License

MIT
