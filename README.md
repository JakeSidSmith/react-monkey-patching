# Monkey Patching React

[![CircleCI](https://circleci.com/gh/JakeSidSmith/react-monkey-patching/tree/master.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/react-monkey-patching/tree/master)

**Some useful examples of monkey patching React**

## Setup

To install dependencies & run a dev server run the following commands.

```shell
npm install
npm start
```

This will allow you to use JSX and ES6 syntax in any of the files in the `src/js/` directory, and less in the `src/less/` directory.

Any file changes will automatically reload the examples.

## Experiment

You can explore the monkey patch code inside the `monkey-patches` directory.

If you want to add your own simple transforms to elements there is a `patch.js` file that exports a function called `patch` that you can pass a string transform to.
