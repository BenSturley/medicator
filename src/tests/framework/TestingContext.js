//
// TestingContext.js
//
class TestingContext {
    constructor() {
        this._messenger = require('./messenger');
    }
    
    // messenger
    get messenger() {
        return this._messenger;
    }
    set messenger(v) {
        this._messenger = v;
    }
}

module.exports = TestingContext;