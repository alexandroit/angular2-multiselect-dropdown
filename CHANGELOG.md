# Changelog

All notable changes to this project will be documented in this file.

## [12.0.0] - 2026-04-03

### Added
- Full support for **Angular 20**
- Updated Angular 20 documentation and examples in English
- Refreshed demo build output for the GitHub Pages site

### Changed
- Updated all Angular dependencies to the latest Angular 20 releases
- Upgraded the Angular toolchain to `@angular/cli 20.3.22`
- Upgraded `ng-packagr` to `20.3.2`
- Upgraded TypeScript to `~5.8.0`
- Updated package metadata for the Angular 20 release line

### Fixed
- Fixed the virtual scroll `document.scrollingElement` typing issue for Angular 20 builds
- Regenerated `package-lock.json` from a clean Angular 20 install

### How to Upgrade
```bash
npm install @revivejs/angular2-multiselect-dropdown@^12.0.0
```

### See Also
- [GitHub Repository](https://github.com/alexandroit/angular2-multiselect-dropdown)
- [NPM Package](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)

## [11.0.0] - 2026-04-01

### Added
- Full support for **Angular 19**
- Complete TypeScript strict mode support  
- Enhanced Reactive Forms support
- Improved accessibility features
- New examples and documentation

### Changed
- Updated all Angular dependencies to 19.x
- Refactored component internals for better performance
- Improved theme system with SCSS enhancements
- Updated package structure for scoped npm publishing

### Fixed
- Fixed TypeScript compilation warnings
- Improved change detection strategy
- Better handling of large datasets with lazy loading

### Breaking Changes
- Requires Node.js 18+ and npm 9+
- Package name changed from `angular2-multiselect-dropdown` to `@revivejs/angular2-multiselect-dropdown`

### How to Upgrade
```bash
npm uninstall angular2-multiselect-dropdown
npm install @revivejs/angular2-multiselect-dropdown@^11.0.0
```

Update your imports:
```typescript
// Before
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

// After
import { AngularMultiSelectModule } from '@revivejs/angular2-multiselect-dropdown';
```

### Credits
- **Original Author**: Pradeep Terli ([CuppaLabs](https://github.com/CuppaLabs/angular2-multiselect-dropdown))
- **Current Maintainer**: Alexander Roth ([ReviveJS](https://github.com/alexandroit))

### See Also
- [GitHub Repository](https://github.com/alexandroit/angular2-multiselect-dropdown)
- [NPM Package](https://www.npmjs.com/package/@revivejs/angular2-multiselect-dropdown)
