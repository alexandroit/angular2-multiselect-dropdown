# NPM Publishing Guide for @stackline/angular2-multiselect-dropdown

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **2FA Setup**: Enable Two-Factor Authentication (recommended for security)
3. **Credentials**: You need to be logged in to npm in your terminal

## Before Publishing

### 1. Choose the Angular Line
Pick the line you want to release:
- Angular 14: `14.0.0`
- Angular 19: `11.0.3`
- Angular 20: `12.0.1`
- Angular 21: `14.0.1`

The repository source stays on the Angular 21 workspace. The release build now stamps the target line `version`, `description`, and `peerDependencies` into `dist/@stackline/angular2-multiselect-dropdown/package.json` before publishing.

### 2. Build the Library for a Specific Line
```bash
# Default: latest configured line
npm run build-package

# Specific Angular line
npm run build-package:line -- --line 19
```

This will:
- Compile SASS themes
- Build with ng-packagr
- Generate distribution files in `dist/@stackline/angular2-multiselect-dropdown`
- Stamp the correct release-line metadata into the generated package manifest

### 3. Test Build Output
```bash
cd dist/@stackline/angular2-multiselect-dropdown
npm pack
# This creates a .tgz file without uploading
cd ../..
```

Before publishing, confirm `dist/@stackline/angular2-multiselect-dropdown/package.json` matches the target line:
- `version` must equal the intended package release
- `peerDependencies` must target only the Angular major for that line

## Publishing to NPM

### Option 1: Using npm script
```bash
# Publish the latest configured line
npm run publish-npm

# Publish a specific Angular line
npm run publish-npm:line -- --line 20
```

### Option 2: Manual Publishing
```bash
# Build first
npm run build-package:line -- --line 20

# Navigate to dist folder
cd dist/@stackline/angular2-multiselect-dropdown

# Publish
npm publish --access public

# Go back to root
cd ../..
```

## After Publishing

### 1. Verify Publication
```bash
npm view @stackline/angular2-multiselect-dropdown
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
Ensure the scoped name `@stackline/angular2-multiselect-dropdown` matches exactly in all files.

### "Permission denied"
- Verify you are the package owner
- Check npm access: `npm owner ls @stackline/angular2-multiselect-dropdown`

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
- Scope: `@stackline`

## Version Strategy

This repository currently maintains these Angular lines:
- `14.0.0` for Angular 14
- `11.0.3` for Angular 19
- `12.0.1` for Angular 20
- `14.0.1` for Angular 21

npm versions are immutable, so any previously published line with wrong `peerDependencies` must be corrected with a new patch release for that same line.

## Angular Version Compatibility

| Package Version | Angular Versions |
|---|---|
| 14.0.1 | 21 |
| 12.0.1 | 20 |
| 11.0.3 | 19 |
| 14.0.0 | 14 |

---

**Last Updated**: April 8, 2026  
**Maintainer**: [Alexander Roth](https://github.com/alexandroit)

## Family Rule

Every published package family must lock `peerDependencies` to exactly one framework major.
Validate the family against every exact framework release under `docs-src/<family>/<release>/` using `npm install` before publishing.
