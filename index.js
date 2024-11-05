console.log('Hello, World!');

function printMessage(message) {
  console.log(message);
}

printMessage('This is a custom message');

function handleError(error) {
  console.error('Error:', error);
}

try {
  printMessage('Running safely');
} catch (error) {
  handleError(error);
}
