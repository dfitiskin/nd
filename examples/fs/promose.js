const readFile = require('fs').readFile;

function getPromiseCallback() {
  let cb;
  let promise = new Promise((resolve, reject) => {
    cb = function (err, ...args) {
      if (err) return reject(err);
      resolve(args.lenght > 1 ? args : args.shift());
    }
  });

  cb.promise = promise;
  return cb;
}

function readFilePromise(file) {
  let cb = getPromiseCallback();
  readFile(file, {encoding: 'utf-8'}, cb);
  return cb.promise;
}

readFilePromise(__dirname + '/../data.json')
  .then(console.log);
