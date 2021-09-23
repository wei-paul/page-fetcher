// It should take two command line arguments:

// a URL
// a local file path
fs = require('fs'); //require the built-in library "file system"
const noop = () => {};
const request = require('request');
request('http://www.example.edu/', (error, response, body) => {
fs.writeFile ("./index.html", body, noop) 
console.log(`Downloaded and saved ${body.length} ./index.html`)
})