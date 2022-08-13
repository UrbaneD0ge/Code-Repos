var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyDFa7RNG5otUO3C' }).base('appotIP5Ss3YUKYYR');


// on submit, get the values from the form
document.getElementById('submit').addEventListener('click', function (event) {
  let NPU = document.getElementById('NPU').value;
  let name = document.getElementById('name').value;
  let itmType = document.getElementById('itmType').value;
  base('Table 1').create([
    {
      fields: {
        "fldSdIFMSRkdJGd9Z": 'NPU-' + NPU + '_' + new Date().toLocaleDateString(),
        "fldck9li8kMT9xBLx": `${itmType}`,
        "fldYxaSmdxSjS1N0k": name,
        "fldBuDdWpnXqlmr9T": ["Approval"],
        "fldswanafOKIWEGy3": "Applicant was asked to construct additional parking so that patrons will be incentivized to drink and drive.",
        "fldMb04KSFvOpBXf9": [""]
      }
    }
  ], function (err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function (record) {
      console.log(record.getId());
      console.log(record.fields);
    }
    );
  }
  );
}
);
