# @revivejs/angular-multiselect-dropdown

> A maintained Angular multiselect dropdown for release lines from Angular 2 through Angular 21, with search, grouping, custom item and badge templates, checkbox selection, lazy loading hooks, and Material-inspired theming from Angular 14 onward.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/angular-multiselect-dropdown/)** | **[npm](https://www.npmjs.com/package/@revivejs/angular-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/angular-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/angular-multiselect-dropdown)**

**Current working line in this repo:** `21.0.0`

---

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown). Current maintenance, docs restructuring, Angular line stewardship, and publishing by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-multiselect-dropdown).

## Rename note

This project now lives under the clearer package name:

- new package: `@revivejs/angular-multiselect-dropdown`
- previous package: `@revivejs/angular2-multiselect-dropdown`

The public component selector stays the same for compatibility:

- selector preserved: `<angular2-multiselect>`

## Why this package

The original multiselect dropdown became hard to maintain across newer Angular releases. This maintained line keeps the familiar API shape, selector, form bindings, and template hooks while organizing the project around versioned release lines from Angular 2 through Angular 21.

From Angular 14 onward, the documentation and styling direction move to the remodulated Material-inspired presentation introduced by ReviveJS, while the earlier lines keep a more classic compatibility shell.

## Highlights

- Selector compatibility with `<angular2-multiselect>`
- `[(ngModel)]` and `formControlName` support
- Search and filter
- Group by field
- Custom item templates with `<c-item>`
- Custom badge templates with `<c-badge>`
- Lazy loading hooks
- Bundled `default.theme.css`
- Bundled `custom.theme.scss` and `custom.theme.css`
- Versioned docs structure from Angular 2 to Angular 21

## Angular line matrix

Angular 3 is intentionally absent because Angular did not ship a stable major 3 release.

| Package line | Angular line | Docs shell |
| :---: | :---: | :--- |
| `2.0.0` | `2.x` | Classic |
| `4.0.0` | `4.x` | Classic |
| `5.0.0` | `5.x` | Classic |
| `6.0.0` | `6.x` | Classic |
| `7.0.0` | `7.x` | Classic |
| `8.0.0` | `8.x` | Classic |
| `9.0.0` | `9.x` | Classic |
| `10.0.0` | `10.x` | Classic |
| `11.0.0` | `11.x` | Classic |
| `12.0.0` | `12.x` | Classic |
| `13.0.0` | `13.x` | Classic |
| `14.0.0` | `14.x` | Material refined |
| `15.0.0` | `15.x` | Material refined |
| `16.0.0` | `16.x` | Material refined |
| `17.0.0` | `17.x` | Material refined |
| `18.0.0` | `18.x` | Material refined |
| `19.0.0` | `19.x` | Material refined |
| `20.0.0` | `20.x` | Material refined |
| `21.0.0` | `21.x` | Material refined |

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

## Custom CSS and SCSS themes

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

## Basic usage

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
  (onDeSelect)="onItemDeSelect($event)">
</angular2-multiselect>
```

## Templates and forms

- `<c-item>` lets you provide a custom item template.
- `<c-badge>` lets you customize selected badge rendering.
- `[(ngModel)]` remains first-class.
- `formControlName` is supported for reactive forms.

## Local workflow

```bash
npm install
npm run docs:sync
npm run build-package
npm run docs:install:angular-21
npm run build:docs:angular-21
```

## License

MIT
