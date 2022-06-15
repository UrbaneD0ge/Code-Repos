var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyDFa7RNG5otUO3C' }).base('appMDLXS91cMvJWid');

base('NPU Master List').select({
  maxRecords: 25,
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