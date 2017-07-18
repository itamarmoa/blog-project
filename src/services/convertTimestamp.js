import Moment from 'moment';
import Config from '../config';

export default function convertTimestamp(timestamp) {
  let date = Moment( Number(timestamp) );
  return date.format(Config.dateFormat);
}
