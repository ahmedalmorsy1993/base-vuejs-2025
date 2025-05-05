# Fix for JS/TS Language Service Crashes

According to the error message, the JS/TS language service is crashing due to conflicts with specific VS Code extensions:
- `unifledjs.vscode-mdx`
- `Vue.volar`

## Solution Options

### Option 1: Disable the problematic extensions for this workspace

Add the following to your `.vscode/settings.json` file:

```json
{
  "extensions.disableRecommendations": true,
  "extensions.ignoreRecommendations": true,
  "extensions.disallowedExtensions": [
    "unifledjs.vscode-mdx",
    "Vue.volar"
  ],
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

### Option 2: Use Volar in Take Over Mode

If you want to keep using Volar (which is recommended for Vue projects), you can use it in "Take Over Mode" which might resolve conflicts:

1. Disable the built-in TypeScript extension for this workspace:
```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "js/ts.implicitProjectConfig.checkJs": false
}
```

2. Make sure you have the Vue Language Features (Volar) extension installed, but disable the TypeScript Vue Plugin (Volar).

### Option 3: Update Extensions

Make sure your extensions are updated to the latest versions, as newer versions might have fixed compatibility issues.

## After Making Changes

After applying any of these changes:
1. Reload VS Code window
2. Restart the TypeScript server by pressing Ctrl+Shift+P (or Cmd+Shift+P on macOS) and running "TypeScript: Restart TS Server"
