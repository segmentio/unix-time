

/**
 * Converts a date to a unix time stamp
 */

module.exports = function (date) {
  date = new Date(date);
  return Math.floor(date.getTime() / 1000);
}