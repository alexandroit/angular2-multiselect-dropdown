# @revivejs/angular2-multiselect-dropdown

> The most complete **Angular 21 multiselect dropdown** for classic Angular forms workflows: search, group by, custom templates, lazy loading, reactive forms, and template-driven forms in one actively maintained package.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular2-multiselect-dropdown/blob/master/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular2-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/angular2-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/angular2-multiselect-dropdown)** | **[npm](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)** | **[Changelog](https://github.com/alexandroit/angular2-multiselect-dropdown/blob/master/CHANGELOG.md)**

---

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown). Current maintenance, Angular upgrades, and package publishing by **Alexandro Paixao Marques**.

---

## Why this library?

The original `angular2-multiselect-dropdown` package is no longer actively maintained. This fork keeps the component alive for modern Angular applications, updates it for each major Angular release, and preserves the familiar API that many existing projects still use.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 21 release line | ✅ |
| Single and multi selection | ✅ |
| Search and filter | ✅ |
| Custom search API | ✅ |
| Group by field | ✅ |
| Custom item templates (`<c-item>`) | ✅ |
| Custom badge templates (`<c-badge>`) | ✅ |
| Template-driven forms (`ngModel`) | ✅ |
| Reactive forms (`formControlName`) | ✅ |
| Lazy loading and virtual scroll | ✅ |
| Remote data pagination (`onScrollToEnd`) | ✅ |
| Add new item from search input | ✅ |
| Custom theming (SCSS) | ✅ |
| Auto-position (top or bottom) | ✅ |
| Append to body (`tagToBody`) | ✅ |
| Keyboard navigation and Escape to close | ✅ |
| Zoneless-ready demo app (Angular 21) | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Basic Usage](#basic-usage)
5. [Theming](#theming)
6. [Custom Templates](#custom-templates)
7. [Template-Driven Forms](#template-driven-forms)
8. [Reactive Forms](#reactive-forms)
9. [Lazy Loading](#lazy-loading)
10. [Settings](#settings)
11. [Events](#events)
12. [Angular 21 Upgrade Notes](#angular-21-upgrade-notes)
13. [Run Locally](#run-locally)
14. [License](#license)

## Angular Version Compatibility

| @revivejs/angular2-multiselect-dropdown | Angular | TypeScript | Node.js |
| :---: | :---: | :---: | :---: |
| **13.x** | **21.x** | **5.9.x** | **>= 20.19** |
| 12.x | 20.x | 5.8.x | >= 20.19 |
| 11.x | 19.x | 5.6.x | >= 18.19 |
| 10.x | 18.x | 5.4.x | >= 18.13 |
| 9.x | 17.x | 5.2.x | >= 18.13 |
| 8.x | 16.x | 5.0.x | >= 16.14 |
| 7.x | 15.x | 4.8.x | >= 14.20 |
| 6.x | 14.x | 4.6.x | >= 14.15 |

## Installation

```bash
npm install @revivejs/angular2-multiselect-dropdown
```

## Setup

### 1. Import the module

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from '@revivejs/angular2-multiselect-dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

> **Angular 21 note:** Angular 21 applications are zoneless by default. You do not need a `zone.js` runtime import in `polyfills.ts` for the demo setup shown here. If your application still relies on ZoneJS-based scheduling, you can opt in explicitly using Angular's change-detection providers.

### 2. Add the default theme

```json
// angular.json
"styles": [
  "node_modules/@revivejs/angular2-multiselect-dropdown/themes/default.theme.css"
]
```

## Basic Usage

```ts
// app.component.ts
dropdownList = [
  { id: 1, itemName: 'India' },
  { id: 2, itemName: 'Singapore' },
  { id: 3, itemName: 'Australia' },
  { id: 4, itemName: 'Canada' },
  { id: 5, itemName: 'South Korea' }
];

selectedItems = [{ id: 2, itemName: 'Singapore' }];

dropdownSettings = {
  singleSelection: false,
  text: 'Select Countries',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  enableSearchFilter: true,
  classes: 'myclass custom-class'
};

onItemSelect(item: any): void {
  console.log(item);
}

onItemDeSelect(item: any): void {
  console.log(item);
}

onSelectAll(items: any): void {
  console.log(items);
}

onDeSelectAll(items: any): void {
  console.log(items);
}
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

## Theming

From `v3.0.0` onward you must include the default theme CSS:

```json
"styles": [
  "node_modules/@revivejs/angular2-multiselect-dropdown/themes/default.theme.css"
]
```

You can create your own theme by copying the [default SCSS theme](https://github.com/alexandroit/angular2-multiselect-dropdown/blob/master/projects/%40revivejs/angular2-multiselect-dropdown-lib/themes/default.theme.scss).

## Custom Templates

```html
<!-- Custom item template -->
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label style="color: #333; min-width: 150px;">{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 30px;" />
      <label>Capital - {{ item.capital }}</label>
    </ng-template>
  </c-item>
</angular2-multiselect>

<!-- Custom badge template -->
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-badge>
    <ng-template let-item="item">
      <img [src]="item.image" style="width: 16px; margin-right: 5px;" />
      <label>{{ item.itemName }}</label>
    </ng-template>
  </c-badge>
</angular2-multiselect>
```

## Template-Driven Forms

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit()">
  <angular2-multiselect
    [data]="itemList"
    [(ngModel)]="formModel.skills"
    [settings]="settings"
    name="skills"
    required>
  </angular2-multiselect>
</form>
```

```ts
formModel = {
  name: '',
  email: 'user@example.com',
  skills: [{ id: 1, itemName: 'Angular' }]
};
```

## Reactive Forms

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <angular2-multiselect
    [data]="itemList"
    [(ngModel)]="selectedItems"
    [settings]="settings"
    formControlName="skills">
  </angular2-multiselect>
</form>
```

```ts
this.userForm = this.fb.group({
  name: ['', Validators.required],
  skills: [[], Validators.required]
});
```

## Lazy Loading

```ts
dropdownSettings = {
  lazyLoading: true,
  text: 'Select Items'
};

fetchMore(event: any): void {
  // Fetch the next page and append it to dropdownList
}
```

```html
<angular2-multiselect
  [data]="dropdownList"
  [(ngModel)]="selectedItems"
  [settings]="dropdownSettings"
  (onScrollToEnd)="fetchMore($event)">
</angular2-multiselect>
```

## Settings

| Setting | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `singleSelection` | `Boolean` | Single item selection only. | `false` |
| `text` | `String` | Placeholder when nothing is selected. | `'Select'` |
| `enableCheckAll` | `Boolean` | Show select-all option. | `false` |
| `selectAllText` | `String` | Label for select-all. | `'Select All'` |
| `unSelectAllText` | `String` | Label for unselect-all. | `'UnSelect All'` |
| `enableSearchFilter` | `Boolean` | Enable search and filter input. | `false` |
| `enableFilterSelectAll` | `Boolean` | Select-all checkbox in filtered results. | `true` |
| `filterSelectAllText` | `String` | Label for filter select-all. | `'Select all filtered results'` |
| `filterUnSelectAllText` | `String` | Label for filter unselect-all. | `'UnSelect all filtered results'` |
| `maxHeight` | `Number` | Maximum dropdown height in pixels. | `300` |
| `badgeShowLimit` | `Number` | Max badges shown in the input. | All |
| `classes` | `String` | Extra CSS classes on the host element. | `''` |
| `limitSelection` | `Number` | Maximum number of selectable items. | none |
| `disabled` | `Boolean` | Disable the dropdown. | `false` |
| `searchPlaceholderText` | `String` | Search input placeholder. | `'Search'` |
| `groupBy` | `String` | Field name used to group items. | none |
| `selectGroup` | `Boolean` | Allow selecting a whole group. | `false` |
| `searchAutofocus` | `Boolean` | Autofocus search on open. | `true` |
| `labelKey` | `String` | Property used as the item label. | `'itemName'` |
| `primaryKey` | `String` | Property used to identify items. | `'id'` |
| `position` | `String` | Dropdown position: `'top'` or `'bottom'`. | `'bottom'` |
| `noDataLabel` | `String` | Text shown when the list is empty. | `'No Data Available'` |
| `searchBy` | `Array` | Properties to search by. Defaults to all. | `[]` |
| `lazyLoading` | `Boolean` | Virtual scroll for large datasets. | `false` |
| `showCheckbox` | `Boolean` | Show checkboxes in the list. | `true` |
| `addNewItemOnFilter` | `Boolean` | Add search term as a new item when not found. | `false` |
| `addNewButtonText` | `String` | Label for the add-new button. | `'Add'` |
| `escapeToClose` | `Boolean` | Close dropdown on Escape key. | `true` |
| `autoPosition` | `Boolean` | Auto-detect open direction. | `true` |
| `tagToBody` | `Boolean` | Append dropdown panel to `<body>`. | `true` |

## Events

| Event | Description |
| :--- | :--- |
| `(onSelect)` | Item selected. Returns the item object. |
| `(onDeSelect)` | Item deselected. Returns the item object. |
| `(onSelectAll)` | All items selected. Returns the full list. |
| `(onDeSelectAll)` | All items deselected. Returns `[]`. |
| `(onGroupSelect)` | Group selected. Returns the group's items. |
| `(onGroupDeSelect)` | Group deselected. Returns the group's items. |
| `(onOpen)` | Dropdown opened. |
| `(onClose)` | Dropdown closed. |
| `(onScrollToEnd)` | List scrolled to the end. Useful for remote pagination. |
| `(onAddFilterNewItem)` | Add button clicked when `addNewItemOnFilter` is enabled. |
| `(onFilterSelectAll)` | All filtered items selected. |
| `(onFilterDeSelectAll)` | All filtered items deselected. |

## Angular 21 Upgrade Notes

Version **13.0.3** adds full **Angular 21** support and refreshes the package presentation for npm and GitHub.

### Migration changes applied

- Updated all `@angular/*` runtime packages to `21.2.7`
- Updated `@angular/cli` and `@angular-devkit/build-angular` to `21.2.6`
- Updated `ng-packagr` to `21.2.2`
- Updated `@angular/cdk` to `21.2.5`
- Updated `@ng-bootstrap/ng-bootstrap` to `20.0.0`
- Updated TypeScript to `~5.9.3`
- Updated `zone.js` to `~0.16.1` for the test environment
- Removed the `zone.js` runtime import from `src/polyfills.ts` because Angular 21 is zoneless by default
- Updated event typings in `clickOutside.ts` and `multiselect.component.ts` for Angular 21 compatibility
- Corrected the GitHub Pages build path to match the actual repository site URL

### Packages updated

| Package | v12 | v13 |
| :--- | :--- | :--- |
| `@angular/*` | `~20.3.18` | `~21.2.7` |
| `@angular/cli` | `~20.3.22` | `~21.2.6` |
| `@angular-devkit/build-angular` | `~20.3.22` | `~21.2.6` |
| `ng-packagr` | `~20.3.2` | `~21.2.2` |
| `@angular/cdk` | `~20.2.14` | `~21.2.5` |
| `@ng-bootstrap/ng-bootstrap` | `~19.0.1` | `~20.0.0` |
| `typescript` | `~5.8.0` | `~5.9.3` |
| `zone.js` | `~0.15.0` | `~0.16.1` |

## Run Locally

```bash
# Requires Node.js >= 20.19
git clone https://github.com/alexandroit/angular2-multiselect-dropdown.git
cd angular2-multiselect-dropdown

npm install
npm run build-package
npm start
```

## License

MIT

## Credits

**Original library** created by [Pradeep Terli](https://github.com/PradeepTerli) / [CuppaLabs](https://github.com/CuppaLabs).  
**Maintained by** **Alexandro Paixao Marques** with ongoing upgrades for modern Angular releases.
