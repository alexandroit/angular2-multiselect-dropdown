# @revivejs/angular2-multiselect-dropdown

[![npm version](https://img.shields.io/npm/v/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@revivejs/angular2-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)

Angular multiselect dropdown component for Angular applications, updated for the Angular 20 release line. It is easy to integrate, supports both template-driven and reactive forms, and includes search, grouping, custom templates, lazy loading, and checkbox-based multi selection out of the box.

> Credits: original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown), continued and updated for modern Angular by [Alexander Roth](https://github.com/alexandroit/angular2-multiselect-dropdown).

> Important: from `v3.0.0` onward you must include `default.theme.css` to get the base dropdown styling.

**Documentation:** [https://alexandroit.github.io/components/multiselectDropdown](https://alexandroit.github.io/components/multiselectDropdown)  
**Live demo:** [https://alexandroit.github.io/angular2-multiselect-dropdown](https://alexandroit.github.io/angular2-multiselect-dropdown)  
**GitHub:** [https://github.com/alexandroit/angular2-multiselect-dropdown](https://github.com/alexandroit/angular2-multiselect-dropdown)

## Why use this package

- Supports Angular 14 through Angular 20
- Works with `ngModel` and `formControlName`
- Search, grouping, lazy loading, and remote pagination support
- Custom item and badge templates
- Checkbox UI with select-all behavior
- Easy drop-in setup for existing Angular forms

## Table of Contents

1. Getting Started
2. Installation
3. Version Compatibility
4. Usage
5. Theming
6. Custom Templates
7. Template-Driven Forms
8. Reactive Forms
9. Settings
10. Events
11. Angular 20 Notes
12. Local Development
13. License

## Getting Started

Install the package:

```bash
npm install @revivejs/angular2-multiselect-dropdown
```

Then import `AngularMultiSelectModule` into your Angular module. `FormsModule` is also required.

## Version Compatibility

| Package version | Angular |
| --- | --- |
| `12.x` | `20.x` |
| `11.x` | `19.x` |
| `10.x` | `18.x` |
| `9.x` | `17.x` |
| `8.x` | `16.x` |
| `7.x` | `15.x` |
| `6.x` | `14.x` |

## Usage

Import the module:

```ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from '@revivejs/angular2-multiselect-dropdown';

@NgModule({
  imports: [
    FormsModule,
    AngularMultiSelectModule
  ]
})
export class AppModule {}
```

Create your component data and settings:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {
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
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }

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
}
```

Use the component in your template:

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

Include the default theme in `angular.json`:

```json
"styles": [
  "node_modules/@revivejs/angular2-multiselect-dropdown/themes/default.theme.css"
]
```

You can also create your own theme based on [the default SCSS theme](https://github.com/alexandroit/angular2-multiselect-dropdown/blob/master/projects/%40revivejs/angular2-multiselect-dropdown-lib/themes/default.theme.scss).

## Custom Templates

Custom item template:

```html
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label style="color: #333; min-width: 150px;">{{ item.itemName }}</label>
      <img [src]="item.image" style="width: 30px; border: 1px solid #efefef; margin-right: 20px;" />
      <label>Capital - {{ item.capital }}</label>
    </ng-template>
  </c-item>
</angular2-multiselect>
```

Custom selected badge template:

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

## Reactive Forms

```html
<form [formGroup]="userForm" novalidate>
  <angular2-multiselect
    [data]="itemList"
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

## Settings

| Setting | Type | Description | Default |
| --- | --- | --- | --- |
| `singleSelection` | `boolean` | Allow only one selected item. | `false` |
| `text` | `string` | Placeholder text when no item is selected. | `'Select'` |
| `enableCheckAll` | `boolean` | Show the select-all option. | `false` |
| `selectAllText` | `string` | Label for select-all. | `'Select All'` |
| `unSelectAllText` | `string` | Label for unselect-all. | `'UnSelect All'` |
| `enableSearchFilter` | `boolean` | Enable search/filter input. | `false` |
| `enableFilterSelectAll` | `boolean` | Select all filtered results. | `true` |
| `filterSelectAllText` | `string` | Label for filtered select-all. | `'Select all filtered results'` |
| `filterUnSelectAllText` | `string` | Label for filtered unselect-all. | `'UnSelect all filtered results'` |
| `maxHeight` | `number` | Maximum dropdown height in pixels. | `300` |
| `badgeShowLimit` | `number` | Limit the number of shown badges. | all |
| `classes` | `string` | Extra CSS classes on the host element. | `''` |
| `limitSelection` | `number` | Maximum number of selectable items. | none |
| `disabled` | `boolean` | Disable the component. | `false` |
| `searchPlaceholderText` | `string` | Placeholder text for search. | `'Search'` |
| `groupBy` | `string` | Field used to group items. | none |
| `selectGroup` | `boolean` | Enable selecting a whole group. | `false` |
| `searchAutofocus` | `boolean` | Autofocus the search field when opened. | `true` |
| `labelKey` | `string` | Property used as the display label. | `'itemName'` |
| `primaryKey` | `string` | Property used as the item identifier. | `'id'` |
| `position` | `string` | Dropdown position: `'top'` or `'bottom'`. | `'bottom'` |
| `noDataLabel` | `string` | Label shown when no items are available. | `'No Data Available'` |
| `searchBy` | `string[]` | Fields used by search. | `[]` |
| `lazyLoading` | `boolean` | Enable lazy loading for large lists. | `false` |
| `showCheckbox` | `boolean` | Show checkboxes in the list. | `true` |
| `addNewItemOnFilter` | `boolean` | Allow creating an item from search text. | `false` |
| `addNewButtonText` | `string` | Button label when adding a new item. | `'Add'` |
| `escapeToClose` | `boolean` | Close the dropdown with Escape. | `true` |
| `autoPosition` | `boolean` | Automatically choose top or bottom position. | `true` |
| `tagToBody` | `boolean` | Append the dropdown panel to `<body>`. Prefer `false` inside cards, sticky layouts, and versioned docs shells so the panel stays visually anchored to the field. | `false` |

## Events

| Event | Description |
| --- | --- |
| `(onSelect)` | Fires when an item is selected. |
| `(onDeSelect)` | Fires when an item is deselected. |
| `(onSelectAll)` | Fires when all items are selected. |
| `(onDeSelectAll)` | Fires when all items are deselected. |
| `(onGroupSelect)` | Fires when a group is selected. |
| `(onGroupDeSelect)` | Fires when a group is deselected. |
| `(onOpen)` | Fires after the dropdown opens. |
| `(onClose)` | Fires when the dropdown closes. |
| `(onScrollToEnd)` | Fires when the list reaches the end. Useful for remote pagination. |
| `(onAddFilterNewItem)` | Fires when the add-new button is clicked. |
| `(onFilterSelectAll)` | Fires when all filtered items are selected. |
| `(onFilterDeSelectAll)` | Fires when all filtered items are deselected. |

## Angular 20 Notes

Version `12.0.2` is the Angular 20 release line for this package.

- Backported the anchored dropdown positioning fix for card and sticky layouts
- Updated the build toolchain for Angular CLI 20 and `ng-packagr` 20
- Refreshed npm metadata, keywords, and documentation in English
- Preserved the familiar API from the earlier release lines

## Local Development

```bash
git clone https://github.com/alexandroit/angular2-multiselect-dropdown.git
cd angular2-multiselect-dropdown
npm install
npm run build-package
npm start
```

## License

MIT
