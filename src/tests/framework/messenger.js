//
// messenger.js
//
const messenger = () => {
    const log = require('../../log');
    const events = require('events');
    const emitter = new events.EventEmitter();
    emitter.on('message', msg => {
        log.msg(`Tests Messenger: ${msg}`);
    });

    return {

        message:
        (msg) => {
            emitter.emit('message', msg);
        }

    };
};

module.exports = messenger();