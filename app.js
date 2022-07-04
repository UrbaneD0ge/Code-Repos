var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyDFa7RNG5otUO3C' }).base('appotIP5Ss3YUKYYR');

base('Table 1').create([
  {
    fields: {
      "fldSdIFMSRkdJGd9Z": "NPU-U_10-24-2022",
      "fldck9li8kMT9xBLx": "LRB",
      "fldYxaSmdxSjS1N0k": "O'Drinkyhan's",
      "fldBuDdWpnXqlmr9T": ["Approval"],
      "fldswanafOKIWEGy3": "Applicant was asked to construct additional parking so that patrons will be incentivized to drink and drive.",
      "fldMb04KSFvOpBXf9": [""]
    }
    // fields: {
    //   "fldSdIFMSRkdJGd9Z": "NPU-U_11-25-2022",
    //   "fldck9li8kMT9xBLx": "ZRB",
    //   "fldYxaSmdxSjS1N0k": "Z-22-123",
    //   "fldBuDdWpnXqlmr9T": ["Deferral"],
    //   "fldswanafOKIWEGy3": "",
    //   "DeferTo:": ["3 Cycles"]
    // }
  }
  ], function (err, records) {
      if (err) {
        console.error(err); return;
      }
      records.forEach(function (record) {
        console.log(record.getID());
      });
    });




// base('appotIP5Ss3YUKYYR').select({
//   fields: ["NPU", "Status"],
//   maxRecords: 25,
//   view: "NPU Information Sheet"
// }).eachPage(function page(records, fetchNextPage) {
//   // This function (`page`) will get called for each page of records.

//   records.forEach(function (record) {
//     console.log(record.get('NPU'), record.get('Status'));
//   });

//       // If there are no more records, `done` will get called.
//       fetchNextPage();

//     }, function done(err) {
//         if (err) { console.error(err); return; }
//     });