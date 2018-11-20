[![GitHub license](https://img.shields.io/github/license/Competec/simple-animation-js.svg)](https://github.com/Competec/simple-animation-js/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/Competec/simple-animation-js.svg?branch=master)](https://travis-ci.org/Competec/simple-animation-js)
[![NPM version](https://img.shields.io/npm/v/simple-animation-js.svg?style=flat)](https://www.npmjs.com/package/simple-animation-js)
[![GitHub issues](https://img.shields.io/github/issues/Competec/simple-animation-js.svg)](https://github.com/Competec/simple-animation-js/issues)
[![codecov](https://codecov.io/gh/Competec/simple-animation-js/branch/master/graph/badge.svg)](https://codecov.io/gh/Competec/simple-animation-js)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# simple-animation-js
> Simple animation library which uses CSS transitions in the background and allows animating dimension percentages with scrollWidth and scrollHeight.

## Installation

    npm install simple-animation-js

## Documentation

The documentation is found under [this link](https://competec.github.io/simple-animation-js) or in the `gh-pages` branch.
The starting point of the documentation is the Module `simpleAnimation`.

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Competec/simple-animation-js/issues)

If you want to contribute to this project please commit with the `npm run commit` command, this will secure the automatic semantic versioning. 

## Example

```
const simpleAnimationJs = require('simpleAnimationJs');
const elementToAnimate = document.getElementById('testDiv');
const options = {
	target: elementToAnimate,
	animations: [{
		attribute: 'height',
		animateTo: '100%',
		duration: 400,
		easing: 'ease-in',
		pctToScroll: true
	},
	{
		attribute: 'opacity',
		animateTo: 1
	}],
	defaultDuration: 350,
	defaultEasing: 'ease-out
	'
};
simpleAnimationJs(options);
```
