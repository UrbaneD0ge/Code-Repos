var Airtable = require('airtable');
var base = new Airtable({ apiKey: key }).base(base);
var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY;
var table = tblB2B8JGMosXXYBX;

base('NPU Master List').select({
  maxRecords: 3,
  view: "NPU Information Sheet"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function (record) {
    console.log('Retrieved', record.get('NPU'));
  });

      // If there are no more records, `done` will get called.
      fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });