import Recrue from '../models/Recrue'

  function generateRecrue() {
    let errors = false;
    let recrue = new Recrue();

    postMessage({ infosRecrue: recrue});
    if (!errors) {
      setTimeout(generateRecrue, 30000)
    }
  }
    // LOAD appSettings.json
      generateRecrue();