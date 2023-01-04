const NotesClient = require("./NotesClient");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");


const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model,client);


view.displayNotes();




// fetch from notes server 
//fetch('http://localhost:3000/notes')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// });