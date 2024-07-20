// Database Paths
var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';
var dataDesPath = 'test/destination';

// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const databaseDes = database.ref(dataDesPath);

// Variables to save database current values
var floatReading;
var intReading;
var desReading;

// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("reading-float").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

databaseInt.on('value', (snapshot) => {
  intReading = snapshot.val();
  console.log(intReading);
  document.getElementById("reading-int").innerHTML = intReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});


databaseDes.on('value', (snapshot) => {
  desReading = snapshot.val();
  console.log(desReading);
  document.getElementById("desRead").innerHTML = desReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});


