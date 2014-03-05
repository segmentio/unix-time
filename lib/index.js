
/**
 * Converts a date to a unix time stamp
 *
 * @param {Date} [date]
 * @return {Number}
 */

module.exports = function (date) {
  date = date || new Date();
  return Math.floor(date.getTime() / 1000);
};
