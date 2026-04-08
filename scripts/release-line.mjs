import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', '@stackline', 'angular2-multiselect-dropdown');
const distPackageJsonPath = path.join(distDir, 'package.json');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const releaseLines = [
  {
    angular: 14,
    packageVersion: '14.0.0',
    description: 'Angular multiselect dropdown component for the maintained Angular 14 release line.'
  },
  {
    angular: 19,
    packageVersion: '11.0.3',
    description: 'Angular multiselect dropdown component for the maintained Angular 19 release line.'
  },
  {
    angular: 20,
    packageVersion: '12.0.1',
    description: 'Angular multiselect dropdown component for the maintained Angular 20 release line.'
  },
  {
    angular: 21,
    packageVersion: '14.0.1',
    description: 'Angular multiselect dropdown component for the maintained Angular 21 release line.'
  }
];

function parseArgs(argv) {
  const options = {
    line: 'latest',
    publish: false,
    skipBuild: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--line') {
      const value = argv[index + 1];

      if (!value) {
        throw new Error('Missing value for --line. Example: --line 20');
      }

      options.line = value;
      index += 1;
      continue;
    }

    if (arg === '--publish') {
      options.publish = true;
      continue;
    }

    if (arg === '--skip-build') {
      options.skipBuild = true;
      continue;
    }

    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function printHelp() {
  console.log(`
Usage:
  node scripts/release-line.mjs [--line <angular-major>|latest] [--skip-build] [--publish]

Examples:
  npm run build-package
  npm run build-package:line -- --line 19
  npm run publish-npm:line -- --line 14
  npm run publish-npm -- --skip-build
`.trim());
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function getLatestLine(lines) {
  return [...lines].sort((left, right) => right.angular - left.angular)[0];
}

function getPeerRange(line) {
  return `>=${line.angular}.0.0 <${line.angular + 1}.0.0`;
}

function getPeerDependencies(line) {
  const range = getPeerRange(line);

  return {
    '@angular/core': range,
    '@angular/forms': range,
    '@angular/common': range
  };
}

function resolveLine(selection) {
  if (selection === 'latest') {
    return getLatestLine(releaseLines);
  }

  const angularMajor = Number(selection);

  if (!Number.isInteger(angularMajor)) {
    throw new Error(`Invalid --line value: ${selection}`);
  }

  const line = releaseLines.find((entry) => entry.angular === angularMajor);

  if (!line) {
    throw new Error(`Angular line ${angularMajor} is not configured for release.`);
  }

  return line;
}

function run(command, args, options = {}) {
  execFileSync(command, args, {
    cwd: options.cwd || rootDir,
    stdio: 'inherit'
  });
}

function buildRawPackage() {
  run(npmCommand, ['run', 'build-package:raw']);
}

function stampDistPackage(line) {
  if (!fs.existsSync(distPackageJsonPath)) {
    throw new Error(`Build output not found at ${distPackageJsonPath}`);
  }

  const packageJson = readJson(distPackageJsonPath);

  packageJson.version = line.packageVersion;
  packageJson.description = line.description;
  packageJson.peerDependencies = getPeerDependencies(line);

  writeJson(distPackageJsonPath, packageJson);
}

function validateDistPackage(line) {
  const packageJson = readJson(distPackageJsonPath);
  const expectedPeers = JSON.stringify(getPeerDependencies(line));

  if (packageJson.version !== line.packageVersion) {
    throw new Error(`Expected dist version ${line.packageVersion}, found ${packageJson.version}`);
  }

  if (JSON.stringify(packageJson.peerDependencies) !== expectedPeers) {
    throw new Error(
      `Expected dist peerDependencies ${expectedPeers}, found ${JSON.stringify(packageJson.peerDependencies)}`
    );
  }
}

function publishDistPackage() {
  run(npmCommand, ['publish', '--access', 'public'], { cwd: distDir });
}

function main() {
  const { line: requestedLine, publish, skipBuild } = parseArgs(process.argv.slice(2));
  const line = resolveLine(requestedLine);

  if (!skipBuild) {
    buildRawPackage();
  }

  stampDistPackage(line);
  validateDistPackage(line);

  console.log(
    `Prepared dist package for Angular ${line.angular} as version ${line.packageVersion} with peer range ${getPeerRange(line)}.`
  );

  if (publish) {
    publishDistPackage();
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
