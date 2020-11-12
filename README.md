# Continuous Deployment Demo Extension

This repo exists to demonstrate how to use GitHub Actions to run continuously deploy your VS Code extension.

In short, copy `.github/workflows/cd-stable.yml` to your extension push it to GitHub, then create releases via:

```bash
VERSION=$(node -e "console.log(require('./package.json').version)")
git tag v$VERSION
git push origin v$VERSION
```

> Note: The Action as written assumes your extension caan be built via `npm i && vsce package`, if this is not the case some modifications to the Action will be required.