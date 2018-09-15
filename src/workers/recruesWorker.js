import Recrue from '../models/Recrue'

  function generateRecrue() {
    let errors = false;
    let recrue = new Recrue();

    postMessage({ infos: JSON.stringify(recrue)});
    if (!errors) {
      setTimeout(generateRecrue, 30000)
    }
  }
    // LOAD appSettings.json
    console.log('dans le worker');
    generateRecrue();