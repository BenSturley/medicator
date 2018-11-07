//
// log.js
//
const log = () => {

    const output_msg = msg => {
        console.info(msg);
    };

    const output_err = err => {
        console.error(err);
    };

    const output_notice = msg => {
        console.log(`*** NOTICE: ***`);
        console.log(`*** ${msg} ***`);
    };

    const output_title = (msg, draw_underline = false) => {
        const o = `-={${msg}}=-`;
        console.log(o);
        if (draw_underline) {
            console.log(('=').repeat(o.length));
        }
    };

    return {
        msg:        output_msg,
        err:        output_err,
        notice:     output_notice,
        title:      output_title,
    };

};

module.exports = log();