// 
// test_mongodb.js
//
const tester = context => {
    if (context === undefined) {
        throw new ReferenceError('No TestingContext instance provided.');
    }

    context.messenger.message('MongoDB tests started.');
    
    context.messenger.message('MongoDB tests complete.');
    
};

module.exports = {
    run_test:       tester,
    test_name:      'MongoDB Tests'
};