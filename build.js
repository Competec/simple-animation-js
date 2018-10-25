/* eslint-disable */
const fs = require('fs');
const { compile } = require('google-closure-compiler-js');

const fileIn = 'simpleAnimeJs.js';
const fileOut = 'simpleAnimeJs.min.js';

console.info('Compiling...');

fs.unlink(fileOut, (error) => {
    fs.readFile(fileIn, { encoding: 'utf-8' }, (error, data) => {
        if (error) throw error;
        const flags = {
            jsCode: [{ src: data }],
            languageIn: 'ES6',
            languageOut: 'ES5',
        };
        const out = compile(flags);
        fs.writeFile(fileOut, out.compiledCode, (error) => {
            if (error) throw error;
            console.info('successful 😄');
        });
    });
});
/* eslint-enable */
