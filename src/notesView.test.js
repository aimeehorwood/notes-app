/**
 * @jest-environment jsdom
 */

 jest.mock('./notesClient')
 
const fs = require("fs");
const NotesClient = require('./notesClient');
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Notes view", () => {
  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const client = new NotesClient();
    const model = new NotesModel();
    const view = new NotesView(model,client);

    // fill the input
    const input = document.querySelector("#add-note-input");
    input.value = "Test note";

    const button = document.querySelector("#add-note-btn");
    button.click();

    // 3. There should now be a note on the page
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "Test note"
    );
  });

  it('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('one');
    model.addNote('two');
  
    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });


  it('displays information from the API', (done) => {
    const model = new NotesModel();
    const mockedClient = new NotesClient();
    const view = new NotesView(model, mockedClient);

    mockedClient.loadNotes.mockImplementation((callback) => {
      const data = [{content : "This is a note" },{content : "This is another note" }]
      return callback(data)
    })

    view.displayNotesFromApi()
    // console.log(document.body.innerHTML);
    console.log(document.querySelector('div.note'));
  
    done()
  });

});
