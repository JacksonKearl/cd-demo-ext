# Continuous Deployment Demo Extension

This repo exists to demonstrate how to use GitHub Actions to run continuously deploy your VS Code extension.

In short, copy `.github/workflows/cd-stable.yml` to your extension push it to GitHub, then create releases via:

```bash
VERSION=$(node -e "console.log(require('./package.json').version)")
git tag v$VERSION
git push origin v$VERSION
```

> Note: The Action as written assumes your extension can be built via `npm i && vsce package`, if this is not the case some modifications to the Action will be required.

## Nightly Build

To enable a nightly build simply copy `.github/workflows/cd-nightly.yml` to your extension push it to GitHub, then releases will be created automatically every day, or manually via:

```bash
curl --location --request POST 'https://api.github.com/repos/[Your Extension]/dispatches' \
  --header 'Authorization: Bearer [GitHub PAT with push rights to the repo]' \
  --header 'Content-Type: text/plain' \
  --data-raw '{ "event_type": "trigger-nightly-publish" }  '
```

> Note: The Action as written assumes your nightly build is simply your stable build with some packaage.json entries modified, if this is not the case some modifications to the Action will be required.
