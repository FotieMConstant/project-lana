# Project-lana README(WIP)

A tool for generating well polished and developer friendly API documentation(openAPI spec 3.0.0) directly from source code with LLM

## 🚨Important Note:
This project represents the practical application of our extensive research studies. It is essential to emphasize that this is a research project and is expressly **NOT** intended for use in production environments. The focus of this endeavor is to explore, experiment, and advance knowledge within a controlled research context. We appreciate your understanding and cooperation in this regard.


## Configuration
Create a `.env` file in project root directory and add your openAI key gotten from [openai](https://openai.com/). 

Should be in the format: `OPENAI_API_KEY=your_key_here`

Setup `lana.config.ts` file in root directory(N/A for now)
with the follwing config. this is basic information about your api servers etc
```ts
// lana.config.ts
const lanaConfig = {
    info: {
      title: 'Geek Quote API',          // Name of the API
      version: '1.0.0',         // API version
      description: 'My API Description', // API description
      termsOfService: 'https://example.com/terms', // Terms of service URL
      contact: {
        name: 'John Doe',       // Contact name
        email: 'john.doe@example.com',         // Contact email
        url: 'https://example.com/contact',    // Contact URL
      },
      license: {
        name: 'Apache 2.0',     // License name
        url: 'https://www.apache.org/licenses/LICENSE-2.0', // License URL
      },
    },
    servers: [
      {
        url: 'https://geek-quote-api.vercel.app/',   // Server URL
        description: 'Production server', // Server description
      },
      {
        url: 'https://localhost:3000',   // Server URL
        description: 'Developement server', // Server description
      },
    ],
  };
  
  export default lanaConfig;

```

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

Note: This project is to be a concrate application of my research studies. this is a reasearch project and is NOT to be used in production environments.
