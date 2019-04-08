# AWS Amplify Plugin Docs

This plugin adds the following command to the [Amplify Framework](https://aws-amplify.github.io/):

`amplify docs <opts>`

## Installation

This plugin assumes that the Amplify CLI is already installed. For installation help, please see step 2 of the [getting-started docs](https://aws-amplify.github.io/docs/).

To install, simply enter the following command in your terminal:

`npm i -g amplify-docs`

## Usage

> `amplify docs --react api`

| Command                               | Description                                                         |
| ------------------------------------- | ------------------------------------------------------------------- |
| `amplify docs`                        | Takes the user to the docs homepage                                 |
| `amplify docs --{platform}`           | Takes the to the specified platforms docs                           |
| `amplify docs --{platform} {section}` | Takes the user to the specified section in their specified platform |

For a complete list of available platform options, feel free to checkout the [Source File]('https://github.com/mtliendo/aws-amplify-plugin-docs/blob/master/supportedPlatforms/index.js').

Accepted sections are based on ![the sections in the docs]('./images/section-list-sample.png')

## Contributing

There is an RFC open where feedback is being gathered to perhaps add this plugin directly into the framework itself. However if bugs are spotted, please open up a pull request to fix or simply file an issue on the repo.

### Notes for Contributors

In parts of the amplify framework, the [npm package opn is used](https://github.com/aws-amplify/amplify-cli/blob/b12d20b9d85f7fc6abf7e2f7fbe11e1a108911b9/packages/amplify-provider-awscloudformation/lib/console.js). However, this plugin uses the package "open" as the former is deprecated:

This package is heavily commented while gathering community feedback. For more information on how the plugin is constructed, please see the [Amplify docs](https://aws-amplify.github.io/docs/cli/plugins?sdk=js). Additionally, if you are wanting to see how options and parameters are passed, you'll want to read up on the [gluegun docs](https://infinitered.github.io/gluegun/#/toolbox-parameters?id=options) instead.

Lastly, I'll note some caveats that I ran across:

running `amplify docs ios` gives: "iOS front-end plugin enabled"

running `amplify docs android` gives: "android front-end plugin found."

This behavior built into the framework itself prevented me from doing `amplify docs react auth` as a command sequence.
