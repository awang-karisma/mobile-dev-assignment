# Commit Message Guidelines

## Commit Format

```
<header>
<BLANK LINE>
<body>
```

### Header

Mandatory, and should follow this rule :

```
<type>: <short summary>
```

Type can be one of these :

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

Summary should be written in present tense

### Body

Just like summary, write in present tense, and explain the change you did in the commit

This is a note for myself to learn about GitHub

### Release Build

GitHub Actions already configured to automatically build whenever a release commit created by bot. This bot commit will be triggered by any successfull PR merge to main branch. This action also takes care of versioning, it will bump according to [SemVer](https://semver.org/). Basically, it standardize version number to MAJOR.MINOR.PATCH format, and will increment the version of :

- MAJOR version, representing a breaking change, if the commit messages contains `!`, ex: `feat!: `, `fix!: `, etc.
- MINOR version, if there's new feature that don't break existing feature. MINOR version bump triggered whenever commit messages start with `feat: `
- PATCH version, incremented if only fixing bugs, triggered when commit messages start with `fix: `
  For more information, please visit https://github.com/google-github-actions/release-please-action

### Credits

> https://github.com/angular/angular/blob/main/CONTRIBUTING.md - Commit guidelines
> https://github.com/google-github-actions/release-please-action - Release build automation
