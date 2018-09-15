import Recrue from '../models/Recrue'

// worker.js
const workercode = () => {

  let errors = false;

  // LOAD appSettings.json

  function generateRecrue() {
    var recrue = new Recrue();

      // poster au thread principal
      self.postMessage({ recrueInfos: JSON.stringify(recrue)});
    if (!errors) {
      setTimeout(generateRecrue, 30000)
    }
  }
  generateRecrue();


  self.onmessage = function(e) {
    console.log('Message received from main script');
    var workerResult = 'Received from main: ' + (e.data);
    console.log('Posting message back to main script');
    self.postMessage(workerResult);
  }
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const recrueworker_script = URL.createObjectURL(blob);

module.exports = recrueworker_script;