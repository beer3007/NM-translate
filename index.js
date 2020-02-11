const fs = require('fs')
const neatCsv = require('neat-csv');

createJsonString = (data, callback) => {
    let str = "";

    for (let i = 0; i < data.length; i++) {
        if (i > 0) {
            str += ",\n";
        }
        str += `"${data[i].Key}":"${data[i].Thai ? data[i].Thai : data[i].English}"`;
    }
    
    callback(`{${str}}`);
}


fs.readFile('translation.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const dataJson = await neatCsv(data);
    createJsonString(dataJson, function (response) {
        fs.writeFileSync('th.json', response);
    });

})