//
// tests_hub.js
//
const hub = () => {
    const log = require('../log');
    
    //
    // build context object
    //
    log.msg('Creating testing context...');
    const TestingContext = require('./framework/TestingContext');
    const context = new TestingContext();
    
    //
    // find test files
    //
    log.msg('Scanning directory for tests...');
    const fs = require('fs');
    const files = fs.readdirSync(__dirname);
    const testFiles = [];
    files.forEach(
        f => {
            // check file complies
            const fn = f.toLowerCase();
            if ( 
                fn.startsWith('test_') 
                &&
                fn.endsWith('.js')
                &&
                !__filename.toLowerCase().endsWith(fn)
            ) {
                const testFile = `./${f}`;
                testFiles.push(testFile);
            }
        }
    );

    //
    // iterate files, load 'em, and run each one
    //
    log.msg('Running tests...');
    testFiles.forEach(
        testFile => {
            const test = require(testFile);
            log.msg(`Starting test: ${test.test_name}`);
            test.run_test(context);
            log.msg(`Finished test: ${test.test_name}`);
        }
    );
};

module.exports = {
    run_tests:      hub
}