const deasync = require('deasync')
const readline = require('readline')

// The easy to use whoop function
function Whoop (question, callback) {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(question + ':\n', (answer) => {
    // Wow, wasn't that easy!
    callback(null, answer)
    rl.close();
  });
}


module.exports = deasync(Whoop)