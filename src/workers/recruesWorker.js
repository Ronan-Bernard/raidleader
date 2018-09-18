import Recrue from '../models/Recrue'

  function generateRecrue(n = 0) {
    n++;
    let errors = false;
    let recrue = new Recrue(n);

    postMessage({ infosRecrue: recrue});
    if (!errors) {
      setTimeout(function() { generateRecrue(n) }, 30000)
    }
  }
    // LOAD appSettings.json
      generateRecrue();