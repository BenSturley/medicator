// 
// test_mongodb.js
//
const tester = context => {
    if (context === undefined) {
        throw new ReferenceError('No TestingContext instance provided.');
    }
};

module.exports = {
    run_test:   tester
};