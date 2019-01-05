# React ESLint Config for Next.js

This is the Chiedo Labs eslint configuration file for React.JS projects using Next.js It extends [Chiedo Labs' React ESLint Config](https://github.com/chiedolabs/eslint-config-react), which is based on the [Airbnb eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

This config only has minor changes from Chiedo Labs' React config.

## Installation

Install this eslint config on npm by running

	  yarn add --dev eslint eslint-config-chiedo-labs-nextjs eslint-config-chiedo-labs-react eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

Add to your project by creating an `.eslintrc` file and then setting the contents to the following.

	  {
	    "extends": "eslint-config-chiedo-labs-nextjs"
	  }

Update `package.json` to always download latest version of Chiedo Labs eslint config:

    "eslint-config-chiedo-labs-nextjs": "latest",

## Development

1. Make a change
2. Commit your changes to git and push your changes to a branch on Github.
3. Submit a pull request


## Deployment (For those with access)

1. run <code>npm login</code> in the terminal
2. run <code>npm version patch</code>
3. run <code>npm publish</code>
