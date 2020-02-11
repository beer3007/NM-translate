const readXlsxFile = require('read-excel-file/node');

const fs = require('fs');

fs.readFile('en.json', 'utf8', (err, enJson) => {    
    fs.readFile('th.json', 'utf8', (err, thJson) => {   
        let overKet = [];
        let dataEn = JSON.parse(enJson)
        let dataTh = JSON.parse(thJson)            
        for (const [key1, value1] of Object.entries(dataEn)) {
            let flag = true;
            for (const [key2, value2] of Object.entries(dataTh)) {
                if (key2 == key1) {
                    flag = false
                }
            }

            if(flag){
                console.log(key1)
                flag = false;
                
            }           
        }   
    });
});
