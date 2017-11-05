# Monkey Patching React

[![CircleCI](https://circleci.com/gh/JakeSidSmith/react-monkey-patching/tree/master.svg?style=svg)](https://circleci.com/gh/JakeSidSmith/react-monkey-patching/tree/master)

**Some useful examples of monkey patching React**

## Setup

To install dependencies & run a dev server run the following commands

```shell
npm install
npm start
```

## Experiment

There are several monkey patch examples that are commented out in the main `index.js` file in `src/js/`. You can un-comment these to see what they do.

You can explore the monkey patch code inside the `monkey-patches` directory.

If you want to add your own simple transforms to elements there is a `patch.js` file that exports a function called `patch` that you can pass a string transform to.
