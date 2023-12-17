// gatau bingung

//     if (!isDriving) {
//         isDriving = true
//         startTime = new Date()
//         totalWarning = 0
//         res.status(200).send('Driving started.')
//     } else {
//         res.status(400).send('Already driving.')
//   }

//   const readline = require('readline');

// function duration() {
//   let startTime;
//   let stopTime;
//   let isRunning = false;

//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   function start() {
//     startTime = new Date();
//     isRunning = true;
//     console.log('Stopwatch started. Type "stop" if you want to stop');
//   }

//   function stop() {
//     if (!isRunning) {
//       return;
//     }
//     stopTime = new Date();
//     isRunning = false;
//     const duration = stopTime - startTime;
//     const formattedDuration = formatDuration(duration);
//     console.log(`Stopwatch stopped. Total duration: ${formattedDuration}`);
//     rl.close();
//   }

//   function formatDuration(duration) {
//     let seconds = Math.floor(duration / 1000);
//     let minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);

//     const remainingSeconds = seconds % 60;
//     minutes %= 60;

//     return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//   }

//   rl.question('Press "start" to begin the stopwatch: ', (answer) => {
//     if (answer.toLowerCase() === 'start') {
//       start();
//     } else {
//       console.log('Invalid input. Please type "start" to begin.');
//       rl.close();
//     }
//   });

//   rl.on('line', (input) => {
//     if (input.trim().toLowerCase() === 'stop') {
//       stop();
//     } else {
//       console.log('Invalid input. Please type "stop" to stop the stopwatch.');
//     }
//   });
// }

// duration();
