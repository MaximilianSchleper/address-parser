const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('addresses.csv')
  .pipe(csv())
  .on('data', (row) => {
    whole_street = row.wholestreet;
    split_street = whole_street.split(/(\d+(.*))/);
    console.log({'streetname': split_street[0], 'streetnumber': split_street[1]});
  })
  .on('end', () => {
    console.log('done');
  });
