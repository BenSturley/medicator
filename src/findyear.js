//
// findyear.ls
//
const findYear = () => {
    
    const getDayName = day => {
        let rv = '(unknown)';
        switch ( day ) {
            case 0:
                rv = 'Sunday';
                break;
            case 1:
                rv = 'Monday';
                break;
            case 2:
                rv = 'Tuesday';
                break;
            case 3:
                rv = 'Wednesday';
                break;
            case 4:
                rv = 'Thursday';
                break;
            case 5:
                rv = 'Friday';
                break;
            case 6:
                rv = 'Saturday';
                break;
            default:
                break;
        }
        return rv;
    };

    const startyear = 1990;
    const endyear   = 2019;
    const results   = [];
    
    for ( let year = startyear; year <= endyear; year++ ) {
        let d = new Date( year, 2, 24 );
        let day = d.getDay();
        let obj = {
            year:   year,
            day:    getDayName( day ),
            date:   d.toDateString()
        };
        results.push( obj );
    }
    
    const util = require('util');
    results.forEach(
        o => {
            console.log( util.inspect( o ) );
        }
    );

};

module.exports = findYear();