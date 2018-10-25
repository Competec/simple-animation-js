require('./config');

const simpleAnimeJs = require('../simpleAnimeJs');

describe('simpleAnimeJs', function () {
    describe('animations', function () {
        beforeEach(() => {
            const template = document.createElement('div'); 
            template.id = 'testid';
            document.body.appendChild(template);
            this.options = {
                target: document.getElementById('testid'),
                animations: [
                    {
                        attribute: 'height',
                        isPercentage: true,
                        animateTo: '100%',
                        duration: 5000
                    },
                    {
                        attribute: 'max-width',
                        isPercentage: true,
                        animateTo: 'auto',
                        easing: 'fadeout'
                    },
                    {
                        attribute: 'opacity',
                        animateTo: 1
                    }
                ]
            }
        });
        it('should set height and opacity variables', () => {
            simpleAnimeJs(this.options);
            
            const element = document.getElementById('testid');
            
            expect(element.style._values).to.eql({"height": "0px", "opacity": "1", "max-width": "0px"});
            expect(element.style.transition).to.eql('height 5s linear,max-width 0.25s fadeout,opacity 0.25s linear');
        });
        it('should throw an error if ispercentage and attribute false', () => {
            this.options.animations[0].attribute = 'high';
            
            assert.throws(simpleAnimeJs.bind(undefined, this.options), Error, "Invalid direction");
        });
        it('should use set default easing and default duration', () => {
            this.options.defaultEasing = 'fadein';
            this.options.defaultDuration = 1337;
            
            simpleAnimeJs(this.options);
            
            const element = document.getElementById('testid');
            
            expect(element.style._values).to.eql({"height": "0px", "opacity": "1", "max-width": "0px"});
            expect(element.style.transition).to.eql('height 5s fadein,max-width 1.337s fadeout,opacity 1.337s fadein');
        });
    });
});