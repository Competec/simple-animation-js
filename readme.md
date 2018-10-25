# simple-animation-js

> Simple animation library which uses CSS transitions in the background and allows animating dimension percentages.

## Installation

    npm install simple-animation-js

## Arguments

### Options
| Argument | Default Value | Type | Required | Description |
|--|--|--|--|--|
| `target` | -- | DOM Node| ✅ | The DOM Node to animate. |
| `animations` | -- | Array| ✅ | An array of the properties that will be animated, see [Animations](#Animations). At least one property required. |
| `defaultDuration` | `250` | Number| ❌ | The default animation duration. |
| `defaultEasing` | `linear` | String| ❌ | The default CSS easing type. |

### Animations
| Argument | Default Value | Type | Required | Description |
|--|--|--|--|--|
| `attribute` | -- | String | ✅ | The CSS Attribute to animate. |
| `animateTo` | -- | Various | ✅ | The value the element animates to. |
| `duration` | `defaultDuration` | Number| ❌ | The animation duration. |
| `easing` | `defaultEasing` | String | ❌ | The CSS easing type. |
| `pctDimension` | `false` | Boolean | ❌ | This property allows animating percentages on the properties: `width`, `height`, `max-width`, `max-height`, `min-width`, `min-height` |

## Example

    const simpleAnimationJs = require('simpleAnimationJs');
	const elementToAnimate = document.getElementById('testDiv');
	const options = {
		target: elementToAnimate,
		animations: [{
		    attribute: 'height',
		    animateTo: '100%'
		    duration: 400,
		    easing: 'fadein',
		    isPercentage: true
	    },
	    {
		    attribute: 'opacity',
		    animateTo: 1
	    }],
	    defaultDuration: 350,
	    defaultEasing: 'fadeout'
   	};
   	simpleAnimationJs(options);

