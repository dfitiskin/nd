const prince = require('prince');

prince()
    .inputs('es2015.html')
    .output('es2015.pdf')
    .execute()
    .then(function () {
        console.log('Done');
    }, function (error) {
        console.log('Error: ', util.inspect(error));
    });
