    const path = require('node:path');

    console.log(__dirname);
    console.log(__filename);

    console.log(path.basename(__dirname)) // returns the last target in path
    console.log(path.basename(__filename))
    
    console.log(path.parse(__dirname)) // returns the last target in path
    console.log(path.parse(__filename))