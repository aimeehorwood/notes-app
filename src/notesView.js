// notesView.js

class NotesView {
  constructor(model, client) {
    this.client = client;
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");

    this.addButtonEl = document.querySelector("#add-note-btn");

    this.addButtonEl.addEventListener("click", () => {
      console.log("button clicked");
      const newNote = document.querySelector("#add-note-input").value;
      this.addNewNote(newNote);
      this.client.createNote(newNote);

      const userInput = document.querySelector("#add-note-input");
      userInput.value = "";
    });
  }

  addNewNote(newNote) {
    console.log("addNewNote called");
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    console.log("displaynotes called");
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });

    const notes = this.model.getNotes();

    // For each note, create and append a new element on the main container
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";

      document.querySelector("#add-note-input").value = "";
      this.mainContainerEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {this.model.setNotes(notes); this.displayNotes();}, () => this.displayError());
  }

 
  displayError = () => {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Oops, something went wrong!";
    errorMessage.className = "error";
    this.mainContainerEl.append(errorMessage);
  };
}

module.exports = NotesView;
