const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  it("returns an empty list when no notes added", () => {
    const notes = new NotesModel();
    notes.getNotes();
    expect(notes.getNotes()).toEqual([]);
  });

  it("can add two notes", () => {
    const notes = new NotesModel();
    notes.addNote("Buy milk");
    notes.addNote("Go to the gym");
    expect(notes.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("can add reset notes through reset method", () => {
    const notes = new NotesModel();
    notes.addNote("Buy milk");
    notes.addNote("Go to the gym");
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });
});
