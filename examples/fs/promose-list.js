const fs = require('fs');

const makefolders = function (folders) {
  return new Promise((resolve, reject) => {
    folders.forEach(name => {
      fs.mkdir(name, (err) => {
        if (err) return reject(err);
        resolve(name);
      });
    });
  });
};

makefolders(['1', '2', '3']).then(result => {
  console.log('done');
  console.log(result);
});
