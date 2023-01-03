const NotesModel = require("./notesModel");

console.log('The notes app is running');


const model = new NotesModel();
// model.addNote('Buy milk');
// model.addNote('Go to the gym');

console.log(model.getNotes());


