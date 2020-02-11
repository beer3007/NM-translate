const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('translation.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results.length);

        let duplicate = [];
        let flag = false;
        let data1 = results;
        let data2 = results;
        let count = 0;

        for (let i = 0; i < data1.length; i++) {
            for (let j = 0; j < data2.length; j++) {
                if (data1[i].Key === data2[j].Key) {
                    count++
                }

                if (count > 1) {
                    duplicate.push(data1[i].Key)
                    count = 0;
                }
            }
            count = 0;
        }
        console.log(duplicate);
    });
