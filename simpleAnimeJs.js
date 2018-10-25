// Main function
const animate = (options) => {
    // Define Variables
    const {
        target,
        animations,
        defaultDuration = 250,
        defaultEasing = 'linear',
    } = options;
    const transitions = [];
    const styles = [];
    // Helpers
    const getDecimalFromPercentage = value => parseFloat(value) / 100;
    const checkIfHeight = value => value.indexOf('height') !== -1;
    const checkIfWidth = value => value.indexOf('width') !== -1;
    const msToSeconds = value => `${value / 1000}s`;
    // Handler
    const handlePercentage = (domTarget, attribute, animateTo) => {
        const checkedHeight = checkIfHeight(attribute);
        const checkedWidth = checkIfWidth(attribute);
        if (!checkedHeight && !checkedWidth) {
            throw new Error('Invalid direction');
        }
        animateTo = animateTo !== 'auto' ? animateTo : '100%';
        const value = checkedHeight
            ? domTarget.scrollHeight
            : domTarget.scrollWidth;
        return `${value * getDecimalFromPercentage(animateTo)}px`;
    };
    // Loops
    animations.forEach((animation) => {
        const {
            attribute,
            pctDimension = false,
            duration = defaultDuration,
            easing = defaultEasing,
        } = animation;
        let { animateTo } = animation;

        animateTo = pctDimension
            ? handlePercentage(target, attribute, animateTo)
            : animateTo;

        styles.push({
            attribute,
            animateTo,
        });
        transitions.push(`${attribute} ${msToSeconds(duration)} ${easing}`);
    });
    // Append transition before attributes
    target.style.transition = transitions.join();
    // Append attributes after transitions
    styles.forEach((style) => {
        target.style[style.attribute] = style.animateTo;
    });
};

module.exports = animate;
