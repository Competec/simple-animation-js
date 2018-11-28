const simpleAnimationJs = require('../../../dist/simpleAnimation.min');

document.getElementById('button').addEventListener('click', () => {
    const options = {
        target: document.getElementById('wrapper'),
        animations: [
            {
                attribute: 'height',
                animateTo: '100%',
                duration: 1200,
                easing: 'ease-in',
                pctToScroll: true,
            },
            {
                attribute: 'opacity',
                animateTo: 1,
                duration: 5500,
            },
        ],
        defaultDuration: 1000,
        defaultEasing: 'ease-out',
        DEBUG: true,
    };

    simpleAnimationJs(options);
});
