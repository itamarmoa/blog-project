// import Moment from 'moment';
const Moment = require('moment');
const Config = require('../config');
// import Config from '../config';

function convertTimestamp(timestamp) {
    let date = Moment( Number(timestamp) );
    return date.format(Config.dateFormat);
}
function convert(timestamp, type) {
    let date = Moment(Number(timestamp));
    switch (type) {
      case 'month-num':
        return date.format("MM");
      case 'month-name':
        return date.format("MMMM");
      case 'year-month-name':
        return date.format("YYYY MMMM");
      case 'year':
        return date.format("YYYY");
    }
}

module.exports = {convert,convertTimestamp};
