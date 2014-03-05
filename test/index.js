
var unixTime = require('..')
  , should   = require('should');


describe('unix-time', function () {
  describe('when a date argument is given', function () {
    it('should convert it to a unix timestamp', function () {
      var date = new Date(1374016861934);
      unixTime(date).should.eql(1374016861);
    });
  });

  describe('when no arguments are given', function () {
    it('should return the current timestamp', function () {
      var expected = Math.floor(new Date().getTime() / 1000);
      unixTime().should.equal(expected);
    });
  });
});
