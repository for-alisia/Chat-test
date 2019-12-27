// import needed features from core-js
// import 'core-js/features/promise';

const pug = require('pug');

document.addEventListener('DOMContentLoaded', e => {
    const authBlock = pug.compileFile('../pug/components/_auth.pug');
    console.log('authBlock');
});
