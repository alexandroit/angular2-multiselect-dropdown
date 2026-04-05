# Angular 19/18/17 Multiselect Dropdown - @revivejs/angular2-multiselect-dropdown
[![npm version](https://img.shields.io/npm/v/@revivejs/angular2-multiselect-dropdown.svg)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![downloads](https://img.shields.io/npm/dt/@revivejs/angular2-multiselect-dropdown.svg)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
[![license](https://img.shields.io/github/license/alexandroit/angular2-multiselect-dropdown.svg)](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)

> **Credits:** Original library by [Cuppa Labs](https://github.com/CuppaLabs/angular2-multiselect-dropdown) - Enhanced and maintained by [ReviveJS](https://github.com/alexandroit/angular2-multiselect-dropdown)

> **Note:** This project focuses on updating libraries that are no longer maintained and may contain security vulnerabilities.

Angular multiselect dropdown component for web applications. Easy to integrate and use.

![](https://alexandroit.github.io/angular2-multiselect-dropdown/assets/img/multiselect.jpeg)

> **Important:** From v3.0.0 onwards, you need to include `default.theme.css` to get the basic styling of the dropdown. Refer to the *Themes and Theming* section below.

# [Documentation](http://alexandroit.github.io/components/multiselectDropdown) | [Demos / Examples](https://alexandroit.github.io/angular2-multiselect-dropdown)

## Table of Contents
1. Getting Started
2. Installation
3. Usage
4. Theming
5. Templates
6. Template Driven Forms support
7. Reactive Forms support
8. Settings configuration
9. Callbacks and events
10. Lazy loading - handle large data lists
11. Group By feature
12. Search filter for both plain list and grouped list
13. Custom Search / Search API
14. Angular 19 Upgrade Notes

---

## Getting Started

### Installation

Install the package:
```bash
npm install @revivejs/angular2-multiselect-dropdown
```

Once installed, import `AngularMultiSelectModule` from the installed package into your module.

---

## Dependencies

Latest version available for each version of Angular:

| angular2-multiselect-dropdown | Angular     |
| ----------------------------- | ----------- |
| 11.0.4      | 19.X.X |
| 10.0.0      | 18.X.X |
| 9.0.0       | 17.X.X |
| 8.0.0       | 16.X.X |
| 7.0.0       | 15.X.X |
| 6.0.0       | 14.X.X |

---

### Usage

Import `AngularMultiSelectModule` into `NgModule` in `app.module.ts`. Angular's `FormsModule` is also required.

```js
import { AngularMultiSelectModule } from '@revivejs/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  // ...
  imports: [
    AngularMultiSelectModule,
    FormsModule
  ]
  // ...
})
```

Declare the component data variables and options in your component:

```js
import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    ngOnInit() {
        this.dropdownList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Germany" },
            { "id": 7, "itemName": "France" },
            { "id": 8, "itemName": "Russia" },
            { "id": 9, "itemName": "Italy" },
            { "id": 10, "itemName": "Sweden" }
        ];
        this.selectedItems = [
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
    }

    onItemSelect(item: any) { console.log(item); }
    OnItemDeSelect(item: any) { console.log(item); }
    onSelectAll(items: any) { console.log(items); }
    onDeSelectAll(items: any) { console.log(items); }
}
```

Add the component tag in your template:

```html
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems"
    [settings]="dropdownSettings"
    (onSelect)="onItemSelect($event)"
    (onDeSelect)="OnItemDeSelect($event)"
    (onSelectAll)="onSelectAll($event)"
    (onDeSelectAll)="onDeSelectAll($event)">
</angular2-multiselect>
```

---

### Themes and Theming

- From v3.0.0 onwards, you need to include `default.theme.css` to get the basic styling of the dropdown.
- The component package has a themes folder in node_modules at `@revivejs/angular2-multiselect-dropdown\themes\default.theme.css`.
- Include the `default.theme.css` in `angular.json` under the `styles` array:

```json
"styles": [
  "node_modules/@revivejs/angular2-multiselect-dropdown/themes/default.theme.css"
]
```

You can create your own theme. See the example SCSS file at [Default theme](https://github.com/CuppaLabs/angular2-multiselect-dropdown/blob/master/src/themes/default.theme.scss).

---

### Template - Custom HTML for menu item

```html
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-item>
    <ng-template let-item="item">
      <label style="color: #333;min-width: 150px;">{{item.itemName}}</label>
      <img [src]="item.image" style="width: 30px; border: 1px solid #efefef;margin-right: 20px;" />
      <label>Capital - {{item.capital}}</label>
    </ng-template>
  </c-item>
</angular2-multiselect>
```

### Template - Custom HTML for selected item badge

```html
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" [settings]="dropdownSettings">
  <c-badge>
    <ng-template let-item="item">
      <label style="margin: 0px;">{{item.itemName}}</label>
      <img [src]="item.image" style="width: 16px; margin-right: 5px;" />
    </ng-template>
  </c-badge>
</angular2-multiselect>
```

---

### Template Driven Forms support

```html
<form (ngSubmit)="onSubmit()" #loginForm="ngForm" style="border: 1px solid #ccc; padding: 10px;">
    <div class="form-group">
        <label for="name">Skills</label>
        <angular2-multiselect [data]="itemList" [(ngModel)]="formModel.skills"
                              [settings]="settings"
                              (onSelect)="onItemSelect($event)"
                              (onDeSelect)="OnItemDeSelect($event)"
                              (onSelectAll)="onSelectAll($event)"
                              (onDeSelectAll)="onDeSelectAll($event)"
                              name="skills">
        </angular2-multiselect>
    </div>
</form>
```

```js
formModel = {
    name: '',
    email: 'example@email.com',
    skills: [{ "id": 1, "itemName": "Angular" }]
};
```

---

### Reactive Forms support

```html
<form [formGroup]="userForm" novalidate style="border: 1px solid #ccc; padding: 10px;">
    <div class="form-group">
        <label for="name">Skills</label>
        <angular2-multiselect [data]="itemList" [(ngModel)]="selectedItems"
                              [settings]="settings"
                              (onSelect)="onItemSelect($event)"
                              (onDeSelect)="OnItemDeSelect($event)"
                              (onSelectAll)="onSelectAll($event)"
                              (onDeSelectAll)="onDeSelectAll($event)"
                              formControlName="skills">
        </angular2-multiselect>
    </div>
</form>
```

```js
userForm: FormGroup;
this.userForm = this.fb.group({
    name: '',
    email: ['', Validators.required],
    skills: [[], Validators.required]
});
```

---

### Settings

| Setting | Type | Description | Default Value |
|:--- |:--- |:--- |:--- |
| singleSelection | Boolean | Set the dropdown for single item selection only. | false |
| text | String | Text shown in the dropdown when no items are selected. | 'Select' |
| enableCheckAll | Boolean | Enable the option to select all items in the list. | false |
| selectAllText | String | Label for the select all option. | 'Select All' |
| unSelectAllText | String | Label for the unselect all option. | 'UnSelect All' |
| enableSearchFilter | Boolean | Enable filter option for the list. | false |
| enableFilterSelectAll | Boolean | A 'select all' checkbox to select all filtered results. | true |
| filterSelectAllText | String | Label for select all filtered results option. | 'Select all filtered results' |
| filterUnSelectAllText | String | Label for unselect all filtered results option. | 'UnSelect all filtered results' |
| maxHeight | Number | Maximum height of the dropdown list in px. | 300 |
| badgeShowLimit | Number | Limit the number of badges shown in the input field. | All |
| classes | String | Custom CSS classes added to the dropdown selector tag. | '' |
| limitSelection | Number | Limit the number of selectable items. Unselected items are disabled after limit is reached. | none |
| disabled | Boolean | Disable the dropdown. | false |
| searchPlaceholderText | String | Custom text for the search input placeholder. | 'Search' |
| groupBy | String | Field name to group the list by. | none |
| selectGroup | Boolean | Select an entire group at once. Requires `groupBy`. | false |
| searchAutofocus | Boolean | Autofocus the search input field. | true |
| labelKey | String | Property name to render as label in the dropdown. | 'itemName' |
| primaryKey | String | Property used to identify objects. | 'id' |
| position | String | Position of the dropdown list: `'top'` or `'bottom'`. | 'bottom' |
| noDataLabel | String | Label text when no data is available. | 'No Data Available' |
| searchBy | Array | Search the list by specific properties. Default searches all properties. | [] |
| lazyLoading | Boolean | Enable lazy loading for large datasets. | false |
| showCheckbox | Boolean | Show or hide checkboxes in the list. | true |
| addNewItemOnFilter | Boolean | Allow adding the search text as a new item when not found. | false |
| addNewButtonText | String | Button text when `addNewItemOnFilter` is enabled. | 'Add' |
| escapeToClose | Boolean | Press Escape key to close the dropdown. | true |
| autoPosition | Boolean | Auto-detect whether to open on top or bottom. | true |
| tagToBody | Boolean | Append the dropdown to the body element. Use `false` in card or sticky layouts to keep the panel anchored to the field. | false |

---

### Events

| Event | Description |
|:--- |:--- |
| `(onSelect)` | Fired when an item is selected. Returns the selected item. |
| `(onDeSelect)` | Fired when an item is unselected. Returns the unselected item. |
| `(onSelectAll)` | Fired when all items are selected. Returns the full list. |
| `(onDeSelectAll)` | Fired when all items are unselected. Returns an empty array. |
| `(onGroupSelect)` | Fired when a group is selected. Returns the group's items as an array. |
| `(onGroupDeSelect)` | Fired when a group is unselected. Returns the group's items as an array. |
| `(onOpen)` | Fired after the dropdown opens. |
| `(onClose)` | Fired when the dropdown closes. |
| `(onScrollToEnd)` | Fired when the dropdown list is scrolled to the end. Useful for virtual scrolling / remote data pagination. |
| `(onAddFilterNewItem)` | Fired when the `Add` button is clicked (requires `addNewItemOnFilter`). |
| `(onFilterSelectAll)` | Fired when all filtered items are selected via the filter select-all checkbox. |
| `(onFilterDeSelectAll)` | Fired when all filtered items are deselected via the filter deselect-all checkbox. |

---

## Angular 19 Upgrade Notes

This fork has been updated to fully support **Angular 19**. The following changes were made:

### Package versions updated
- All `@angular/*` packages bumped to `^19.0.0`
- `@angular-devkit/build-angular`, `@angular/cli`, `@angular/compiler-cli` bumped to `^19.0.0`
- `ng-packagr` bumped to `^19.0.0`
- `typescript` updated to `~5.6.0` (Angular 19 requires TypeScript 5.5 or 5.6)
- `zone.js` updated to `~0.15.0`
- `rxjs` updated to `~7.8.0`
- `@types/node` updated to `^20.0.0`
- `jasmine-core` and `@types/jasmine` updated to `~5.1.0`

### Breaking changes addressed
- **`BrowserModule.withServerTransition()`** — removed in Angular 19. Replaced with plain `BrowserModule`.
- **`enableIvy: false`** — removed from `tsconfig.lib.prod.json`. Ivy is the only compiler engine in Angular 19.
- **`moduleResolution: "node"`** — updated to `"bundler"` in `tsconfig.json` for proper ESM resolution.
- **Deprecated builders removed** from `angular.json`:
  - `@angular-devkit/build-angular:tslint` (tslint is no longer supported)
  - `@angular-devkit/build-angular:protractor` (Protractor is no longer supported)
- **Removed deprecated dev dependencies**: `codelyzer`, `tslint`, `protractor`, `ts-node`

### Third-party libraries updated
| Package | Previous | Updated |
|:--- |:--- |:--- |
| `@ng-bootstrap/ng-bootstrap` | ^11.0.1 | ^17.0.0 |
| `ngx-highlightjs` | ^9.0.0 | ^12.0.0 |

---

## Run Locally

```bash
# Clone the repository
git clone https://github.com/alexandroit/angular2-multiselect-dropdown.git
cd angular2-multiselect-dropdown

# Install dependencies
npm install

# Start the dev server
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

---

## License

MIT License.

---

## Credits

This project is a fork maintained with Angular 19 support.

**Forked repository:** [https://github.com/alexandroit/angular2-multiselect-dropdown](https://github.com/alexandroit/angular2-multiselect-dropdown)

**Original library** created and maintained by [Pradeep Terli](https://github.com/PradeepTerli) / [CuppaLabs](https://github.com/CuppaLabs):
- Original repository: [https://github.com/CuppaLabs/angular2-multiselect-dropdown](https://github.com/CuppaLabs/angular2-multiselect-dropdown)
- npm package: [https://www.npmjs.com/package/angular2-multiselect-dropdown](https://www.npmjs.com/package/angular2-multiselect-dropdown)
