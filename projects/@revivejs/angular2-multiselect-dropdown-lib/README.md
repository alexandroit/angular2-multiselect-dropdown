# @revivejs/angular2-multiselect-dropdown

> **Angular 20 multiselect dropdown** — search, grouping, custom templates, lazy loading, reactive forms and template-driven forms. Compatible with Angular 14, 15, 16, 17, 18, 19 and 20.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://github.com/revivejs/angular2-multiselect-dropdown/blob/master/LICENSE)

**[📖 Docs & Live Demos](https://revivejs.github.io/angular2-multiselect-dropdown)** | **[GitHub](https://github.com/revivejs/angular2-multiselect-dropdown)**

---

## Features

- ✅ Angular 14–20 support
- ✅ Single and multi selection
- ✅ Search / filter with custom search API
- ✅ Group by field
- ✅ Custom item and badge templates (`<c-item>`, `<c-badge>`)
- ✅ Template-driven forms (`ngModel`)
- ✅ Reactive forms (`formControlName`)
- ✅ Lazy loading / virtual scroll for large datasets
- ✅ Remote data pagination via `(onScrollToEnd)`
- ✅ Add new item from filter input
- ✅ Custom theming (SCSS)
- ✅ Auto-position (top / bottom)
- ✅ Append dropdown to body (`tagToBody`)
- ✅ Keyboard navigation + Escape to close

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

## Installation

```bash
npm install @revivejs/angular2-multiselect-dropdown
```

---

## Setup

Import the module and add the theme to `angular.json`:

```ts
import { AngularMultiSelectModule } from '@revivejs/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [AngularMultiSelectModule, FormsModule]
})
export class AppModule {}
```

```json
// angular.json — styles array
"styles": [
  "node_modules/@revivejs/angular2-multiselect-dropdown/themes/default.theme.css"
]
```

---

## Basic Usage

```ts
dropdownList = [
    { id: 1, itemName: 'India' },
    { id: 2, itemName: 'Singapore' },
    { id: 3, itemName: 'Australia' }
];
selectedItems = [{ id: 2, itemName: 'Singapore' }];
dropdownSettings = {
    singleSelection: false,
    text: 'Select Countries',
    enableSearchFilter: true
};
```

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

## Custom Templates

```html
<!-- Custom item template -->
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label>{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 30px;" />
    </ng-template>
  </c-item>
</angular2-multiselect>

<!-- Custom badge template -->
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-badge>
    <ng-template let-item="item">
      <img [src]="item.image" style="width: 16px;" />
      <label>{{ item.itemName }}</label>
    </ng-template>
  </c-badge>
</angular2-multiselect>
```

---

## Template-Driven Forms

```html
<form #loginForm="ngForm" (ngSubmit)="onSubmit()">
  <angular2-multiselect
      [data]="itemList"
      [(ngModel)]="formModel.skills"
      [settings]="settings"
      name="skills" required>
  </angular2-multiselect>
</form>
```

---

## Reactive Forms

```html
<form [formGroup]="userForm">
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
    skills: [[], Validators.required]
});
```

---

## Settings

| Setting | Type | Description | Default |
|:---|:---|:---|:---|
| `singleSelection` | Boolean | Single item selection only. | `false` |
| `text` | String | Placeholder when no items selected. | `'Select'` |
| `enableCheckAll` | Boolean | Show select-all option. | `false` |
| `selectAllText` | String | Label for select-all. | `'Select All'` |
| `unSelectAllText` | String | Label for unselect-all. | `'UnSelect All'` |
| `enableSearchFilter` | Boolean | Enable search input. | `false` |
| `enableFilterSelectAll` | Boolean | Select-all checkbox in filtered results. | `true` |
| `maxHeight` | Number | Max dropdown height (px). | `300` |
| `badgeShowLimit` | Number | Max badges shown in input. | All |
| `classes` | String | Extra CSS classes on the host element. | `''` |
| `limitSelection` | Number | Max selectable items. | none |
| `disabled` | Boolean | Disable the dropdown. | `false` |
| `searchPlaceholderText` | String | Search input placeholder. | `'Search'` |
| `groupBy` | String | Field to group items by. | none |
| `selectGroup` | Boolean | Allow selecting a whole group. | `false` |
| `searchAutofocus` | Boolean | Autofocus search on open. | `true` |
| `labelKey` | String | Property used as item label. | `'itemName'` |
| `primaryKey` | String | Property used to identify items. | `'id'` |
| `position` | String | `'top'` or `'bottom'`. | `'bottom'` |
| `noDataLabel` | String | Text when list is empty. | `'No Data Available'` |
| `searchBy` | Array | Properties to search by. | `[]` |
| `lazyLoading` | Boolean | Virtual scroll for large datasets. | `false` |
| `showCheckbox` | Boolean | Show checkboxes in list. | `true` |
| `addNewItemOnFilter` | Boolean | Add search term as new item when not found. | `false` |
| `addNewButtonText` | String | Label for the add-new button. | `'Add'` |
| `escapeToClose` | Boolean | Close on Escape key. | `true` |
| `autoPosition` | Boolean | Auto-detect open direction. | `true` |
| `tagToBody` | Boolean | Append dropdown to `<body>`. | `true` |

---

## Events

| Event | Description |
|:---|:---|
| `(onSelect)` | Item selected. Returns the item. |
| `(onDeSelect)` | Item deselected. Returns the item. |
| `(onSelectAll)` | All items selected. Returns the full list. |
| `(onDeSelectAll)` | All items deselected. Returns `[]`. |
| `(onGroupSelect)` | Group selected. Returns group items. |
| `(onGroupDeSelect)` | Group deselected. Returns group items. |
| `(onOpen)` | Dropdown opened. |
| `(onClose)` | Dropdown closed. |
| `(onScrollToEnd)` | List scrolled to end. Use for remote pagination. |
| `(onAddFilterNewItem)` | Add button clicked (`addNewItemOnFilter`). |
| `(onFilterSelectAll)` | All filtered items selected. |
| `(onFilterDeSelectAll)` | All filtered items deselected. |

---

## License

MIT © [ReviveJS](https://github.com/revivejs)

---

## Credits

Original library by [Pradeep Terli](https://github.com/PradeepTerli) / [CuppaLabs](https://github.com/CuppaLabs).  
Maintained by [ReviveJS](https://github.com/revivejs) — keeping Angular libraries alive and secure.
