'use strict';

/* eslint-disable */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { window } = new JSDOM(`<html><head><script></script></head><body></body></html>`);
global.window = window;
global.document = window.document;

global.window.mocha = {};

global.chai = require('chai');
global.sinonChai = require('sinon-chai');

global.chai.use(sinonChai);

global.expect = global.chai.expect;
global.assert = global.chai.assert;

global.sinonModule = require('sinon');
global.sinon = global.sinonModule.createSandbox();

global.afterEach(function() {
    global.sinon.restore();
    document.body.innerHTML = '';
});
/* eslint-enable */
