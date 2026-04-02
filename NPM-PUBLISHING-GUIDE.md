# NPM Publishing Guide for @revivejs/angular2-multiselect-dropdown

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **2FA Setup**: Enable Two-Factor Authentication (recommended for security)
3. **Credentials**: You need to be logged in to npm in your terminal

## Before Publishing

### 1. Update Version
Update the version number in:
- `package.json` (root)
- `projects/@revivejs/angular2-multiselect-dropdown-lib/package.json`

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
- Generate distribution files in `dist/@revivejs/angular2-multiselect-dropdown`

### 3. Test Build Output
```bash
cd dist/@revivejs/angular2-multiselect-dropdown
npm pack
# This creates a .tgz file without uploading
cd ../..
```

## Publishing to NPM

### Option 1: Using npm script
```bash
npm run publish-npm
```

### Option 2: Manual Publishing
```bash
# Build first
npm run build-package

# Navigate to dist folder
cd dist/@revivejs/angular2-multiselect-dropdown

# Publish
npm publish --access public

# Go back to root
cd ../..
```

## After Publishing

### 1. Verify Publication
```bash
npm view @revivejs/angular2-multiselect-dropdown
```

### 2. Create GitHub Release
- Go to [GitHub Releases](https://github.com/alexandroit/angular2-multiselect-dropdown/releases)
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
Ensure the scoped name `@revivejs/angular2-multiselect-dropdown` matches exactly in all files.

### "Permission denied"
- Verify you are the package owner
- Check npm access: `npm owner ls @revivejs/angular2-multiselect-dropdown`

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

Following Semantic Versioning (SemVer):
- **Major** (11.x.0): Breaking changes or major Angular version support
- **Minor** (11.x.0): New features, backward compatible
- **Patch** (11.0.x): Bug fixes

## Angular Version Compatibility

| Package Version | Angular Versions |
|---|---|
| 11.x.x | 19 |
| 10.x.x | 18 |
| 9.x.x | 17 |
| 8.x.x | 16 |
| 7.x.x | 15 |

---

**Last Updated**: April 1, 2026  
**Maintainer**: [Alexander Roth](https://github.com/alexandroit)
