# NPM Publishing Guide for @revivejs/angular-multiselect-dropdown

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **2FA Setup**: Enable Two-Factor Authentication (recommended for security)
3. **Credentials**: You need to be logged in to npm in your terminal

## Before Publishing

### 1. Update Version
Update the version number in:
- `package.json` (root)
- `projects/@revivejs/angular-multiselect-dropdown-lib/package.json`

```bash
npm version major|minor|patch
```

### 2. Build the Library
```bash
npm run build-package
```

This will:
- Compile SASS themes
- Build with ng-packagr
- Generate distribution files in `dist/@revivejs/angular-multiselect-dropdown`

### 3. Test Build Output
```bash
cd dist/@revivejs/angular-multiselect-dropdown
npm pack
# This creates a .tgz file without uploading
cd ../..
```

## Publishing to NPM

Publish the maintained lines sequentially when doing a full release pass:

1. `2.x.x`
2. `4.x.x`
3. `5.x.x`
4. Continue one line at a time
5. Finish on `21.x.x`

Validate each line before publishing the next one.

### Option 1: Using npm script
```bash
npm run publish-npm
```

### Option 2: Manual Publishing
```bash
# Build first
npm run build-package

# Navigate to dist folder
cd dist/@revivejs/angular-multiselect-dropdown

# Publish
npm publish --access public

# Go back to root
cd ../..
```

## After Publishing

### 1. Verify Publication
```bash
npm view @revivejs/angular-multiselect-dropdown
```

### 2. Create GitHub Release
- Go to [GitHub Releases](https://github.com/alexandroit/angular-multiselect-dropdown/releases)
- Create a new release with the version tag
- Add changelog details

### 3. Update Documentation
- Update README with new version info
- Add release notes
- Update examples if needed

## Troubleshooting

### "You must be logged in to publish"
```bash
npm login
# Enter your npm credentials and OTP if needed
```

### "Invalid package name"
Ensure the scoped name `@revivejs/angular-multiselect-dropdown` matches exactly in all files.

### "Permission denied"
- Verify you are the package owner
- Check npm access: `npm owner ls @revivejs/angular-multiselect-dropdown`

### Build Errors
```bash
# Clean and rebuild
rm -rf dist/
npm run build-package
```

## Configuration

The `.npmrc` file contains:
- Registry URL: `https://registry.npmjs.org/`
- Access level: `public` (allows public installations)
- Scope: `@revivejs`

## Version Strategy

This repository follows a line-per-Angular-major strategy:
- **2.x.x** for Angular 2
- **4.x.x** through **13.x.x** for the classic compatibility lines
- **14.x.x** through **21.x.x** for the Material-refined lines

Use patch releases for fixes within a maintained Angular line. Keep `latest` on the active Angular 21 line unless there is a deliberate reason to move it.

## Angular Version Compatibility

| Package Version | Angular Versions |
|---|---|
| 21.x.x | 21 |
| 20.x.x | 20 |
| 19.x.x | 19 |
| 18.x.x | 18 |
| 17.x.x | 17 |
| 16.x.x | 16 |
| 15.x.x | 15 |
| 14.x.x | 14 |
| 13.x.x | 13 |
| 12.x.x | 12 |
| 11.x.x | 11 |
| 10.x.x | 10 |
| 9.x.x | 9 |
| 8.x.x | 8 |
| 7.x.x | 7 |
| 6.x.x | 6 |
| 5.x.x | 5 |
| 4.x.x | 4 |
| 2.x.x | 2 |

---

**Last Updated**: April 7, 2026  
**Maintainer**: [Alexandro Paixao Marques](https://github.com/alexandroit)
