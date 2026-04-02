# @revivejs/angular2-multiselect-dropdown

> Angular 20 multiselect dropdown component — search, grouping, templating, lazy loading, reactive forms and template-driven forms support. Compatible with Angular 14–20.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![npm monthly downloads](https://img.shields.io/npm/dm/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://github.com/revivejs/angular2-multiselect-dropdown/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://github.com/revivejs/angular2-multiselect-dropdown/stargazers)

**[📖 Documentation](https://revivejs.github.io/angular2-multiselect-dropdown)** | **[🚀 Live Demos](https://revivejs.github.io/angular2-multiselect-dropdown)** | **[📦 npm](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)**

---

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown). Enhanced and maintained by [ReviveJS](https://github.com/revivejs/angular2-multiselect-dropdown) — keeping unmaintained Angular libraries alive and secure.

---

## Features

- ✅ Angular 14 · 15 · 16 · 17 · 18 · 19 · **20** supported
- ✅ Single and multi selection
- ✅ Search / filter with custom search API
- ✅ Group by field
- ✅ Custom item and badge templates (`<c-item>`, `<c-badge>`)
- ✅ Template-driven forms (`ngModel`)
- ✅ Reactive forms (`formControlName`)
- ✅ Lazy loading / virtual scroll for large datasets
- ✅ `onScrollToEnd` event for remote data pagination
- ✅ Add new item on filter
- ✅ Custom theming (SCSS)
- ✅ Auto-position (top / bottom)
- ✅ Append to body (`tagToBody`)
- ✅ Keyboard navigation + Escape to close

---

## Table of Contents

1. [Installation](#installation)
2. [Angular Version Compatibility](#angular-version-compatibility)
3. [Usage](#usage)
4. [Theming](#theming)
5. [Custom Templates](#custom-templates)
6. [Template-Driven Forms](#template-driven-forms)
7. [Reactive Forms](#reactive-forms)
8. [Settings](#settings)
9. [Events](#events)
10. [Lazy Loading](#lazy-loading)
11. [Angular 20 Upgrade Notes](#angular-20-upgrade-notes)
12. [Run Locally](#run-locally)
13. [License](#license)

---

## Installation

```bash
npm install @revivejs/angular2-multiselect-dropdown
```

---

## Angular Version Compatibility

| @revivejs/angular2-multiselect-dropdown | Angular |
|:---:|:---:|
| **12.x** | **20.x** |
| 11.x | 19.x |
| 10.x | 18.x |
| 9.x  | 17.x |
| 8.x  | 16.x |
| 7.x  | 15.x |
| 6.x  | 14.x |

---

## Usage

Import `AngularMultiSelectModule` into your `NgModule`. Angular's `FormsModule` is also required.

```ts
import { AngularMultiSelectModule } from '@revivejs/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AngularMultiSelectModule,
    FormsModule
  ]
})
export class AppModule {}
```

Declare the data variables in your component:

```ts
import { Component, OnInit } from '@angular/core';

@Component({ standalone: false, ... })
export class AppComponent implements OnInit {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    ngOnInit() {
        this.dropdownList = [
            { id: 1, itemName: 'India' },
            { id: 2, itemName: 'Singapore' },
            { id: 3, itemName: 'Australia' },
            { id: 4, itemName: 'Canada' },
            { id: 5, itemName: 'South Korea' }
        ];
        this.selectedItems = [
            { id: 2, itemName: 'Singapore' },
            { id: 3, itemName: 'Australia' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: 'Select Countries',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All',
            enableSearchFilter: true,
            classes: 'myclass custom-class'
        };
    }

    onItemSelect(item: any) { console.log(item); }
    OnItemDeSelect(item: any) { console.log(item); }
    onSelectAll(items: any) { console.log(items); }
    onDeSelectAll(items: any) { console.log(items); }
}
```

Add the component to your template:

```html
<angular2-multiselect
    [data]="dropdownList"
    [(ngModel)]="selectedItems"
    [settings]="dropdownSettings"
    (onSelect)="onItemSelect($event)"
    (onDeSelect)="OnItemDeSelect($event)"
    (onSelectAll)="onSelectAll($event)"
    (onDeSelectAll)="onDeSelectAll($event)">
</angular2-multiselect>
```

---

## Theming

From v3.0.0 onwards you must include the default theme CSS.

Add to `angular.json` under `styles`:

```json
"styles": [
  "node_modules/@revivejs/angular2-multiselect-dropdown/themes/default.theme.css"
]
```

You can create your own theme by copying and editing the [default SCSS theme](https://github.com/revivejs/angular2-multiselect-dropdown/blob/master/projects/%40revivejs/angular2-multiselect-dropdown-lib/themes/default.theme.scss).

---

## Custom Templates

### Custom item template

```html
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label style="color: #333; min-width: 150px;">{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 30px; border: 1px solid #efefef; margin-right: 20px;" />
      <label>Capital — {{ item.capital }}</label>
    </ng-template>
  </c-item>
</angular2-multiselect>
```

### Custom badge template

```html
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-badge>
    <ng-template let-item="item">
      <label style="margin: 0;">{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 16px; margin-right: 5px;" />
    </ng-template>
  </c-badge>
</angular2-multiselect>
```

---

## Template-Driven Forms

```html
<form (ngSubmit)="onSubmit()" #loginForm="ngForm">
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

---

## Reactive Forms

```html
<form [formGroup]="userForm" novalidate>
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
    name: '',
    email: ['', Validators.required],
    skills: [[], Validators.required]
});
```

---

## Settings

| Setting | Type | Description | Default |
|:---|:---|:---|:---|
| `singleSelection` | Boolean | Enable single item selection only. | `false` |
| `text` | String | Placeholder text when no items are selected. | `'Select'` |
| `enableCheckAll` | Boolean | Show select-all option. | `false` |
| `selectAllText` | String | Label for the select-all option. | `'Select All'` |
| `unSelectAllText` | String | Label for the unselect-all option. | `'UnSelect All'` |
| `enableSearchFilter` | Boolean | Enable search/filter input. | `false` |
| `enableFilterSelectAll` | Boolean | Show select-all checkbox for filtered results. | `true` |
| `filterSelectAllText` | String | Label for filter select-all. | `'Select all filtered results'` |
| `filterUnSelectAllText` | String | Label for filter unselect-all. | `'UnSelect all filtered results'` |
| `maxHeight` | Number | Max height of the dropdown list (px). | `300` |
| `badgeShowLimit` | Number | Max badges shown in the input. | All |
| `classes` | String | Additional CSS classes on the host element. | `''` |
| `limitSelection` | Number | Max number of selectable items. | none |
| `disabled` | Boolean | Disable the dropdown. | `false` |
| `searchPlaceholderText` | String | Search input placeholder. | `'Search'` |
| `groupBy` | String | Field name to group items by. | none |
| `selectGroup` | Boolean | Allow selecting an entire group. Requires `groupBy`. | `false` |
| `searchAutofocus` | Boolean | Autofocus search input on open. | `true` |
| `labelKey` | String | Property name used as item label. | `'itemName'` |
| `primaryKey` | String | Property used to identify items. | `'id'` |
| `position` | String | Dropdown position: `'top'` or `'bottom'`. | `'bottom'` |
| `noDataLabel` | String | Text when list is empty. | `'No Data Available'` |
| `searchBy` | Array | Properties to search by. Defaults to all. | `[]` |
| `lazyLoading` | Boolean | Enable virtual scroll for large datasets. | `false` |
| `showCheckbox` | Boolean | Show checkboxes in the list. | `true` |
| `addNewItemOnFilter` | Boolean | Allow adding the search term as a new item. | `false` |
| `addNewButtonText` | String | Button label when `addNewItemOnFilter` is enabled. | `'Add'` |
| `escapeToClose` | Boolean | Close dropdown on Escape key. | `true` |
| `autoPosition` | Boolean | Auto-detect open direction (top/bottom). | `true` |
| `tagToBody` | Boolean | Append dropdown to `<body>`. | `true` |

---

## Events

| Event | Description |
|:---|:---|
| `(onSelect)` | Fired when an item is selected. Returns the selected item. |
| `(onDeSelect)` | Fired when an item is deselected. Returns the deselected item. |
| `(onSelectAll)` | Fired when all items are selected. Returns the full list. |
| `(onDeSelectAll)` | Fired when all items are deselected. Returns `[]`. |
| `(onGroupSelect)` | Fired when a group is selected. Returns the group items. |
| `(onGroupDeSelect)` | Fired when a group is deselected. Returns the group items. |
| `(onOpen)` | Fired when the dropdown opens. |
| `(onClose)` | Fired when the dropdown closes. |
| `(onScrollToEnd)` | Fired when the list is scrolled to the end. Use for remote data pagination. |
| `(onAddFilterNewItem)` | Fired when the Add button is clicked (`addNewItemOnFilter`). |
| `(onFilterSelectAll)` | Fired when all filtered items are selected. |
| `(onFilterDeSelectAll)` | Fired when all filtered items are deselected. |

---

## Lazy Loading

For large datasets, enable `lazyLoading` and listen to `(onScrollToEnd)` to fetch more data:

```ts
dropdownSettings = {
    lazyLoading: true,
    text: 'Select Items'
};

fetchMore(event: any) {
    // load next page and append to this.dropdownList
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

---

## Angular 20 Upgrade Notes

Version 12.0.0 adds full **Angular 20** support.

### Breaking changes addressed

- **`standalone: false`** — Required explicitly on all NgModule-declared components in Angular 20 (standalone is the new default).
- **Node.js ≥ 20.19** — Angular 20 drops Node 18. Use Node 20 or 22.
- **TypeScript `~5.8.0`** — Updated from 5.6.
- **`document.scrollingElement` cast** — Fixed TypeScript strict type error in virtual scroll.

### Package versions updated

| Package | Previous | Current |
|:---|:---|:---|
| `@angular/*` | `~19.2.x` | `~20.3.18` |
| `@angular/cli` | `~19.2.x` | `~20.3.22` |
| `ng-packagr` | `~19.2.x` | `~20.3.2` |
| `typescript` | `~5.6.0` | `~5.8.0` |
| `zone.js` | `~0.15.0` | `~0.15.0` |

---

## Run Locally

```bash
# Requires Node.js >= 20.19
git clone https://github.com/revivejs/angular2-multiselect-dropdown.git
cd angular2-multiselect-dropdown

npm install
npm start
# Navigate to http://localhost:4200/
```

---

## License

MIT © [ReviveJS](https://github.com/revivejs)

---

## Credits

**Original library** created by [Pradeep Terli](https://github.com/PradeepTerli) / [CuppaLabs](https://github.com/CuppaLabs).

**Maintained by** [ReviveJS](https://github.com/revivejs) — updating Angular libraries that are no longer maintained.

- npm: [https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
- GitHub: [https://github.com/revivejs/angular2-multiselect-dropdown](https://github.com/revivejs/angular2-multiselect-dropdown)
