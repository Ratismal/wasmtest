const util = require('util');
const fs = require('fs');
var source = fs.readFileSync('./wasm_test_bg.wasm');
const env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
      initial: 256
    }),
    table: new WebAssembly.Table({
      initial: 0,
      element: 'anyfunc'
    })
  }

var typedArray = new Uint8Array(source);

WebAssembly.instantiate(typedArray, {
  env: env
}).then(result => {
  console.log(util.inspect(result, true, 0));
  console.log(result.instance.exports.add(-5, 2));
}).catch(e => {
  // error caught
  console.log(e);
});