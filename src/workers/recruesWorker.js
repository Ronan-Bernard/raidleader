import Recrue from '../models/Recrue';

  function prepareGenerateRecrue(workerScope) {
    generateRecrue();
  }
  function generateRecrue(n = 0) {
    n++;
    let errors = false;
    let recrue = new Recrue(n);
    postMessage({ infosRecrue: recrue});
    if (!errors) {
      setTimeout(function() { generateRecrue(n);}, 5000);
    }
  }
    // LOAD appSettings.json

export default prepareGenerateRecrue;
