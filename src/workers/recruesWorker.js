// worker.js
const workercode = () => {

  let errors = false;
  let compteurRecrues = 0;

  // LOAD appSettings.json

  function generateRecrue() {
    compteurRecrues++;

    // calculer ses infos

      // générer un nom

      // générer des stats

      // poster au thread principal
      self.postMessage({ message: 'info recrues ' + compteurRecrues});
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