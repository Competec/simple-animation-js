/* eslint-disable no-undef*/

require('./config');
const simpleAnimeJs = require('../src/simpleAnimation');

describe('simpleAnimeJs', function() {
    describe('animations', function() {
        beforeEach(() => {
            const template = document.createElement('div');
            template.id = 'testid';
            document.body.appendChild(template);
            this.options = {
                target: document.getElementById('testid'),
                animations: [
                    {
                        attribute: 'height',
                        pctToScroll: true,
                        animateTo: '100%',
                        duration: 5000,
                    },
                    {
                        attribute: 'max-width',
                        pctToScroll: true,
                        animateTo: '100%',
                        easing: 'fadeout',
                    },
                    {
                        attribute: 'opacity',
                        animateTo: 1,
                    },
                ],
            };
        });
        it('should set height and opacity variables', () => {
            simpleAnimeJs(this.options);

            const element = document.getElementById('testid');

            expect(element.style._values).to.eql({
                transition: 'height 5s linear,max-width 0.25s fadeout,opacity 0.25s linear',
                height: '0px',
                opacity: '1',
                'max-width': '0px',
            });
            expect(element.style.transition).to.eql(
                'height 5s linear,max-width 0.25s fadeout,opacity 0.25s linear'
            );
        });
        it('should use set default easing and default duration', () => {
            this.options.defaultEasing = 'fadein';
            this.options.defaultDuration = 1337;
            this.options.DEBUG = true;

            simpleAnimeJs(this.options);

            const element = document.getElementById('testid');

            expect(element.style._values).to.eql({
                transition: 'height 5s fadein,max-width 1.337s fadeout,opacity 1.337s fadein',
                height: '0px',
                opacity: '1',
                'max-width': '0px',
            });
            expect(element.style.transition).to.eql(
                'height 5s fadein,max-width 1.337s fadeout,opacity 1.337s fadein'
            );
        });
        describe('should throw an error', () => {
            it('when ispercentage and attribute false', () => {
                this.options.animations[0].attribute = 'high';

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    'Invalid direction'
                );
            });
            it('when target is not a HTMLElement', () => {
                this.options.target = 'asdf';

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.target} is not of type: ${window.Element}`
                );
            });
            it('when animations is not an array', () => {
                this.options.animations = 1234;

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.animations} is not of type: ${Array}`
                );
            });
            it('when defaultDuration is not a number', () => {
                this.options.defaultDuration = 'long';

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.defaultDuration} is not of type: number`
                );
            });
            it('when defaultEasing is not a string', () => {
                this.options.defaultEasing = [];

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.defaultEasing} is not of type: string`
                );
            });
            it('when DEBUG is not a boolean', () => {
                this.options.DEBUG = 'true';

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.DEBUG} is not of type: boolean`
                );
            });
            it('when attribute is not a string', () => {
                this.options.animations[0].attribute = {};

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.animations[0].attribute} is not of type: string`
                );
            });
            it('when pctToScroll is not a boolean', () => {
                this.options.animations[0].pctToScroll = 0;

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.animations[0].pctToScroll} is not of type: boolean`
                );
            });
            it('when duration is not a number', () => {
                this.options.animations[0].duration = '0';

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.animations[0].duration} is not of type: number`
                );
            });
            it('when easing is not a string', () => {
                this.options.animations[0].easing = 0;

                assert.throws(
                    simpleAnimeJs.bind(undefined, this.options),
                    Error,
                    `${this.options.animations[0].easing} is not of type: string`
                );
            });
        });
    });
});
