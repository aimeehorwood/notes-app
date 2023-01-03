/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Notes view", () => {
  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("../index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

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
    document.body.innerHTML = fs.readFileSync('../index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('one');
    model.addNote('two');
  
    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
