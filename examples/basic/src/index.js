import simpleAnimationJs from '../../../src/simpleAnimation';

document.getElementById('button').addEventListener('click', () => {
    const options = {
        target: document.getElementById('div'),
        animations: [
            {
                attribute: 'width',
                animateTo: '100%',
                duration: 200,
                easing: 'ease-in',
                isPercentage: true
            },
            {
                attribute: 'opacity',
                animateTo: 1
            }
        ],
        defaultDuration: 1000,
        defaultEasing: 'ease-out'
    };

    simpleAnimationJs(options);
});
