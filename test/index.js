
var unixTime = require('..')
  , should   = require('should');


describe('unix-time', function () {

  it('should convert a date to a unix timestamp', function () {
    var date = new Date(1374016861934);
    unixTime(date).should.eql(1374016861);
  });
});