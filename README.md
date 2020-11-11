# star-ui

![CI](https://github.com/akashdsamantra/star-ui/workflows/CI/badge.svg?branch=main)

This is a design system. Feel free to raise any issue or PR.

## Introduction

So `star-ui` is a monorepo created using `yarn workspace`. There are 3 packages:

1. docs
1. examples
1. star-ui

- `docs` is documentation for star-ui. It should automatically create documentation from component. Possibly I can use the storybook docs addon directly. I am not sure. The idea is to generate it, not write it manually.
- `examples` - coming soon
- `star-ui` is the root package in the project. This will contain all components.

## Installation
using npm 
```
npm install @akashdsamantra/star-ui
```

or yarn
```
yarn add @akashdsamantra/star-ui
```

## Getting Started

Clone the repo

```
git clone git@github.com:akashdsamantra/star-ui.git
```

Run the below command to run storybook server and start working:

```
yarn start
```

To run docs:

```
yarn start-docs
```

Cheers 🍻
